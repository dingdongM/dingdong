<!--
 * @Author: your name
 * @Date: 2019-11-26 10:20:06
 * @LastEditTime: 2019-11-29 19:29:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonserverf:\work\dingdong\src\App.vue
 -->
<template>
      <div class="nav">
          <router-link to="/ClassifyPages">
                <i class="el-icon-back"></i>
          </router-link>
          <p class="hid">
              <a href="#">商品</a>
              <a href="#comment">评价</a>
              <a href="#detimg">详情</a>
              <a href="#">推荐</a>
          </p>
          <i class="el-icon-share"></i>
      </div> 
</template>

<script>
export default {
  name: 'Detnav',
  data(){
      return{

      }
  }
}
</script>

<style>
  .nav{
    width:100%;
    height:.46rem;
    display:flex;
    justify-content: space-around;
    line-height:.46rem;
    opacity:.2rem;
    background-color:white;
}
.nav i{
    margin-top:.145rem;
    font-size:.2rem;
    color:#92959d;
}
.nav .hid{
    width:1.9rem;
    height:.46rem;
    display:flex;
    justify-content:space-around;
    line-height:.46rem;
    color:#333;
    /* display:none; */
}
/* .hid a{
    display:none;
} */
</style>
