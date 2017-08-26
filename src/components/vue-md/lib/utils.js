import color from 'color'
import elevation from './elevation'
import transitions from './transitions'
import {
  primaryColor,
  primaryColorActive,
  secondaryColor,
  secondaryColorActive,
  fontFamily,
} from './variables'

export default {
  install(Vue) {
    Vue.mixin({
      computed: {
        primaryColor() {
          return this.vueMDOptions.primaryColor || primaryColor
        },
        primaryColorActive() {
          return this.vueMDOptions.primaryColorActive || primaryColorActive
        },
        secondaryColor() {
          return this.vueMDOptions.secondaryColor || secondaryColor
        },
        secondaryColorActive() {
          return this.vueMDOptions.secondaryColorActive || secondaryColorActive
        },
        defaultColor() {
          if (this.color) {
            return this.color
          }
          if (this.primary) {
            return this.primaryColor
          }
          if (this.secondary) {
            return this.secondaryColor
          }
          return 'black'
        },
        defaultColorActive() {
          if (this.activeColor) {
            return this.activeColor
          }
          if (this.primary) {
            return this.primaryColorActive
          }
          if (this.secondary) {
            return this.secondaryColorActive
          }
          return 'black'
        },
        defaultColor12Percent() {
          const RGBArray = color(this.defaultColor).rgb().array()
          return `rgba(${RGBArray[0]}, ${RGBArray[1]}, ${RGBArray[2]}, 0.12)`
        },
        fontFamily() {
          return this.vueMDOptions.fontFamily || fontFamily
        },
        elevation() {
          return this.vueMDOptions.elevation || elevation
        },
        transitionDurations() {
          if (this.vueMDOptions.transitionDurations) {
            return this.vueMDOptions.transitionDurations
          }
          if (this.vueMDOptions.tablet) {
            return transitions.duration.tablet
          }
          if (this.vueMDOptions.wearable) {
            return transitions.duration.wearable
          }
          if (this.vueMDOptions.desktop) {
            return transitions.duration.desktop
          }
          return transitions.duration.mobile
        },
        transitionCurves() {
          if (this.vueMDOptions.transitionCurves) {
            return this.vueMDOptions.transitionCurves
          }
          return transitions.curves
        },
      },
    })
  },
}
