import MdButton from './MdButton.vue'
import MdTextField from './MdTextField.vue'
import elevation from './lib/elevation'
import transitions from './lib/transitions'
import {
  primaryColor,
  primaryColorActive,
  secondaryColor,
  secondaryColorActive,
  fontFamily,
} from './lib/variables'

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
        }
      },
      computed: {
        vueMDTransitionDurations() {
          if (options.transitionDurations) {
            return options.transitionDurations
          }
          if (options.tablet) {
            return transitions.duration.tablet
          }
          if (options.wearable) {
            return transitions.duration.wearable
          }
          if (options.desktop) {
            return transitions.duration.desktop
          }
          return transitions.duration.mobile
        },
        vueMDTransitionCurves() {
          if (options.transitionCurves) {
            return options.transitionCurves
          }
          return transitions.curves
        },
      },
    })
  },
}
