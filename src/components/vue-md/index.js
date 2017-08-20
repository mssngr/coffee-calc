import MdButton from './MdButton.vue'
import MdTextField from './MdTextField.vue'

const VueMD = {
  install(Vue) {
    Vue.component(MdButton.name, MdButton)
    Vue.component(MdTextField.name, MdTextField)
  },
}

export default VueMD
