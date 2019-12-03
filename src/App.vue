<!--
 * @Author: your name
 * @Date: 2019-11-26 16:40:31
 * @LastEditTime: 2019-11-29 17:45:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\dingdong\src\App.vue
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
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
}
</script>

<style>
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
