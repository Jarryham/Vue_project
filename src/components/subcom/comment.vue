<template>
  <div class="templ">
    <h2 class="commenttil">评论信息</h2>
    <div class="postcomment">
      <textarea placeholder="请输入要评论的内容.." ref="commentMsg"></textarea>
      <mt-button type="danger" size="large" @click="sendMsg">发表</mt-button>
    </div>

    <div class="list">
      <h2 class="commentList">评论列表</h2>
      <ul>
        <li v-for="item in comments">
          {{item.content}}
        </li>
      </ul>
      <mt-button type="danger" size="large" @click="getMoreMsg">加载更多....</mt-button>
    </div>

  </div>
</template>

<script>

  import { Toast } from 'mint-ui';

  export default {
    data:function(){
      return {
        comments:[],
        pageIndex:1
      }
    },
    props:['artid'],
    methods:{
      sendMsg:function(){
        //获取评论信息
        var txt = this.$refs.commentMsg.value;
        var url = 'http://vuecms.ittun.com'+'/api/postcomment/'+this.artid;

        this.$http.post(url,{content:txt},{emulateJSON:true}).then(function(res){
          if(res.body.status !=0){
            Toast(res.body.message);
            return;
          }
          Toast(res.body.message);
          this.$refs.commentMsg.value =""
          this.comments =[]
          this.getMsg(1)

        })

      },
      getMsg:function(pageIndex){

        var url = 'http://vuecms.ittun.com'+'/api/getcomments/'+this.artid+'?pageindex='+pageIndex;
        this.$http.get(url).then(function(res){
          if(res.body.status !=0){
            Toast(res.body.message);
            return;
          }
          this.comments = this.comments.concat(res.body.message)

        })
      },
      getMoreMsg:function(){
        this.pageIndex++;
        this.getMsg(this.pageIndex)
      }
    },
    created:function(){

      this.getMsg(this.pageIndex)
    }
  }
</script>

<style class="scoped">
  h2.commenttil,.commentList{
    padding: 5px;
    font-size: 16px;
  }
</style>
