<!--
 * @Author: your name
 * @Date: 2019-11-26 10:20:06
 * @LastEditTime: 2019-12-04 18:04:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonserverf:\work\dingdong\src\App.vue
 -->
<template>
  <div class="fot">
      <div class="cont">
        <router-link to="/ShoppcarPages">
            <span class="iconfont icon-gouwuche"></span>
        </router-link>
        <input type="button" value="加入购物车" v-on:click="send">
      </div>
      
  </div>    
</template>

<script>
import axios from 'axios';
export default {
  name: 'DetFooter',
  props:['goodsId'],
  data(){
      return{
        result:{},
        newDet:{},
        // shopdata:{
        //   "id":"",
        //   "goodsId":"newDet.goodsId",
        //   "goodsName":"newDet.goodsName",
        //   "goodsPrice":"newDet.goodsPrice",
        //   "goodsName":"newDet.goodsName"
        // }
      }
  },
  created(){
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
                    //  console.log(this.newDet)
                      console.log(this.newDet.goodsName)
                  }
            }
            
        }  
      })
      .catch(err=>{
          console.log(err)
      })
  },
  methods:{
    send(){
      let shopdata={
          "id":"",
          "goodsId":this.newDet.goodsId,
          "goodsName":this.newDet.goodsName,
          "goodsPrice":this.newDet.goodsPrice,
          "goodsImg":this.newDet.goodsImg,
          "goodsCount":this.newDet.goodsCount
      }
      
      axios.post('http://localhost:3000/shopdata',shopdata)
      .then(res=>{
          console.log("返回的数据"+res.data);
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<style>
  .fot{
     width:100%;
     height:.53rem;
  }
  .cont{
       width:95%;
      height:.53rem;
      /* background-color:yellow; */
      display:flex;
      justify-content: space-between;
      margin:0 auto;
      align-items: center;
  }
  .cont span{
      font-size:.25rem;
      line-height:.53rem;
      color:#777a86;
  }
  .cont input{
      width:1.34rem;
      height:.38rem;
      background-color:#08b838;
      color:white;
      border-radius:.19rem;
      border:none;
      outline:0;
      
  }
  
</style>
