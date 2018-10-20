import Vue from 'vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.prototype.$http = Axios

Vue.use(VueRouter)


export const router = new VueRouter({
  mode: 'history',
  routes: routes
})
