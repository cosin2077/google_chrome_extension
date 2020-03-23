
let Koa = require('koa');
let DouyinParser = require('./DouyinParser').DouyinParser;
const Router = require('koa-router');
const body = require('koa-body');

const app = new Koa();
let router = new Router();
const parser = new DouyinParser();

router.get('/',async (ctx)=>{
  ctx.body = "this is index page..."
})

router.get('/douyin-parser',body(),async (ctx)=>{
  const urls =['https://v.douyin.com/7J3DuC/',
  'https://v.douyin.com/7RSPrd/'];
  let body = await parser.startMultiTask(urls);
  ctx.body = body;
})

app
.use(router.routes())   
.use(router.allowedMethods());   

app.listen(3000);
