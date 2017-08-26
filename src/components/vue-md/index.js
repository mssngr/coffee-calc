import MdButton from './MdButton.vue'
import MdTextField from './MdTextField.vue'
import {
  primaryColor,
  primaryColorActive,
  secondaryColor,
  secondaryColorActive,
  fontFamily,
} from './utils/variables'

const VueMD = {
  install(Vue, options = {}) {
    Vue.component(MdButton.name, MdButton)
    Vue.component(MdTextField.name, MdTextField)
    Vue.mixin({
      data() {
        return {
          vueMDPrimaryColor: options.primaryColor || primaryColor,
          vueMDPrimaryColorActive: options.primaryColorActive || primaryColorActive,
          vueMDSecondaryColor: options.secondaryColor || secondaryColor,
          vueMDSecondaryColorActive: options.secondaryColorActive || secondaryColorActive,
          vueMDFontFamily: options.fontFamily || fontFamily,
        }
      },
      computed: {
        vueMDDefaultColor() {
          return this.color || (this.secondary ? this.vueMDSecondaryColor : this.vueMDPrimaryColor)
        },
      },
    })
  },
}

export default VueMD
