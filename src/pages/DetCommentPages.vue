<!--
 * @Author: your name
 * @Date: 2019-11-09 10:51:33
 * @LastEditTime: 2019-12-05 14:13:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\pages\playpage.vue
 -->
<template>
    <div class="box">
        <Comment :goodsId="goodsId"></Comment>
    </div>
</template>
<script>
import Comment from "../components/Comment"

export default {
  name: 'DetCommentPages',
  props:['goodsId'],
  data () {
    return {
      
    }
  },
  components:{
    Comment
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