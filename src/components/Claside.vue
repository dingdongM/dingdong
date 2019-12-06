<!--
 * @Author: your name
 * @Date: 2019-11-26 10:20:06
 * @LastEditTime: 2019-12-05 20:20:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonserverf:\work\dingdong\src\App.vue
 -->
<template>
<div class="bigbox">
    <div class="box2">
        <div class="aside">
            <ul>
                <li v-for="(nav,index) in $store.state.navs" :key="index" v-on:click="test(index)"><span>{{nav.navname}}</span></li> 
            </ul>
        </div>
    </div>
    <div class="box3">
        <div class="top">
            <p>
                <a href="#">猜你喜欢</a>
                <a href="#">会员特价</a>
            </p>
        </div>
        <div class="like">
                <span>猜你喜欢</span>
                <span>查看全部</span>
          </div>
         <div class="list">
            <router-link :to='"/DetailsPages/"+item.goodsId'  v-for="(item,index) in lis" :key="index">
              <div class="det">
                  <div class="pic" >
                      <img :src="item.goodsImg">
                  </div>
                  <div class="info">
                      <p>{{item.goodsName}}</p>
                      <p>{{item.goodsDet}}</p>
                      <p>
                        <span class="sp1">{{item.goodsPrice}}</span>.99<span class="sma"></span>
                    <!-- <router-link to="/ShoppcarPages"> -->
                        <span class="sp2"><img src="../assets/img/shop.jpg" v-on:click="send(index)"></span>
                    <!-- </router-link> -->
                      </p>
                  </div>
              </div>
            </router-link>
        </div>
    </div>
</div>
 
</template>

<script>
import axios from 'axios';
export default {
  name: 'topsearch',
  props:['navid'],
  data(){
      return{
          Snavs:[],
          lis:[]
      }
  },
  created(){
    //   分类侧边栏
      this.$store.dispatch('getdatas')
        // 请求推荐页（点底部分类时）
         fetch('http://localhost:3000/nav')
          .then(res=>{
              return res.json()
          })
          .then(data=>{
            this.Snavs=data
            // console.log(this.Snavs)
            var sss=this.Snavs[0]
            // console.log(sss.list)
            this.lis=sss.list
            // console.log(this.lis)
          })
          .catch(err=>{
            console.log(err)
          })    

         let val = this.navid;
        //  console.log(this.navid)
        // 点主页第一级导航
         fetch('http://localhost:3000/nav?navid='+this.navid)
          .then(res=>{
              return res.json()
          })
          .then(data=>{
            this.Snavs=data
            // console.log(this.Snavs)
            var sss=this.Snavs[0]
            // console.log(sss.list)
            this.lis=sss.list
            // console.log(this.lis)
          })
          .catch(err=>{
            console.log(err)
          })    
  },
  methods:{
    //   点击侧边栏出现对应详情
      test(index){
        let val = this.$store.state.navs[index];
            // console.log(val.navname)
          fetch('http://localhost:3000/nav?navname='+val.navname)
          .then(res=>{
              return res.json()
          })
          .then(data=>{
            this.Snavs=data
            console.log(this.Snavs)
            var sss=this.Snavs[0]
            // console.log(sss.list)
            this.lis=sss.list
            // console.log(this.lis)
          })
          .catch(err=>{
            console.log(err)
          })
          var allsp= document.getElementsByTagName("span")
          for(var i=0; i<allsp.length;i++){
              allsp[i].style.border="none"
                allsp[index].style.borderLeft="2px solid #31b062"
            }
    },
    // 点击加入到购物车
    send(index){
        let shopdata={
            "id":"",
            "goodsId":this.lis[index].goodsId,
            "goodsName":this.lis[index].goodsName,
            "goodsPrice":this.lis[index].goodsPrice,
            "goodsImg":this.lis[index].goodsImg,
            "goodsCount":this.lis[index].goodsCount
        }
        
        axios.post('http://localhost:3000/shopdata',shopdata)
        .then(res=>{
            console.log("返回的数据"+res.data);
        })
        .catch(err=>{
            console.log(err)
        })
    }
  }
}
</script>

<style>
.bigbox{
  width:100%;
  height:6rem;
}
.box2 {
  width:24%;
  height:6rem;
  float:left;
  z-index:9;
  margin-top:.6rem;
  /* height:.33rem; */
  /* background-color:blue; */
}
.box .aside{
    width:100%;
    height:5.9rem;
    background-color:#f8f8f8;
    overflow-y:auto;
}
.aside li{
    width:100%;
    height:.43rem;
    /* background-color:crimson; */
    display:flex;
    align-items: center;
    font-size:.14rem;
    border-bottom:1px solid #eeeeee;
    color:#4e4e4e;
    text-indent: .1rem;
}
.aside li span{
    display:block;
    height:.32rem;
    padding-left:.02rem;
    line-height:.32rem;
}
.box3 {
  width:76%;
  height:5rem;
  float:right;
 
  /* height:.33rem; */
  /* background-color:blue; */

}
.top{
    width:76%;
    height:.3rem;
    background-color:white;
    border-bottom:1px solid grey;
    font-size:14px;
    position:fixed;
    top:.585rem;

}
.top p a:nth-of-type(1){
    padding-left:.18rem;
    padding-right:.24rem;
}
.top p a{
    color:#757575;
}
.list{
    width:96%;
    height:5rem;
    /* background-color:yellow; */
    padding-left:.11rem;
    overflow:auto;
    margin-top:1.284rem;

}
.like{
    width:76%;
    height:.39rem;
    background-color:white;
    line-height:.39rem;
    border-bottom:1px solid #eeeeee;
    position: fixed;
    top:.89rem;
    z-index: 10;
    color:#A1A1A1;
}
.like span{
    font-size:13px;
    color:#555555;
}
.like span:nth-of-type(1){
    margin-left:.09rem;
    margin-right:1.46rem;
}
.det{
    width:2.7rem;
    height:.92rem;
    /* background-color:teal; */
    display:flex;
    border-bottom:1px solid #eeeeee;
}
.info{
    padding-left:.1rem;
    width:100%;
    height:100%;
}
.pic img{
    width:.77rem;
    height:100%;
}
.info p:nth-of-type(1){
     margin-top:.09rem;
}
.info p:nth-of-type(2){
    color:#9a9a9a;
    font-size:12px;
    margin-top:.03rem;
}
.info p:nth-of-type(3){
    font-size:.15rem;
    margin-top:.06rem;
    color:#e23636;
    vertical-align: middle;
}
.info .sp1{
    font-size:.17rem;
}
.info .sp2 img{
    width:.23rem;
    height:.23rem;
    vertical-align: middle;
}
.info .sma{
    margin-right:0.98rem;

}
</style>
