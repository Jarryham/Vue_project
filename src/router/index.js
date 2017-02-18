import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import newslist from 'components/news/newsList'
import newsshow from 'components/news/newsshow'
import photolist from 'components/photos/photolist'
import imgshow from 'components/photos/imgshow'

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
      name: 'Home2',
      component: Home
    },
    {
      path: '/newsList',
      name: 'newsList',
      component: newslist
    },
    {
      path: '/news/newsshow/:newsid',
      name: 'newsshow',
      component: newsshow
    },
    {
      path: '/photolist',
      name: 'photolist',
      component: photolist
    },
    {
      path: '/imgshow/:imgid',
      name: 'imgshow',
      component: imgshow
    }


  ]
})
