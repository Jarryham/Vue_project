<template>
  <div class="templ">
    <div class="cate">
      <ul ref = "titleBox">
        <li class="titleItem"><a @click='getphotolist(0)'>全部</a></li>
        <li class="titleItem" v-for="item in titleList"><a @click='getphotolist(item.id)'>{{item.title}}</a></li>
      </ul>
    </div>

    <!--显示图片列表-->
    <ul>
      <li v-for="img in imgsList" class="imgbox">
        <router-link v-bind="{to:'/imgshow/'+img.id}">
          <img class="img lazyimg" v-lazy="img.img_url" alt=""/>
        </router-link>
        <div class="desc">
          <h4>{{img.title}}</h4>
          <p>{{img.zhaiyao}}</p>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  import common from '../kits/common.js';

  export default {
    data:function(){
      return {
        titleList:[],
        imgsList:[]
      }
    },
    methods:{
      //获取图片分类列表
      gettitle:function(){
        var url = common.apiDomain+"/api/getimgcategory";
        this.$http.get(url).then(function(res){
          this.titleList=res.body.message;
          //计算ul的宽度
          var width = (this.titleList.length+1)*61;
          this.$refs.titleBox.style.width =width+10+'px'
        })
      },
      //获取图片列表
      getphotolist:function(cateid){

        this.imgsList=[]
        ///api/getimages/:cateid
        var url = common.apiDomain+"/api/getimages/"+cateid;
        this.$http.get(url).then(function(res){
          res.body.message.forEach(function(ele){
            ele.img_url= common.imgDomain +ele.img_url;
          });
          this.imgsList = res.body.message
        })
      }

    },
    created:function(){
      this.gettitle();
      this.getphotolist(0)
    }
  }
</script>

<style scoped>
  .templ ul{
    list-style: none;
    padding: 5px;
    margin:0;
  }
  .titleItem{
    float: left;
    font-size: 14px;
    margin-right: 5px;
  }
  .img{
    width: 100%;
  }
  image[lazy=loading] {
    width: 100%;
    margin: auto;
  }
  .cate{
    overflow-x:auto;
    overflow-y:hidden;
  }
  .imgbox{
    position: relative;
  }
  .desc{
    position: absolute;
    bottom:5px;
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
  }
  .desc p{
    color:#fff;
  }
  .desc h4{
    font-size: 14px;
  }
</style>
