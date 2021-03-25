const fs = require('fs')
const path = require('path')

const tplName = 'Took downloader'
const tplDesc = 
`Took downloader,help browse and download your favorite videos`
const dname = `Took downloader,help browse and download your favorite videos.`
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
    name: 'Took downloader',
    desc: '最好用的抖/音视频下载工具！'
  },
  zh_TW:{
    name: 'Took downloader',
    desc: '最好用的抖/音视频下载工具！'
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
