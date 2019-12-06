<!--
 * @Author: your name
 * @Date: 2019-11-26 10:20:06
 * @LastEditTime: 2019-12-06 16:12:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonserverf:\work\dingdong\src\App.vue
 -->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
}
body{
  font-size: 16px;
  height: 100%;
}
/* #app { 
  margin-top: 5px;
} */
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
  color:#333;
}
 .component-fade-enter-active, .component-fade-leave-active {
    /* transition: opacity .5s ease; */
    transition: all .5s ease; 
}
.component-fade-enter, .component-fade-leave-to {
    /* opacity: 0; */
    transform:translateX(-100%);
}
.content .ico-back:after{
  content:"取消";
  color:blue;
  padding-left:10px;
}
.keyboard{
  margin-top:0!important;
}
</style>

