<template>
  <div class="templ">
    <!--新闻头部-->
    <div class="twrap">
      <h2 v-text="info.title"></h2>
      <p class="desc">
        <span>{{info.add_time|timefmt}}</span>
        <span>点击数：{{info.click}}</span>
        <span>分类：民生</span>
      </p>
    </div>
    <!--新闻内容-->
    <div class="content" v-html="info.content">

    </div>
    <!--评论组件-->
    <comment :artid ="newsid"></comment>
  </div>
</template>

<script>
  //引入评论组件
  import comment from '../subcom/comment.vue'

  export default {
    data:function(){
      return {
        info:{},
        newsid:0
      }
    },
    methods:{
      getNewsshow:function(){
        var newsid = this.$route.params.newsid;
        this.$http.get('http://vuecms.ittun.com/api/getnew/'+newsid).then(function(res){
          this.info = res.body.message[0]
        })
      }
    },
    created:function(){
      this.newsid = this.$route.params.newsid;
      this.getNewsshow()
    },
    components:{
      comment
    }

  }
</script>

<style class="scoped">
  .twrap{
    padding: 8px;
    font-size: 14px;
  }
  .twrap h2{
    font-size: 16px;
  }
  .desc{
    padding: 5px;
    border-bottom: 1px solid rgba(0,0,0,.3);
  }
  .desc>span:nth-child(2){
    margin-left: 6px;
  }
  .desc>span:nth-child(3){
    float: right;
    margin-right: 5px;
  }
  .content{
    padding: 8px;
  }
  .content p{
    color: rgba(0,0,0,.8);
  }
</style>
