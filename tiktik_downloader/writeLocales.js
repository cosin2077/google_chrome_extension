const fs = require('fs')
const path = require('path')

const tplName = 'TickTick downloader'
const tplDesc = 
`TickTick downloader,help browse and download your favorite videos`
const dname = `TickTick downloader,help browse and download your favorite videos.`
const ddesc = `Enjoy and download your favorite videos from tiktok.com`

const msgFile = 'messages.json'
const template = 
`
{
  "appName": {
    "message": "$name",
    "description": "$desc"
  },
  "appDesc": {
    "message": "$dname",
    "description": "$ddesc"
  }
}
`
const langMap = {
  zh_CN:{
    name: 'Image downloader',
    desc: '最好的图片下载工具！'
  },
  zh_TW:{
    name: 'Image downloader',
    desc: '最好的图片下载工具！'
  },
}

const isDir = (dir) => fs.statSync(resolve(root, dir)).isDirectory()
const isFile = (file) => fs.statSync(resolve(root, file)).isFile()
const resolve = path.resolve
const root = '_locales'
const dirs = fs.readdirSync(resolve(root)).filter(isDir)
dirs.forEach(subDir => {
  let data = ''
  if (langMap[subDir]) {
    let tmp = template.replace(/\$name/gi, langMap[subDir].name)
    data = tmp.replace(/\$desc/gi, langMap[subDir].desc)
  } else {
    let tmp = template.replace(/\$name/gi, tplName).replace(/\$desc/gi, tplDesc)
              .replace(/\$dname/gi, dname).replace(/\$ddesc/gi, ddesc)
    data = tmp
  }
  fs.writeFileSync(resolve(root, subDir, msgFile), data)
  console.log('write succeed!')
})
