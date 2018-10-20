/* Third Party */
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import ga from 'vue-ga'
import SunflowerUI from 'sunflower-ui'


/* App */
import App from './App'
import { router } from './config'

Vue.config.productionTip = false
Vue.use(SunflowerUI)

ga(router, 'UA-85823257-1')

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    name: 'Root',
    router,
    render: mount => mount(App)
  })

  router.onReady(() => {
    app.$mount('#docs')
  })
})
