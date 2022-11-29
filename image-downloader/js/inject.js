function safeRun(callback, context) {
  let ret = undefined
  try {
    ret = callback.apply(context, arguments)
  } catch (err) { }
  return ret
}
function validUrl(url) {
  return safeRun(() => new URL(url))
}
function formatFile(img, alt, filename) {
  return {
    url: img,
    rawUrl: img,
    previewUrl: img,
    altName: alt,
    filename: filename || baseName(img),
    downloadFilename: addExt(filename || baseName(img))
  }
}
function parseBgImages() {
  const bgList = [];
  [...document.styleSheets]
    .forEach(sheet => {
      [...sheet.rules].forEach(rule => {
        safeRun(() => {
          const img = rule.style.backgroundImage.slice(4, -1).replace(/"/g, "");
          if (!validUrl(img)) return
          const item = formatFile(img)
          img && bgList.push(item)
        })
      })
    })
  return bgList
}

function parseImages() {
  const images = [...document.querySelectorAll('img')].map(img =>
    formatFile(img.src, img.alt))
  const bgImages = parseBgImages()
  return [...images, ...bgImages]
}

function addExt(url) {
  if (!/jp(e)?g|png|webm|gif/.test(url)) {
    url += '.png'
  }
  return url
}
function baseName(str) {
  var base = new String(str).substring(str.lastIndexOf('/') + 1)
  return base
}
function sendFiles(fileList) {
  chrome.runtime.sendMessage({
    action: "background",
    type: 'setBadge',
    content: fileList.length,
  });
  chrome.runtime.sendMessage({
    action: "popup",
    content: fileList,
  });
}

const startTask = () => {
  const fileList = parseImages()
  sendFiles(fileList)
}
startTask()

setInterval(startTask, 2000)


















