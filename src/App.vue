<!--
 * @Author: 潘金红
 * @Date: 2019-11-26 10:28:38
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-30 16:52:22
 * @Description: 
 -->
<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      transitionName:""
    }
  },
  //监听路由的变化
  watch:{
    $route:function(to,from){
      if(to.meta.index>from.meta.index){//前进状态
        this.transitionName="slide-left";
      }else{
        this.transitionName="slide-right";
      }
    }
  },
  mounted(){

  }
}
</script>

<style>

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 300ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  /* transform: translate3d(-100%, 0, 0); */
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  /* transform: translate3d(-100%, 0, 0); */
}
*{
  margin:0;
  padding:0;
}
ul,ol{
  list-style: none;
}
img{
  display:block;
}
html{
  font-size:26.67vw;
  height:100%;
}
body{
  width:100%;
  font-size:14px;
  height:100%;
}
em{
  font-style:normal;
}
#app{
  width:100%;
  height:100%;
}
.mint-switch-input:checked + .mint-switch-core{
  border-color: #43cb5d;
  background-color: #43cb5d;
  margin-left:10px;
}
.el-message-box{
  width:100%;
}
#el-drawer__title{
  padding:0;
}
#drawer .el-drawer{
  height:1rem;         
}
.el-checkbox__inner{
  width:.2rem!important;
  height:.2rem!important;
  outline: none;
  border-radius:50%;
  border:none;
  text-align: center;
  line-height:.2rem;
}
.el-checkbox__input.is-checked .el-checkbox__inner, 
.el-checkbox__input.is-indeterminate .el-checkbox__inner{
  background-color:#3fd866!important;
}
.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after{
  border-color:#fff;
}
.el-checkbox__input.is-disabled .el-checkbox__inner{
  background-color:#fff;
}
.el-checkbox__inner::after{
  height:13px;
  left:6px;
  width:7px;
  border-color:#fff;
}
.content .ico-back:after{
  content: "取消";
  padding-left:10px;
  color:#0083e3;
}

</style>
