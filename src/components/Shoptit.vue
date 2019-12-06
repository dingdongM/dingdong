<!--
 * @Author: your name
 * @Date: 2019-11-26 10:20:06
 * @LastEditTime: 2019-12-06 16:21:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonserverf:\work\dingdong\src\App.vue
 -->
<template>
  <div class="shop">
    <div class="topshop">
        <div class="del">
          <!-- <router-link to="/DetailsPages">
              <i class="el-icon-back"></i>
          </router-link> -->
          <span>购物车</span>
          <span @click="delt">删除</span>
        </div>
        <div class="cop">
            <span>领券</span>
            <span>
                <img src="../assets/img/shqu.jpg" alt="">
                <img src="../assets/img/shqu.jpg" alt="" class="imag">
                <img src="../assets/img/shqu.jpg" alt="" class="imag">
                <img src="../assets/img/shqu.jpg" alt="" class="imag">
                <img src="../assets/img/shqu.jpg" alt="" class="imag">
                <img src="../assets/img/shqu.jpg" alt="" class="imag">
                <img src="../assets/img/shqu.jpg" alt="" class="imag">
                <img src="../assets/img/shqu.jpg" alt="" class="imag">
            </span>
            <span class="el-icon-arrow-right"></span>
        </div>
        <div class="bgc">
        </div>
    </div>
    <div class="botlist">
        <div class="lis" v-for="(item,index) in newshops" :key="index" v-show="isShow">
            <span class="con1">
              <input type="checkbox" id="Subcheck" v-model="checkedNames[index]" v-on:change="checkOne(index)">
            </span>
              <span class="con2">
                <img :src="item.goodsImg">
              </span>
              <span class="con3">
             <router-link :to='"/DetailsPages/"+item.goodsId'>
                <p>{{item.goodsName}}</p>
            </router-link>
                <p>
                  <i id="price">￥{{item.goodsPrice}}</i>
                <input type="button" value="-" v-on:click="reduce(index)">
                  <i id="count">{{item.goodsCount}}</i>
                  <input type="button" value="+" v-on:click="add(index)">
                </p>
              </span>
          
        </div>
    </div>
    <div class="fotlist">
        <span class="sp1">
          <input type="checkbox" v-model="isAllChecked" v-on:change="checkAll" >
          <i>全选</i>
        </span>
        <span class="sp2">
            合计￥{{totalMoney}}
        </span>
        <!-- <span class="sp3"> -->
          <input type="button" value="去结算" class="openpri" @click="Message">
             <vpay ref="pays" class="zfb"
                v-model="show"
                @close="close"
                @input-end="inputEnd"
                :val="value"
              ></vpay>
        <!-- </span> -->
    </div>
  </div>    
</template>

<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui';
export default {
  name: 'Shoptit',
  data(){
      return{
          newshops:{},
          isAllChecked:false,
          checkedNames:[false,false,false,false,false,false,false,false,false,false,false],
          isShow:true,
          show:false,
          value:""
      }
  },
  created(){
    // console.log(this.checkedNames)
    axios.get('http://localhost:3000/shopdata')
    .then(res=>{
      this.newshops=res.data
      // console.log(this.newshops)
    })
    .catch(err=>{
      console.log(err)
    })
  },
  computed:{
    totalMoney:function(){
      // console.log("aaa")
      var total=0;
      for (var i = 0; i <this.checkedNames.length;i++){
        if(this.checkedNames[i]||this.isAllChecked){
          var item = this.newshops[i];
          total += item.goodsPrice*item.goodsCount;
        }
      }
      return total
    }
  },
  methods:{
      add(index){
        // console.log(index)
        this.newshops[index].goodsCount++;
        let updata={
          "id":this.newshops[index].id,
          "goodsId":this.newshops[index].goodsId,
          "goodsName":this.newshops[index].goodsName,
          "goodsPrice":this.newshops[index].goodsPrice,
          "goodsImg":this.newshops[index].goodsImg,
          "goodsCount":this.newshops[index].goodsCount
        }
        // console.log(this.newshops[index].id)
        axios.put(`http://localhost:3000/shopdata/${this.newshops[index].id}`,updata)
            .then(res=>{
              // console.log("====");
              // console.log(res.data);
            })
            .catch(err=>{
              console.log(err)
            })
        },
      reduce(index){
        if( this.newshops[index].goodsCount==1){
           return
        }
        else{
          this.newshops[index].goodsCount--
          let updata={
            "id":this.newshops[index].id,
            "goodsId":this.newshops[index].goodsId,
            "goodsName":this.newshops[index].goodsName,
            "goodsPrice":this.newshops[index].goodsPrice,
            "goodsImg":this.newshops[index].goodsImg,
            "goodsCount":this.newshops[index].goodsCount
          }
          // console.log(this.newshops[index].id)
          axios.put('http://localhost:3000/shopdata/'+this.newshops[index].id,updata)
            .then(res=>{
                console.log("返回的数据"+res.data);
            })
            .catch(err=>{
              console.log(err)
            })
           
          }
      },
      checkOne:function(index){
        // console.log(this.checkedNames[index])
        for(var i in this.checkedNames){
          if (this.checkedNames[index]===false){
            this.isAllChecked = false;
          }
          else if(this.checkedNames===true){
            this.isAllChecked = true;
          }
          // console.log(this.isAllChecked)
          console.log(this.checkedNames[i])
        }
      },
      checkAll:function(){
        //  console.log(this.checkedNames.length)
        // console.log(this.isAllChecked)

        this.checkedNames.length=this.newshops.length
        for(var i in this.checkedNames){
          this.checkedNames[i]=false
        }
        console.log(this.checkedNames[i])
        console.log(this.newshops.length)
        console.log(this.checkedNames)
        if(this.isAllChecked==true){
          for (var i in this.checkedNames){
              this.checkedNames[i]=true
          }
        }
        else{
           for(var i in this.checkedNames){
              this.checkedNames[i]=false
          }
        }
        // console.log(this.checkedNames)
        // console.log(this.totalMoney)
      },
      delt(){
        for(var i in this.newshops){
          if(this.checkedNames[i]==true){
              // console.log(index)
              console.log(this.newshops[i].id)
              axios.delete('http://localhost:3000/shopdata/'+this.newshops[i].id)
              .then(res=>{
                  console.log("返回的"+res.data)
                  this.isShow=false
                  console.log(this.isShow)
                  this.$router.go(0)
                  
              })
              .catch(err=>{
                  console.log(err)
              })
          }
        }
        
      },
      Message:function(){
        if(this.totalMoney==0){
            MessageBox.confirm('亲，请选择商品后结算?').then(action =>{
            })
        } 
        else{
          this.show=true
        }  
      },
      close:function(){
        this.show=false
      },
      inputEnd:function(value){
        if(value=="111111"){
          this.$refs.pays.$success(true).then(res => {
              console.log('支付成功')
              this.$router.push('/DetailsPages')
          })
        }
        else{
          this.$refs.pays.$fail('支付密码错误') 
        } 
      }, 
  }
}
</script>
<style>
.shop {
  width:100%;
}
.topshop{
  position:fixed;
  left:0px;
  top:0px;
  background-color:white;
}
.del{
    width:95%;
    height:.18rem;
    /* background-color:yellow; */
    margin:0 auto;
    margin-top:.21rem;
    margin-bottom:.21rem;
}
.del i{
  font-size:.18rem;
}
.del span:nth-of-type(1){
    color:#171717;
    font-size:.2rem;
    padding-left:.1rem;
    padding-right:2.18rem;
}
.del span:nth-of-type(2){
    color:#04a73f;
    font-size:.19rem;
}
.cop{
  width:100%;
  height:.18rem;
  /* background-color:tomato; */
  display:flex;
  padding-bottom: .11rem;
}
.cop span:nth-of-type(1){
  display:inline-block;
  width:.48rem;
  height:.18rem;
  line-height:.18rem;
  text-align: center;
}
.cop img{
  width:.77rem;
  height:.17rem;
}
.imag{
  padding-left:.06rem;
}
.cop span:nth-of-type(2){
  display:flex;
  width:3.09rem;
  height:.17rem;
  flex-wrap: nowrap;
  overflow-x:auto;
  flex-shrink: 1;
}
.cop span:nth-of-type(2){
 color:#7f7f7f;
}
.bgc{
    width:100%;
    height:.1rem;
    background-color:#ddd6d6;
}
.botlist{
   margin-top:1rem;
   margin-bottom:1.1rem;
}
.lis{
  width:100%;
  height:.87rem;
  /* background-color:tomato; */
  /* margin-left:2.5%; */
  display:flex;
  border-bottom:1px solid grey;
  padding-top:.14rem;
  padding-bottom:.1rem;
}
.con1{
  width:.46rem;
  height:.87rem;
  text-align:center;
  line-height:.87rem;
}
.con2{
  width:.79rem;
  height:.87rem;
}
.con2 img{
  width:100%;
  height:100%;
}
.con3{
  width:2.29rem;
  height:.265rem;
 
}
.con3 p:nth-of-type(1){
  margin-bottom:.37rem;
}
.con3 i:nth-of-type(1){
  font-style:normal;
  color:#121212;
  margin-right:.9rem;
}
.con3 i:nth-of-type(2){
  display:inline-block;
  font-style:normal;
  color:#121212;
  width:.36rem;
  height:.265rem;
  background-color:#f6f6f6;
  text-align:center;
  line-height:.265rem;
  vertical-align: middle;
 
}
.con3 input{
  width:.25rem;
  height:.265rem;
  outline:none;
  border:none;
  background-color:white;
  vertical-align: middle;
  font-size:.23rem;
  color:#333;
  
}
.fotlist{
  width:100%;
  height:.49rem;
  background-color:white;
  line-height:.49rem;
  position:fixed;
  left:0px;
  top:5.67rem;
}
.fotlist .sp1 input{
  margin-left:.16rem;
  margin-right:.09rem;
}
.fotlist .sp1 i{
  font-style:normal;
  padding-right:0.9rem;
}
.fotlist .openpri{
  width:1.06rem;
  height:.40rem;
  border-radius:.20rem;
  background-color:#f44546;
  color:white;
  border:none;
  outline:0;
  margin-left:.05rem;
}
.openpri{
  position:fixed;
  left:2.6rem;
  top:5.76rem;
}
.zfb .keyboard{
  margin-bottom:.5rem;
  margin-top:.2rem;
}
.keyboard[data-v-d00596f0]{
  margin-top:.15rem;
}
</style>
