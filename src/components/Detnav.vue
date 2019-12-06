<!--
 * @Author: your name
 * @Date: 2019-11-26 10:20:06
 * @LastEditTime: 2019-12-05 09:36:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonserverf:\work\dingdong\src\App.vue
 -->
<template>
  <div class="box">
      <div class="detcenter">
            <div class="pict">
                <img :src="newDet.goodsImg">
            </div>
            <div class="det">
                    <div class="info">
                        <p>{{newDet.goodsName}}</p>
                        <p>{{newDet.goodsDet}}</p>
                        <p>
                            <span class="sp1">{{newDet.goodsPrice}}</span>.50
                        </p>
                    </div>
            </div>
            <div class="time">
                <span>
                    <i class="el-icon-time"></i>
                </span>
                <span>最快15:00-15:30送达</span>
                <span>
                    <i class="iconfont icon-tianping"></i>
                </span>
                <span>称重退差价</span>
                <span>
                    <i class="iconfont icon-zhongdian"></i>
                </span>
            </div>
            <div class="coupon">
                <img src="../assets/img/juan.jpg">
            </div>
            <div class="bgc">
            </div>
      </div>
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
                    //  console.log(this.newDet)
                     console.log(this.newDet.goodsName)
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
.box {
  width:100%;
}
.detcenter{
    margin-top:.46rem;
}
.pict{
    width: 100%;
    height:.3.34rem;
    text-align:center;
}
.pict img{
    width:3.34rem;
    height:3.34rem;

}
.det{
    width:100%;
    height:.85rem;
    /* background-color:teal; */
    display:flex;
    border-bottom:1px solid grey;
}
.info{
    padding-left:.07rem;
}
.info p:nth-of-type(1){
     margin-top:.09rem;
}
.info p:nth-of-type(2){
    color:#9a9a9a;
    font-size:12px;
    margin-top:.03rem;
}
.info p:nth-of-type(3){
    font-size:.15rem;
    margin-top:.06rem;
    color:#e23636;
    vertical-align: middle;
}
.info .sp1{
    font-size:.17rem;
}
.info .sp2 img{
    width:.23rem;
    height:.23rem;

    vertical-align: middle;
    /* padding-left:1.15rem; */
}
.time{
    width:100%;
    height:.44rem;
    /* background-color:blue; */
    line-height:.44rem;
    font-size:14px;
}
.time span:nth-of-type(1){
    padding-left:.09rem;
    font-size:.15rem;
    color:#c9c9c9;
}
.time span:nth-of-type(2){
    padding-right:.1rem;
    color:#191919;
}
.time span:nth-of-type(3){
    font-size:.05rem;
    color:#c9c9c9;

}
.time span:nth-of-type(4){
    color:#191919;
     font-size:14px;
}
.time span:nth-of-type(5){
    font-size:.05rem;
    color:#c9c9c9;
}
.coupon{
    width:100%;
    height:.66rem;
}
.coupon img{
    width:100%;
    height:.66rem;
}
.bgc{
    width:100%;
    height:.1rem;
    background-color:#ddd6d6;
}
</style>
