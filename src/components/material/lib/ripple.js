function prefixedStyle(el, value) {
  [
    'transform',
    'webkitTransform',
  ].forEach(i => {
    el.style[i] = value
  })
}

export default function(e, el, color) {
  const ripple = document.createElement('span')

  const size = el.clientWidth > el.clientHeight
      ? el.clientWidth
      : el.clientHeight

  const offset = el.getBoundingClientRect()
  const x = `${e.clientX - offset.left}px`
  const y = `${e.clientY - offset.top}px`
  console.log(x, y)

  ripple.style.width = `${size * 2}px`
  ripple.style.height = ripple.style.width
  ripple.style.position = 'absolute'
  ripple.style.left = `calc(-${size}px + ${x})`
  ripple.style.top = `calc(-${size}px + ${y})`
  ripple.style.backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.25`
  ripple.style.borderRadius = '50%'
  ripple.style.transition = '250ms'

  el.appendChild(ripple)

  const computed = window.getComputedStyle(el)
  if (computed.position !== 'absolute' && computed.position !== 'fixed') {
    el.style.position = 'relative'
  }

  prefixedStyle(ripple, 'scale3d(0.2,0.2,0.2)')
  ripple.dataset.activated = Date.now()

  setTimeout(() => {
    prefixedStyle(ripple, ' scale3d(0.45,0.45,0.45)')
  }, 0)
}
