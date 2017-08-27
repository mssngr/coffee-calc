import color from 'color'
import elevation from './elevation'
import {durations, curves} from './transitions'
import {
  primaryColor,
  primaryColorFocused,
  textInPrimary,
  secondaryColor,
  secondaryColorFocused,
  textInSecondary,
  fontFamily,
} from './defaults'

export default {
  install(Vue) {
    Vue.mixin({
      computed: {
        primaryColor() {
          return this.vueMDOptions.primaryColor || primaryColor
        },
        primaryColorFocused() {
          return this.vueMDOptions.primaryColorFocused || primaryColorFocused
        },
        secondaryColor() {
          return this.vueMDOptions.secondaryColor || secondaryColor
        },
        secondaryColorFocused() {
          return this.vueMDOptions.secondaryColorFocused || secondaryColorFocused
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
        defaultColorFocused() {
          if (this.colorFocused) {
            return this.colorFocused
          }
          if (this.primary) {
            return this.primaryColorFocused
          }
          if (this.secondary) {
            return this.secondaryColorFocused
          }
          return 'black'
        },
        invertedTextColor() {
          if (this.primary) {
            return textInPrimary
          }
          if (this.secondary) {
            return textInSecondary
          }
          return 'white'
        },
        defaultColor12Percent() {
          const RGBArray = color(this.defaultColor).rgb().array()
          return `rgba(${RGBArray[0]}, ${RGBArray[1]}, ${RGBArray[2]}, 0.12)`
        },
        defaultColor25Percent() {
          const RGBArray = color(this.defaultColor).rgb().array()
          return `rgba(${RGBArray[0]}, ${RGBArray[1]}, ${RGBArray[2]}, 0.25)`
        },
        fontFamily() {
          return this.vueMDOptions.fontFamily || fontFamily
        },
        elevation() {
          return this.vueMDOptions.elevation || elevation
        },
        transitionCurves() {
          return this.vueMDOptions.transitionCurves || curves
        },
        transitionDurations() {
          if (this.vueMDOptions.transitionDurations) {
            return this.vueMDOptions.transitionDurations
          }
          if (this.vueMDOptions.tablet) {
            return durations.tablet
          }
          if (this.vueMDOptions.wearable) {
            return durations.wearable
          }
          if (this.vueMDOptions.desktop) {
            return durations.desktop
          }
          return durations.mobile
        },
      },
    })
  },
}
