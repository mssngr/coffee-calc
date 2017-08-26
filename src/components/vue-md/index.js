import MdButton from './MdButton.vue'
import MdTextField from './MdTextField.vue'
import {primaryColor, secondaryColor, fontFamily} from './utils/variables'

const VueMD = {
  install(Vue, options) {
    Vue.component(MdButton.name, MdButton)
    Vue.component(MdTextField.name, MdTextField)
    Vue.mixin({
      data() {
        return {
          vueMDPrimaryColor: (options && options.primaryColor) || primaryColor,
          vueMDSecondaryColor: (options && options.secondaryColor) || secondaryColor,
          vueMDFontFamily: (options && options.fontFamily) || fontFamily,
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
