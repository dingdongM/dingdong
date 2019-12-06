<!--
 * @Author: your name
<<<<<<< HEAD
 * @Date: 2019-11-26 16:40:31
 * @LastEditTime: 2019-11-29 17:45:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\dingdong\src\App.vue
 -->
<template>
  <div id="app">
=======
 * @Date: 2019-11-26 10:20:06
 * @LastEditTime: 2019-12-06 16:12:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonserverf:\work\dingdong\src\App.vue
 -->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
>>>>>>> wentan
    <router-view/>
  </div>
</template>

<script>
<<<<<<< HEAD
import Vue from 'vue'
import Router from 'vue-router'
export default {
  name: 'App',
  watch:{
    '$route':function(to,from){
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		}
  	}
=======
export default {
  name: 'App'
>>>>>>> wentan
}
</script>

<style>
<<<<<<< HEAD
body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,hr,td,input,textarea{
	margin:0;
	padding:0;
}
ul,ol,li{
	list-style: none;
}
a{
	text-decoration:none;
}
img{
	border:none;
	display: block;
}
body{
	font-family: "微软雅黑";
}
html{
	font-size: 26.67vw;
}
</style>
=======
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

>>>>>>> wentan
