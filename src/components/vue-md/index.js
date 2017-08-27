import MdButton from './MdButton.vue'
import MdTextField from './MdTextField.vue'
import elevation from './lib/elevation'
import {durations, curves} from './lib/transitions'
import {
  primaryColor,
  primaryColorActive,
  secondaryColor,
  secondaryColorActive,
  fontFamily,
} from './lib/defaults'

export default {
  install(Vue, options = {}) {
    Vue.component(MdButton.name, MdButton)
    Vue.component(MdTextField.name, MdTextField)
    Vue.mixin({
      data() {
        return {
          vueMDOptions: options,
          vueMDPrimaryColor: options.primaryColor || primaryColor,
          vueMDPrimaryColorActive: options.primaryColorActive || primaryColorActive,
          vueMDSecondaryColor: options.secondaryColor || secondaryColor,
          vueMDSecondaryColorActive: options.secondaryColorActive || secondaryColorActive,
          vueMDFontFamily: options.fontFamily || fontFamily,
          vueMDElevation: options.elevation || elevation,
          vueMDTransitionCurves: options.transitionCurves || curves,
        }
      },
      computed: {
        vueMDTransitionDurations() {
          if (options.transitionDurations) {
            return options.transitionDurations
          }
          if (options.tablet) {
            return durations.tablet
          }
          if (options.wearable) {
            return durations.wearable
          }
          if (options.desktop) {
            return durations.desktop
          }
          return durations.mobile
        },
      },
    })
  },
}
