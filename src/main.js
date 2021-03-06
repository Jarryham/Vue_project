// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'//路由组件，配置路由信息
import VueRouter from 'vue-router'

//图片懒加载
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);

import vueResource from 'vue-resource'
Vue.use(vueResource)

//引入min-ui样式表
import '../node_modules/mint-ui/lib/style.css'
import mintUI from 'mint-ui'
Vue.use(mintUI);
//mintUI需要配置的CSS样式
import '../static/mui/css/mui.min.css'
import '../static/mui/css/icons-extra.css'

//页面组件的全局样式表
import '../static/css/sites.css'

//引入时间过滤的包 moment
import moment from 'moment';
Vue.filter('timefmt',function(input,fmtStr){
    fmtStr = fmtStr?fmtStr:"YYYY-MM-DD";
    return moment(input).format(fmtStr)

})

//路由组件
//import home from './components/Home.vue'
//
//var vueRouterObj = new VueRouter({
//  linkActiveClass:'mui-active',
//  routes:[
//    {path:'/Home',component:home},
//    {path:'/',component:home}
//  ]
//})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
