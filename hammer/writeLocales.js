const fs = require('fs')
const path = require('path')

const tplName = 'Hammer'
const tplDesc = 
`Hammer`
const dname = `hammer`
const ddesc = `chrome useful tools`

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
    name: 'hammer',
    desc: '最好用谷歌扩展工具！'
  },
  zh_TW:{
    name: 'hammer',
    desc: '最好用谷歌扩展工具！'
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
