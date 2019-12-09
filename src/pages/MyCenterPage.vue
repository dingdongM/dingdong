<!--
 * @Author: 潘金红
 * @Date: 2019-11-26 19:41:53
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-29 19:57:53
 * @Description: 
 -->
<style scoped lang="scss">
@mixin iconfont{
    font-size:.25rem;
    color:#a9a9a9;
}
.myCenter{
    width:100%;
    background-color:#f5f5f5;
    .hidden{
        width:100%;
        height:.5rem;
        // background-color: rgba(255,255,255,0);
        background-color:#fff;
        opacity: 0;
        position:fixed;
        left:0;
        top:0;
        display:flex;
        z-index: 10;
        justify-content:space-between;
        align-items: center;
        span:nth-child(1){
            margin-left:10px;
            opacity: 0;
        }
        span:nth-child(2){
            margin-right:10px;
            color:#fff;
            font-weight:900;
        }
    }
    .header{
        width:100%;
        height:1.7rem;
        background-color:#43cb5d;
        border-radius: 200px/10px;
        border-top-left-radius:0;
        border-top-right-radius:0;
        .iconLd{
            height:.5rem;
            display:flex;
            justify-content: flex-end;
            align-items: center;
            span{
                margin-right:10px;
                font-weight:900;
                color:#fff;
            }
        }
        .headImg{
            height:.5rem;
            display:flex;
            align-items: center;
            position: relative;
            >span{
                color:#fff;
                margin-left:10px;
            }
            img{
                width:.5rem;
                height:.5rem;
                border-radius:50%;
                margin-left:10px;
            }
            >p{
                padding:6px;
                border-radius: 15px/15px;
                position: absolute;
                right:10px;
                background-color:rgba(0,0,0,.2);
                vertical-align: middle;
                .icon-jinbi{
                    color:gold;
                    vertical-align: middle;
                }
                span:last-child{
                    color:#fff;
                    font-size:12px;
                }
            }
        }
        .bottom{
            width:94%;
            height:.5rem;
            background-color: orange;
            margin:.2rem auto 0;
            border-radius: 200px/7px;
            border-top-left-radius:10px;
            border-top-right-radius:10px;
            background-color:#415270;
            display:flex;
            align-items: center;
            justify-content: space-between;
            p:first-child{
                display:flex;
                align-items: flex-start;
                margin-left:10px;
                position: relative;
                span:first-child{
                    color:#3fd866;
                    font-size:.16rem;
                }
                span:last-child{
                    color:#fff;
                    font-size:.12rem;
                    margin:2px 0 0 5px;
                }
            }
            p:last-child{
                padding:4px 1px;
                margin-right:10px;
                background-color:#43cb5d;
                font-size:12px;
                border-radius:11px/11px;
                span:first-child{
                    color:#415270;
                    margin-left:10px;
                }
                span:last-child{
                    font-size:12px;
                }
            }
        }
        .info{
            color:#fff;
            margin-left:10px;
            p:last-child{
                font-size:12px;
            }
        }
    }
    .myAccount{
        width:94%;
        height:.8rem;
        background-color:#fff;
        margin:10px auto 0;
        border-radius:5px;
        display:flex;
        justify-content: space-around;
        align-items: center;
        div{
            text-align: center;
        }
        .balance{
            transform: translateY(8px);
            p:nth-of-type(2){
                color:#f66666;
                font-size:12px;
            }
        }
    }
    .myIndent{
        width:94%;
        height:1.1rem;
        margin:10px auto 0;
        background-color: #fff;
         border-radius:5px;
        .indent{
            height:.4rem;
            display:flex;
            justify-content: space-between;
            align-items: center;
            >span{
                margin-left:.15rem;
            }
            >p{
                margin-right:.15rem;
                font-size:12px;
                color:#a9a9a9;
                display:flex;
                align-items: center;
            }
        }
        .myIndent-bottom{
            height:.7rem;
            display:flex;
            justify-content: space-around;
            align-items: center;
            div{
                text-align: center;
                .iconfont{
                    @include iconfont;
                }
            }
        }
    }
    .ticket{
        width:94%;
        height:.8rem;
        margin:10px auto 0;
        background-color: #fff;
        border-radius:5px;
        img{
            width:94%;
            height:.6rem;
            transform: translateY(10px);
            margin:0 auto;
        }
    }
    .used{
        width:94%;
        margin:10px auto 0;
        border-radius:5px;
        background-color: #fff;
        .used-title{
            height:.5rem;
            line-height: .5rem;
            margin-left:.15rem;
        }
        .used-box{
            display:flex;
            flex-wrap: wrap;
            justify-content: center;
            text-align: center;
            align-items: center;
            .iconfont{
                @include iconfont;
            }
            >div{
                width:24%;
                height:.9rem;
            }
            div:last-child{
                transform: translateX(-1.26rem);
            }
            .invite{
                span:nth-of-type(2){
                    color:#f60000;
                    font-size:12px;
                }
            }
        }
    }
}        
</style>
<template>
<div class="myCenter">
    <div class="hidden" ref="hiddenTop">
        <span ref="mine">我的</span>
        <span class="iconfont icon-lingdang1" ref="logo"></span>
    </div>
    <div class="header">
        <div class="iconLd">
            <span class="iconfont icon-lingdang1" ref="bottomLogo"></span> 
        </div>
        <div class="headImg">
            <img src="../assets/img/headimg.jpg" alt="" @click="personalInfo()">
            <span @click="login()" v-show="hasLogin">立即登录</span>
            <div v-show="!hasLogin" class="info" @click="personalInfo()">
                <p>{{name}}</p>
                <p>
                    <span class="iconfont icon-shouji"></span>
                    <span>{{phone}}</span>
                </p>
            </div>
            <p>
                <span class="iconfont icon-jinbi"></span>
                <span>签到领积分</span>
            </p>
        </div>
        <div class="bottom">
            <p>
                <span>绿卡</span>
                <span>花0.25元/天，预计省806元/年</span>
            </p>
            <p>
                <span>立即开通</span>
                <span class="iconfont icon-qianjin3"></span>
            </p>
        </div>
    </div>
    <div class="myAccount">
        <div>
            <!-- coupon 优惠券 -->
            <p>{{coupon}}</p>
            <span>优惠券</span>
        </div>
        <div>
            <!-- integral 积分 -->
            <p>{{integral}}</p>
            <span>积分</span>
        </div>
        <div class="balance" @click="goWallet()">
            <!-- balance 余额 -->
            <p>***</p>
            <span>余额(元)</span>
            <p>充1000送36</p>
        </div>
    </div>
    <!-- indent 订货单 -->
    <div class="myIndent">
        <div class="indent">
            <span>我的订单</span>
            <p>
                <span>查看全部订单</span>
                <span class="iconfont icon-qianjin3"></span>
            </p>
        </div>
        <div class="myIndent-bottom">
            <div>
                <span class="iconfont icon-daizhifu1"></span>
                <p>待支付</p>
            </div>
            <div>
                <span class="iconfont icon-baoguo"></span>
                <p>待收货</p>
            </div>
            <div>
                <span class="iconfont icon-pingjiaguanli"></span>
                <p>待评价</p>
            </div>
            <div>
                <span class="iconfont icon-shouhou"></span>
                <p>售后/退款</p>
            </div>
        </div>
    </div>
    <!-- 优惠券本券 -->
    <div class="ticket">
        <img src="../assets/img/ticket.png" alt="">
    </div>
    <!-- 常用功能 -->
    <div class="used">
        <div class="used-title">
            常用功能
        </div>
        <div class="used-box">
            <div>
                <span class="iconfont icon-vip-card-o"></span>
                <p>我的绿卡</p>
            </div>
            <div>
                <span class="iconfont icon-navicon-fwdzpz"></span>
                <p>收货地址</p>
            </div>
            <div class="invite"> 
                <span class="iconfont icon-liwulihe"></span>
                <p>邀请有礼</p>
                <span>得30元红包</span>
            </div>
            <div>
                <span class="iconfont icon-dianhuakefu-"></span>
                <p>联系客服</p>
            </div>
            <div>
                <span class="iconfont icon-chongzhiqia"></span>
                <p>礼品卡</p>
            </div>
            <div>
                <span class="iconfont icon-saoyisao4"></span>
                <p>扫一扫</p>
            </div>
            <div>
                <span class="iconfont icon-yijianfankui"></span>
                <p>意见反馈</p>
            </div>
            <div @click="setting()">
                <span class="iconfont icon-shezhi3"></span>
                <p>设置</p>
            </div>
            <div>
                <span class="iconfont icon-qiye"></span>
                <p>企业采购</p>
            </div>
        </div>
    </div>
    <transition name="fade-like" >
        <CaiNiXiHuan title="猜你喜欢"></CaiNiXiHuan>
    </transition>
</div>       
</template>
<script>
import CaiNiXiHuan from "@/components/CaiNiXiHuan"
import {getName} from "../../static/js/name"
import { Switch,MessageBox,Toast } from 'mint-ui'
export default {
    name:"MyCenterPage",
    data() {
        return {
            coupon:0,
            integral:0,
            hasLogin:"",
            name:"",
            phone:""
        }
    },
    components:{
        CaiNiXiHuan
    },
    methods:{
        goWallet(){
            if(localStorage.getItem("id")!==null){
                this.$router.push("/MyWalletPage");
            }else{
                Toast({
                    message: '请登录',
                    position: 'center',
                    duration: 2000
                });
            }
        },
        login(){
            this.$router.push("/LoginPage");//字符串
            // this.$router.push({path:"/LoginPage"});//对象
        },
        setting(){
            this.$router.push("/SettingPage");
        },
        personalInfo(){
            if(localStorage.getItem("username")!=null){
                this.$router.push("/PersonalInfoPage");
            }else{
                this.$router.push("/LoginPage");
            }
            
        }
    },
    created(){
        if(localStorage.getItem("username")!=null){
            this.hasLogin=false;
            this.name=localStorage.getItem("username");
            let phone=localStorage.getItem("userphone");
            //截取中间的5位
            let first=phone.substring(0,3);
            let last=phone.substring(7);
            this.phone=first+"****"+last;
        }else{
            this.hasLogin=true;
        }
    },
    mounted(){
        window.onscroll=()=>{
            let top=document.body.scrollTop || document.documentElement.scrollTop;
            if(top==0){
                this.$refs.hiddenTop.style.opacity="0";
                this.$refs.bottomLogo.style.display="block";
            }
            if(top>0 && top<=10){
                this.$refs.bottomLogo.style.display="none";
                this.$refs.hiddenTop.style.opacity=".2";
                this.$refs.mine.style.opacity=".2";
                this.$refs.logo.style.color="#fff";    
            }
            if(top>10 && top<=20){
                this.$refs.hiddenTop.style.opacity=".4";
                this.$refs.mine.style.opacity=".4";
                this.$refs.logo.style.color="#e9e9e9";    
            }
            if(top>20 && top<=30){
                this.$refs.hiddenTop.style.opacity=".6";
                this.$refs.mine.style.opacity=".6";
                this.$refs.logo.style.color="#d6d5d5";  
            }
            if(top>30 && top<=40){
                this.$refs.hiddenTop.style.opacity=".8";
                this.$refs.mine.style.opacity=".8";
                this.$refs.logo.style.color="#cacaca";
            }
            if(top>40 && top<=50){
                this.$refs.hiddenTop.style.opacity="1";
                this.$refs.mine.style.opacity="1";
                this.$refs.logo.style.color="#666";
            }
            if(top>50){
                this.$refs.hiddenTop.style.opacity="1";
                this.$refs.mine.style.opacity="1";
                this.$refs.logo.style.color="#666";
            }
        }
    }
}
</script>
