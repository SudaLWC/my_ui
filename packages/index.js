import Button from './Button.vue'
import Input from './Input.vue'
import './fonts/font.scss'

const components = [
  Button,
  Input
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 直接引入文件（非模块化引入）
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}