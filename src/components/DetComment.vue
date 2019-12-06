<!--
 * @Author: your name
 * @Date: 2019-11-26 10:20:06
 * @LastEditTime: 2019-12-05 15:08:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonserverf:\work\dingdong\src\App.vue
 -->
<template>
  <div class="comm">
     <h3>评价</h3>
     <p class="inp1">
         <img src="../assets/img/head.jpg">
         <span>小叮当</span>
         <span>2019-11-25</span>
     </p>
     <p class="inp2">
         <img src="../assets/img/xing.jpg">
         <span>
             很满意
         </span>
     </p>
     <p class="inp3">
         很满意，每次小哥哥送菜都很小心，很满意，每次小哥哥送菜都很很满意
     </p>
     <p class="inp4">
         <router-link :to='"/DetCommentPages/"+this.goodsId'>
            <span>我要评价(22282)</span>
         </router-link>
     </p>
  </div>    
</template>

<script>
export default {
  name: 'Detnav',
  props:['goodsId'],
  data(){
      return{

      }
  }
}
</script>

<style>
.comm{
  width:100%;
  height:1.9rem;
  /* background-color:blue; */

}
.comm h3{
    /* background-color:turquoise; */
    padding-left:.11rem;
    padding-top:.13rem;
    padding-bottom:.13rem;
}
.comm .inp1{
    width:100%;
    /* background-color:teal; */
    font-size:13px;
}
.comm .inp1 img{
    width:.26rem;
    height:.26rem;
    padding-left:.11rem;
    vertical-align: middle;
}
.comm .inp1 span:nth-of-type(1){
    padding-left:.07rem;
    padding-right:2rem;
    color:#161616;
}
.comm .inp1 span:nth-of-type(2){
    color:#909090;
}
.comm .inp2{
    width:100%;
    height:.15rem;
    font-size:15px;
    color:#212121;

}
.inp2 img{
    width:.95rem;
    height:.15rem;
    padding-left:.45rem;
}
.inp3{
    padding-left:.45rem;
    padding-right:.1rem;
    color:#212121;
    margin-top:.05rem;
    font-size:15px;
}
.inp4{
    width:100%;
    text-align:center;
    margin-top:.14rem;
    margin-bottom:.12rem;
}
.inp4 span{
    width:1.25rem;
    height:.28rem;
    border:2px solid #d3d3d3;
    border-radius:.4rem;
    font-size:13px;
    color:#4f4f4f;
    padding:.05rem;
}
</style>
