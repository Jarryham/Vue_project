import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'

Vue.use(Router)

export default new Router({
  linkActiveClass:'mui-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
