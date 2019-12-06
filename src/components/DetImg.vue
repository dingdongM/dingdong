<!--
 * @Author: your name
 * @Date: 2019-11-26 10:20:06
 * @LastEditTime: 2019-12-02 11:00:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonserverf:\work\dingdong\src\App.vue
 -->
<template>
  <div class="deti">
      <img src="../assets/img/detimg.jpg">
  </div>    
</template>

<script>
export default {
  name: 'Detnav',
  props:['goodsId'],
  data(){
      return{
          result:{},
          newDet:{}
      }
  },
  created(){
    //   console.log(this.goodsId)
      fetch('http://localhost:3000/nav?goodsId='+this.goodsId)
      .then(res=>{
          return res.json()
      })
      .then(data=>{
          this.result=data
        //   console.log(this.result)
        //   console.log(this.result[0])
          var det=this.result
        //   console.log(det)
        for(var i in det){
              det[i]
            //   console.log(det[i])
            var Sdet=det[i].list
            // console.log(Sdet)
            for(var j in Sdet){
                //  console.log(Sdet[j])
                //  console.log(Sdet[j].goodsId)
                //  console.log(this.goodsId)
                 if(Sdet[j].goodsId==this.goodsId){
                     this.newDet=Sdet[j]
                     console.log(this.newDet)
                 }
            }
            
        }  
      })
      .catch(err=>{
          console.log(err)
      })
  }
}
</script>

<style>
    .deti{
        width:100%;
    }
    .deti img{
        width:3.75rem;
        height:100%;
    }
</style>
