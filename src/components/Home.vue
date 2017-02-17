<template>
  <div class="templ">
    <!--轮播图-->
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in swipeList">
        <a href="">
          <img :src="item.img" alt=""/>
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <!--九宫格模块-->
    <div>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-email"></span>
          <div class="mui-media-body">Email</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">Chat</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">location</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">Search</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">Phone</div></a></li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home',
  data: function(){
    return {
      swipeList:[
        {

        }
      ]
    }
  },
  methods:{
    getData:function(){
      this.$http.get('http://vuecms.ittun.com/api/getlunbo').then(function(result){
        this.swipeList = result.body.message
      })
    }
  },
  created:function(){
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-swipe{
    width: 100%;
    height: 300px;
  }

</style>
