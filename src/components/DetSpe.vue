<!--
 * @Author: your name
 * @Date: 2019-11-26 10:20:06
 * @LastEditTime: 2019-12-05 09:47:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonserverf:\work\dingdong\src\App.vue
 -->
<template>
  <div class="spa">
        <div class="bgc">
        </div>
        <div class="tab">
             <h3>规格</h3>
             <p class="p1">
                 <span>净含量</span>
                 <span>约500g</span>
             </p>
             <p class="p2">
                 <span>保存条件</span>
                 <span>冷藏</span>
             </p>
             <p class="p3">
                 <span>保质期</span>
                 <span>7天</span>
             </p>
        </div>
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
.spa {
  width:100%;
}
.bgc{
    width:100%;
    height:.1rem;
    background-color:#ddd6d6;
}
.tab{
    width:96%;
    height:1.77rem;
    /* background-color:blue; */
    padding-left:.1rem;
}
.tab h3{
    /* background-color:turquoise; */
    width:100%;
    height:.42rem;
    line-height:.42rem;
    /* padding-left:.1rem; */
    border-bottom:1px dashed #848484
}
.tab p{
    width:100%;
    height:.42rem;
    line-height:.42rem;
    color:#848484;
    font-size:15px;
    /* padding-left:.1rem; */
    border-bottom:1px dashed #848484
}
.tab .p1 span{
    padding-right:.59rem;
}
.tab .p2 span{
    padding-right:.45rem;
}
.tab .p3 span{
    padding-right:.59rem;
}
.tab .p3{
    border:none;
}
</style>
