import Vue from 'vue'
import App from './App.vue'
// import MyButton from './components/Button.vue'
// import MyInput from './components/Input.vue'
// import './assets/fonts/font.scss'
import MyUI from '../packages'

Vue.config.productionTip = false

// Vue.component(MyButton.name, MyButton)
// Vue.component(MyInput.name, MyInput)
Vue.use(MyUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
