function start(e, RGBArray) {
  expand(e, e.target, RGBArray)
  window.addEventListener('mouseup', end)
  window.addEventListener('touchend', end)
  window.addEventListener('touchcancel', end)
}

function end(e) {
  e.preventDefault()
  window.removeEventListener('mouseup', end)
  window.removeEventListener('touchend', end)
  window.removeEventListener('touchcancel', end)
  disappear()
}

function prefixedTransform(el, value) {
  [
    'transform',
    'webkitTransform',
  ].forEach(i => {
    el.style[i] = value
  })
}

const hover = el => () => {
  prefixedTransform(el, 'scale3d(0.45,0.45,0.45)')
  setTimeout(() => prefixedTransform(el, 'scale3d(0.4,0.4,0.4)'), 2000)
}

function expand(e, el, RGBArray) {
  const ripple = document.createElement('span')
  ripple.className = 'md-ripple'

  const size = el.clientWidth > el.clientHeight
      ? el.clientWidth
      : el.clientHeight

  const offset = el.getBoundingClientRect()
  const touchX = e.touches && e.touches[0].clientX
  const touchY = e.touches && e.touches[0].clientY
  const x = `${(touchX || e.clientX) - offset.left}px`
  const y = `${(touchY || e.clientY) - offset.top}px`

  ripple.style.width = `${size * 2}px`
  ripple.style.height = ripple.style.width
  ripple.style.position = 'absolute'
  ripple.style.left = `calc(-${size}px + ${x})`
  ripple.style.top = `calc(-${size}px + ${y})`
  ripple.style.backgroundColor = `rgba(${RGBArray[0]}, ${RGBArray[1]}, ${RGBArray[2]}, 0.25`
  ripple.style.borderRadius = '50%'
  ripple.style.transition = '250ms cubic-bezier(.4, 0, .2, 1)'

  el.appendChild(ripple)

  const computed = window.getComputedStyle(el)
  if (computed.position !== 'absolute' && computed.position !== 'fixed') {
    el.style.position = 'relative'
  }

  prefixedTransform(ripple, 'scale3d(0.2,0.2,0.2)')
  setTimeout(() => {
    prefixedTransform(ripple, 'scale3d(0.4,0.4,0.4)')
  }, 0)

  setTimeout(() => {
    ripple.style.transition = '2000ms cubic-bezier(.4, 0, 1, 1)'
    prefixedTransform(ripple, 'scale3d(0.45,0.45,0.45)')
    setTimeout(() => prefixedTransform(ripple, 'scale3d(0.4,0.4,0.4)'), 2000)
    setInterval(hover(ripple), 4000)
  }, 250)
}

function disappear() {
  const ripples = document.getElementsByClassName('md-ripple')
  const ripplesArray = ripples && Array.from(ripples)
  ripplesArray.forEach(ripple => {
    ripple.style.transition = '250ms cubic-bezier(.4, 0, .2, 1)'
    ripple.style.opacity = 0
    prefixedTransform(ripple, 'scale3d(1,1,1)')
    setTimeout(() => ripple.parentNode && ripple.parentNode.removeChild(ripple), 250)
  })
}

export default start
