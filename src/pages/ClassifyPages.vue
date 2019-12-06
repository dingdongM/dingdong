<!--
 * @Author: your name
 * @Date: 2019-11-09 10:51:33
 * @LastEditTime: 2019-12-05 19:12:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\pages\playpage.vue
 -->
<template>
    <div class="box">
        <topsearch class="tsea"></topsearch>
        <Claside class="bbb" :navid="navid"></Claside>
        <Myfooter></Myfooter>
        <!-- <Claright></Claright> -->
    </div>
</template>
<script>
import topsearch from "../components/topsearch"
import Claside from "../components/Claside"
import Myfooter from "../components/Myfooter"

// import Claright from "../components/Claright"

export default {
  name: 'ClassifyPages',
  props:['navid'],
  data () {
    return {
      
    }
  },
  components:{
     topsearch,Claside,Myfooter
  }
}
</script>
<style scoped>
.box{
    width:100%;
}
.tsea{
  position:fixed;
  left:0px;
  top:0px;
}
.bbb{
  margin-bottom:.6rem;
}
</style>