let EventEmitter = require('events').EventEmitter;
let request = require('request-promise-native');
let https = require('https');
let http = require('http');
const headers = {
  'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
}
let options = {
  headers
}

class DouyinParser extends EventEmitter {
  async startMultiTask(urls){
    if(!Array.isArray(urls)) throw new Error('parameter must be array!');
    let rets = [];
    for(let url of urls){
      try{
        let videos = await this.start(url);
        rets.push(videos)
      }catch(err){
        console.log(err)
      }
    }
    return rets;
  }
  async start(url){
    try{
      let redUrl = await this.httpGetLocation(url);
      let content = await this.getContentFromUrl(redUrl);
      let opt = this.getItemIdAndDytk(content);
      let videoUrl = await this.getTrueVideoSrc(opt);
      let videos = await this.handleRes(videoUrl);
      videos = videos.filter(v=>v);
      return videos;
    }catch(err){
      console.log(err);
      return [];
    }
  }
  async httpGetLocation(url) {
    return new Promise((resolve, reject) => {
      let client = url.indexOf('https') != -1 ? https : http;
      client.get(url, options, (res) => {
        resolve(res.headers['location']);
      })
      .on('error',(err)=>{
        reject(err)
      })
    })
  }
  async getContentFromUrl(url){
    return request(url,options)
  }
  getItemIdAndDytk(htmlContent){
    let itemReg = /itemId:\s"(.*?)",/gi;
    let dytkReg = /dytk:\s"(.*?)"/gi;
    let m1 =  htmlContent.match(itemReg) && htmlContent.match(itemReg)[0];
    let m2 = htmlContent.match(dytkReg) && htmlContent.match(dytkReg)[0];
    if(!m1 || !m2) return {};
    m1 = m1.replace(/itemId:\s"/,'');
    m2 = m2.replace(/dytk:\s"/,'');
    if(!m1 || !m2) return {};
    m1 = m1.replace(/",\s*/,'');
    m2 = m2.replace(/"/,'');
    if(!m1 || !m2) return {};
    return {
      itemId:m1,
      dytk:m2
    }
  }
  getTrueVideoSrc(opt){
    let { itemId, dytk } = opt;
    let api = `https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids=${itemId}&dytk=${dytk}`;
    return request(api,options)
  }
  async handleRes(itemInfo){
    let videos = [];
    let ret = [];
    let item = itemInfo
    if(typeof itemInfo == 'string'){
      try{
        item = JSON.parse(itemInfo)
      }catch(err){
        console.log(err);
      }
    }
    try{
      videos = item.item_list[0].video.play_addr.url_list;
    }catch(err){
      console.log(err)
    };
    for(let video of videos){
      let red = await this.httpGetLocation(video);
      ret.push(red)
    }
    return ret;
  }
};
module.exports = { DouyinParser } 