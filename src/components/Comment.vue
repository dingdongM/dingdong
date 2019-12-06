<!--
 * @Author: your name
 * @Date: 2019-11-26 10:20:06
 * @LastEditTime: 2019-12-06 10:17:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonserverf:\work\dingdong\src\App.vue
 -->
<template>
<div class="Combox">
    <div class="comtop">
        <router-link :to='"/DetailsPages/"+this.goodsId'>
            <span class="el-icon-back"></span>
        </router-link>
        <span>商品评价</span>
    </div>
     <div class="comm" v-for="(item,index) in coms" :key="index">
        <p class="inp1">
            <img src="../assets/img/head.jpg">
            <span>小叮当</span>
            <span>{{item.dateTime}}</span>
        </p>
        <p class="inp2">
            <img src="../assets/img/xing.jpg">
            <span>
                很满意
            </span>
        </p>
        <p class="inp3">
          {{item.commWords}}
        </p>
    </div> 

    <div v-show="isShow">
        <mt-popup v-model="popupVisible" position="bottom" class="pop">
            <p class="txttop">
                <span>写评论</span>
               <input type="button" value="发表"  @click="submitcomment">
            </p>
            <textarea placeholder="快来表达你的感想吧" class="txt" v-model="commWord">

            </textarea>
        </mt-popup>
    </div>
     <div class="bigbox">
            <div class="infobox"  @click="show"> 
                <input type="text" placeholder="我来说两句~" @click="show" >
            </div>
            <div class="iconbox">
                <span @click="show">
                    <i class="el-icon-chat-line-square" @click="show"></i>
                    <p @click="show">评论</p>
                </span>
                <span>
                    <i class="el-icon-star-off"></i>
                    <p>收藏</p>
                </span>
                <span>
                    <i class="el-icon-download"></i>
                    <p>下载</p>
                </span>
            </div>
    </div>
</div>
</template>

<script>
import  {Popup}  from 'mint-ui';
import axios from 'axios';
export default {
  name: 'topsearch',
  props:['goodsId'],
  data(){
      return{
         isShow:true,
         popupVisible:false,
         commWord:"",
         coms:""
      }
  },
  created(){
      axios.get('http://localhost:3000/comment')
      .then(res=>{
          this.coms=res.data
      })
      .catch(err=>{
          console.log(err)
      })
      console.log(this.goodsId)
  },
    methods:{
        show(){
            this.popupVisible=true
             this.isShow=!this.isShow;
        },
        submitcomment(){
            // let gId = "001";
			let gId=this.goodsId;
            // 获取要发送的数据，这里面的数据包括时间以及要发送的内容
            let postData = this.getPostData()
            // 被评论的文章的id
            postData.gId = gId
			console.log(postData);
            if(this.commWord = ""){
                alert('评论内容不能为空')
            }
            else{
                // 发第一次请求，将用户名，书id，评论内容，评论时间，发给后端
                 axios.post('http://localhost:3000/comment',postData)
                  .then(res=>{
                //  提交评论后刷新页面
                    this.$router.go(0)
                    console.log("返回的数据"+res.data);
                    })
                    .catch(err=>{
                        console.log(err);
                    });
                }
        },
         getPostData(){
            // 评论的内容
            let commWords = this.commWord;
            // 评论者
            // let user= "小小"
			let user = localStorage.getItem('userName');
            // let user=JSON.parse(localStorage.getItem('userName'));
            // 评论的时间 
            let date= new Date();
            let year = date.getFullYear();
            let month = date.getMonth()+1;
            let day= date.getDate();
            // let hour = date.getHours();
            // let minute = date.getMinutes();
            let dateTime = year+'-'+month+'-'+day;
            console.log(dateTime);
            let postData = {
                // 评论者
                user,
                // 评论的内容
                commWords,
                // 评论的时间
                dateTime
            }
            return postData
            console.log(postData)
            console.log(user)
        },
    }

 
}
</script>

<style>
.comtop{
    width:100%;
    height:.16rem;
    margin-top:.15rem;
}
.comtop span:nth-of-type(1){
    margin-left:.15rem;
    margin-right:.25rem;
    color:#9698a1;
    font-size:.2rem;
}
.comm{
  width:100%;
  height:1rem;
  padding-top:.2rem;
  /* background-color:blue; */
  border-bottom:1px solid #9698a1;;

}
.comm h3{
    /* background-color:turquoise; */
    padding-left:.11rem;
    padding-top:.13rem;
    padding-bottom:.13rem;
}
.comm .inp1{
    width:100%;
    /* background-color:teal; */
    font-size:13px;
}
.comm .inp1 img{
    width:.26rem;
    height:.26rem;
    padding-left:.11rem;
    vertical-align: middle;
}
.comm .inp1 span:nth-of-type(1){
    padding-left:.07rem;
    padding-right:2rem;
    color:#161616;
}
.comm .inp1 span:nth-of-type(2){
    color:#909090;
}
.comm .inp2{
    width:100%;
    height:.15rem;
    font-size:15px;
    color:#212121;

}
.inp2 img{
    width:.95rem;
    height:.15rem;
    padding-left:.45rem;
}
.inp3{
    padding-left:.45rem;
    padding-right:.1rem;
    color:#212121;
    margin-top:.05rem;
    font-size:15px;
}
.inp4{
    width:100%;
    text-align:center;
    margin-top:.14rem;
    margin-bottom:.12rem;
}
.inp4 span{
    width:1.25rem;
    height:.28rem;
    border:2px solid #d3d3d3;
    border-radius:.4rem;
    font-size:13px;
    color:#4f4f4f;
    padding:.05rem;
}
.bigbox{
        width:100%;
        height:.52rem;
        background-color:white;
        border-top:1px solid #cccccc;
        display:flex;
        align-items: center;
        justify-content:space-between;
        position: fixed;
        left:0px;
        top:6.12rem;
    }
    .bigbox .infobox{
        width:2.20rem;
        height:.36rem;
        /* background-color:orangered; */
    }
    .bigbox .infobox input{
        width:2rem;
        height:.36rem;
        border:0;
        outline:0;
        border:1px solid #cecece;
        border-radius: .18rem;
        background-color:#f7f8f9;
        color:#a4a5a5;
        padding-left:.21rem;
    }
    .bigbox .iconbox i{
        /* display:block; */
        font-size:.22rem;
    }
    .bigbox .iconbox{
        width:1.2rem;
        display:flex;
        text-align:center;
        justify-content: space-around;
    }
    .bigbox .iconbox p {
        text-align:center;
        font-size:13px;
        color:#9b9b9b;
    }
   .bigbox .txttop{
        width:100%;
        height:.5rem;
        /* background-color:blue; */
        text-align:center;
        line-height:.5rem;
    }
    .bigbox .txttop span{
        margin-left:1.5rem;
        margin-right:1rem;
    }
    .bigbox .txttop input{
        width:.6rem;
        height:.3rem;
        border-radius:.15rem;
        border:0;
        outline:0;
        background-color:#dc2929;
        color:white;
    }
    .bigbox .pop{
        width:100%;
        height:1.3rem;
        border-top-left-radius:8px;
        border-top-right-radius: 8px;
        background-color:#f7f7f7;
    }
    .bigbox .txt{
        width:90%;
        height:1rem;
        margin-left:5%;
        border:0;
        outline:0;
    }

     .txttop{
        width:100%;
        height:.5rem;
        /* background-color:blue; */
        text-align:center;
        line-height:.5rem;
    }
    .txttop span{
        margin-left:1.5rem;
        margin-right:1rem;
    }
    .txttop input{
        width:.6rem;
        height:.3rem;
        border-radius:.15rem;
        border:0;
        outline:0;
        background-color:#dc2929;
        color:white;
    }
    .pop{
        width:100%;
        height:1.3rem;
        border-top-left-radius:8px;
        border-top-right-radius: 8px;
        background-color:#f7f7f7;
    }
    .txt{
        width:90%;
        height:1rem;
        margin-left:5%;
        border:0;
        outline:0;

    }
</style>
