const fs = require('fs')
const path = require('path')

const tplName = 'CoinMarketCap'
const tplDesc = 'Cryptocurrency Prices, Charts And Market Capitalizations | CoinMarketCap'

const msgFile = 'messages.json'
const template = 
`
{
  "appName": {
    "message": "$name",
    "description": "$desc"
  },
  "appDesc": {
    "message": "$name",
    "description": "$desc"
  }
}
`
const langMap = {
  zh_CN:{
    name: 'CoinMarketCap',
    desc: '做最好的数字货币行情工具'
  },
  zh_TW:{
    name: 'CoinMarketCap',
    desc: '做最好的数字货币行情工具'
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
    let tmp = template.replace(/\$name/gi, tplName)
    data = tmp.replace(/\$desc/gi, tplDesc)
  }
  fs.writeFileSync(resolve(root, subDir, msgFile), data)
  console.log('write succeed!')
})
