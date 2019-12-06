<!--
 * @Author: your name
 * @Date: 2019-11-26 10:20:06
 * @LastEditTime: 2019-11-28 18:33:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonserverf:\work\dingdong\src\App.vue
 -->
<template>
  <div class="box1">
      <i class="el-icon-search"></i>
      <input type="text" placeholder="青椒">
  </div>
</template>

<script>
export default {
  name: 'topsearch'
}
</script>

<style>
.box1 {
  width:100%;
  /* height:.33rem; */
  background-color:white;
  display:flex;
  justify-content:center;
  padding-bottom:.12rem;
  /* overflow: hidden; */
  position: relative;
}
.box1 input{
    width:3.58rem;
    height:.33rem;
    font-size:15px;
    text-align:center;
    color:#c7c7c7;
    outline:0;
    border:none;
    background-color: #f7f7f7;
    border-radius: .16rem;
    margin-top:.13rem;
    /* margin-left:.08rem; */
}
.box1 i{
    width:.2rem;
    height:.2rem;
    color:#c7c7c7;
    position: absolute;
    left: 1.52rem;;
    top:0.21rem;
}
</style>
