export function throttle(fn, delay = 200) {
  let timer = null
  return function () {
      if (timer) return
      timer = setTimeout(() => {
          timer = null
          fn.apply(this, arguments)
      }, delay)
  }
}
export function debounce(fn, delay = 200) {
  let timer = null
  return function () {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
          fn.apply(this, arguments)
          timer = null
      }, delay)
  }
}
