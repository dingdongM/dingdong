<!--
 * @Author: your name
 * @Date: 2019-11-09 10:51:33
 * @LastEditTime: 2019-12-05 11:41:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\pages\playpage.vue
 -->
<template>
    <div class="box">
        <DetTopnav class="bighead"></DetTopnav>
        <div class="bigcenter">
          <Detnav :goodsId="goodsId"></Detnav>
          <DetComment id="comment" :goodsId="goodsId"></DetComment>
          <DetSpe id="spe"></DetSpe>
          <DetImg id="detimg" :goodsId="goodsId"></DetImg>
        </div>
        <DetFooter class="footer" :goodsId="goodsId"></DetFooter>
    </div>
</template>
<script>
import Detnav from "../components/Detnav"
import DetComment from "../components/DetComment"
import DetSpe from "../components/DetSpe"
import DetImg from "../components/DetImg"
import DetTopnav from "../components/DetTopnav"
import DetFooter from "../components/DetFooter"


export default {
  name: 'DetailsPages',
  props:['goodsId'],
  data () {
    return {
      
    }
  },
  created(){
    // console.log(this.goodsId)
  },
  components:{
     Detnav,DetComment,DetSpe,DetImg,DetTopnav,DetFooter
  }
}
</script>
<style scoped>
.box{
    width:100%;

}
.bighead{
  position:fixed;
  left:0px;
  top:0px;
  z-index: 10;
}
.bigcenter{
  overflow-y:auto;
}
.footer{
  position:fixed;
  left:0px;
  top:6.15rem;
   background-color:white;
}
</style>