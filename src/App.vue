<template>
  <div id="app">
    <!--1.0头部-->
    <mt-header fixed title="朝花夕拾"></mt-header>
    <router-view></router-view>

    <!--3.0底部-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item mui-active" to="/Home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {

}
</style>
