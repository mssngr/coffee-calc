import color from 'color'

export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          pressedElement: undefined,
        }
      },
      methods: {
        startRipple(e) {
          e.preventDefault()
          this.pressedElement = e.target
          const rippleColor = this.inverted
            ? 'rgba(255, 255, 255, 0.25)'
            : this.defaultColor25Percent
          start(e, rippleColor)
        },
        endRipple(e) {
          e.preventDefault()
          if ((e.target === this.pressedElement) || (e.target === this.pressedElement.parentNode)) {
            this.$emit('click')
          }
          this.pressedElement = undefined
        },
      },
    })
  },
}

function start(e, rippleColor) {
  appear(e, e.target, rippleColor)
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
  prefixedTransform(el, 'scale3d(0.5,0.5,0.5)')
  setTimeout(() => prefixedTransform(el, 'scale3d(0.45,0.45,0.45)'), 2000)
}

function appear(e, el, rippleColor) {
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
  ripple.style.backgroundColor = rippleColor
  ripple.style.borderRadius = '50%'
  ripple.style.transition = '250ms cubic-bezier(.4, 0, .2, 1)'

  el.appendChild(ripple)

  const computed = window.getComputedStyle(el)
  if (computed.position !== 'absolute' && computed.position !== 'fixed') {
    el.style.position = 'relative'
  }

  prefixedTransform(ripple, 'scale3d(0.2,0.2,0.2)')
  setTimeout(() => {
    prefixedTransform(ripple, 'scale3d(0.45,0.45,0.45)')
  }, 0)

  setTimeout(() => {
    ripple.style.transition = '2000ms cubic-bezier(.4, 0, 1, 1)'
    prefixedTransform(ripple, 'scale3d(0.5,0.5,0.5)')
    setTimeout(() => prefixedTransform(ripple, 'scale3d(0.45,0.45,0.45)'), 2000)
    setInterval(hover(ripple), 4000)
  }, 250)
}

function disappear() {
  const ripples = document.getElementsByClassName('md-ripple')
  const ripplesArray = ripples && Array.from(ripples)
  ripplesArray.forEach(ripple => {
    ripple.style.transition = '250ms cubic-bezier(.4, 0, .2, 1)'
    ripple.style.opacity = 0
    ripple.style.filter = 'blur(10px)'
    prefixedTransform(ripple, 'scale3d(1,1,1)')
    setTimeout(() => ripple.parentNode && ripple.parentNode.removeChild(ripple), 250)
  })
}
