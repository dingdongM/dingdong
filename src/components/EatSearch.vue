<!--
 * @Author: your name
 * @Date: 2019-11-26 16:40:31
 * @LastEditTime: 2019-11-30 10:43:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\dingdong\src\components\eatSearch.vue
 -->
<template>
  <div class="box">
    <div class="serchbox">
      <div class="left">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="搜索菜谱、石材">         
      </div>
      <div class="right">
        <i id="favorite" class="iconfont icon-favorite"></i>
        <p>收藏</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'EatSearch',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.box{
  width: 100%;
  height: 0.35rem;
}
.serchbox{
  width: 3.58rem;
  height: 100%;
  margin: 0 auto;
  font-size:12px;
  overflow: hidden;
  display: flex;
}
.left{
  width: 3.26rem;
  height: 0.27rem;
  background: #f7f7f7;
  border-radius: 13px;
  text-align: center;
  line-height:0.27rem;
  margin-top: 7px;
}
.left input{
  border: none;
  outline: none;
  background: #f7f7f7;
}
.right{
  margin-top: 5px;
  margin-left: 8px;
}
#favorite{
  float: right;
  margin-bottom: 3px;
}
.right p{
  font-size: 7px;
  line-height: 7px;
}

</style>
