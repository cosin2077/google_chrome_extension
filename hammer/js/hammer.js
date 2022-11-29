
const setColor = (color, size = 2, bg = 'white') => {
  return (...args) => {
    args = args.map(arg => {
      if (typeof arg === 'object' && arg !== null) {
        arg = JSON.stringify(arg)
      }
      return arg
    })
    console.log(`%c${args}`,`color:${color};font-size:${size}em;background-color:${bg}`);
  }
}
console.red = setColor('red')
console.blue = setColor('blue')
console.orange = setColor('orange')
console.black = setColor('black')
console.white = setColor('white',1.5,'black')

const startWork = async () => {
  workOfLaowang()
  netflav()
}
function netflav() {
  if (!/netflav/gim.test(location.href)) return
  console.red('run netflav...')
  const key = 'netflav'
  function copyButton() {
    const exists = document.querySelector(`button.${key}`)
    if (exists) return
    const button = document.createElement('button')
    button.className = key
    button.innerText = 'COPY IT!'
    button.onclick = () => {
      const srcList = [...document.querySelectorAll('video')].map(e => e.src).join('\n')
      alert(srcList)
    }
    button.style.position = 'fixed'
    button.style.borderRadius = '5px'
    button.style.display = 'inline-block'
    button.style.height = '40px'
    button.style.width = '100px'
    button.style.top = '10px'
    button.style.right = '10px'
    button.style.zIndex = '99991'
    document.body.appendChild(button)
  }
  function hideContentImage() {
    const images = document.querySelectorAll('img')
    images.forEach(image => {
      image.remove()
    })
  }
  hideContentImage()
  copyButton()
}
function workOfLaowang() {
  if (!/laowang/gim.test(location.href)) return
  console.red('run workOfLaowang...')
  const key = 'workOfLaowang'
  function checkBoxHide() {
    const exists = document.querySelector(`input.${key}`)
    if (exists) return
    const input = document.createElement('input')
    input.className = key
    input.type = 'checkbox'
    const checked = localStorage.getItem(key)
    if (checked === 'true') {
      input.checked = true
    }
    input.onclick = () => {
      localStorage.setItem(key, checked === 'true' ? false : true)
      location.reload();
    }
    input.style.position = 'fixed'
    input.style.top = '10px'
    input.style.right = '10px'
    input.style.zIndex = '99999999'
    document.body.appendChild(input)
  }
  checkBoxHide()
  function hideContentImage() {
    const shouldHide = localStorage.getItem(key) === 'true'
    if (!shouldHide) return
    const images = document.querySelectorAll('#postlist img')
    const sizeLimit = 50
    images.forEach(image => {
      const width = image.naturalWidth || image.offsetWidth
      const height = image.naturalHeight || image.offsetHeight
      // if (width > sizeLimit || height > sizeLimit) {
      //   image.remove()
      // }
      image.remove()
    })
  }
  hideContentImage()
  // setInterval(hideContentImage, 1e3)
}
startWork()