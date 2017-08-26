import color from 'color'
import ripple from './ripple'

export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          clickedElement: undefined,
        }
      },
      computed: {
        defaultColorRGBArray() {
          return color(this.vueMDDefaultColor).rgb().array()
        },
        defaultColor12Percent() {
          const RGBArray = color(this.vueMDDefaultColor).rgb().array()
          return `rgba(${RGBArray[0]}, ${RGBArray[1]}, ${RGBArray[2]}, 0.12)`
        },
      },
      methods: {
        startRipple(e) {
          e.preventDefault()
          this.clickedElement = e.target
          ripple(e, this.defaultColorRGBArray)
        },
        endRipple(e) {
          e.preventDefault()
          if ((e.target === this.clickedElement) || (e.target === this.clickedElement.parentNode)) {
            this.$emit('click')
          }
          this.clickedElement = undefined
        },
      },
    })
  },
}
