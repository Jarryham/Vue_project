<template>
  <div class="templ">
    <div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newsList">
          <router-link v-bind="{to:'/news/newsshow/'+item.id}">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
              {{item.title}}
              <p class="mui-ellipsis">{{item.add_time|timefmt}}点击数：{{item.click}}{{item.zhaiyao}}</p>
            </div>
          </router-link>
        </li>

      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    data:function(){
      return {
        newsList:[]
      }
    },
    methods:{
      getNewsList:function(){
        this.$http.get('http://vuecms.ittun.com/api/getnewslist').then(function(res){
          if(res.body.status !=0){
            return
          }
          this.newsList = res.body.message
        })
      }
    },
    created:function(){
      this.getNewsList()
    }
  }
</script>

<style class="scope">

</style>
