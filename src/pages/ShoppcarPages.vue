<!--
 * @Author: your name
 * @Date: 2019-11-09 10:51:33
 * @LastEditTime: 2019-12-05 17:08:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\pages\playpage.vue
 -->
<template>
    <div class="box">
        <Shoptit></Shoptit>
        <Myfooter></Myfooter>
    </div>
</template>
<script>
import Shoptit from "../components/Shoptit"
import Myfooter from "../components/Myfooter"


export default {
  name: 'ShoppcarPage',
  data () {
    return {
      
    }
  },
  components:{
    Shoptit,Myfooter
  }
}
</script>
<style scoped>
.box{
    width:100%;
    /* position:relative; */
    /* background-color:#f8efef; */
}

</style>