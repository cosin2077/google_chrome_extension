let Koa = require('koa');
let DouyinParser = require('./DouyinParser').DouyinParser;
const Router = require('koa-router');
const body = require('koa-body');
let fs = require('fs')

const app = new Koa();
let router = new Router();
const parser = new DouyinParser();
const indexMap = {
  index: ''
}


router.get('/', async (ctx) => {
  let content = indexMap.index
  if(!content){ 
    console.log('read from fs...')
    content = fs.readFileSync('./index.html');
    console.log('read from fs finished...')
    indexMap.index = content
  }else{
    console.log('cache hit!')
  }
  ctx.type = 'html';
  ctx.body = content;
})

router.post('/douyin-parser', body(), async (ctx) => {
  if(!Array.isArray(ctx.request.body) || ctx.request.body.length == 0){
    ctx.status = '400';
    ctx.body = 'urls needed to be array!';
  }
  let urls = ctx.request.body;
  let body = await parser.startMultiTask(urls)
  ctx.body = body;
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(async (ctx, next) => {
    if (ctx.status == 404) {
      ctx.body = '404 Page Not Found...'
    }
  })

app.listen(3000,()=>{
  console.log('server running at: http://localhost:3000')
});