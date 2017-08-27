import MdButton from './MdButton.vue'
import MdCard from './MdCard.vue'
import MdTextField from './MdTextField.vue'
import elevation from './lib/elevation'
import {durations, curves} from './lib/transitions'
import {
  primaryColor,
  primaryColorFocused,
  secondaryColor,
  secondaryColorFocused,
  fontFamily,
} from './lib/defaults'

export default {
  install(Vue, options = {}) {
    Vue.component(MdButton.name, MdButton)
    Vue.component(MdCard.name, MdCard)
    Vue.component(MdTextField.name, MdTextField)
    Vue.mixin({
      data() {
        return {
          vueMDOptions: options,
          vueMDPrimaryColor: options.primaryColor || primaryColor,
          vueMDPrimaryColorFocused: options.primaryColorFocused || primaryColorFocused,
          vueMDSecondaryColor: options.secondaryColor || secondaryColor,
          vueMDSecondaryColorFocused: options.secondaryColorFocused || secondaryColorFocused,
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
