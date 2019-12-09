<!--
 * @Author: 潘金红
 * @Date: 2019-11-28 19:43:08
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-30 15:37:54
 * @Description: 
 -->
<style scoped lang="scss">  
$color:#a9a9a9;
$color2:#666;
$color3:#3fd866;
.loginBox{
    width:100%;
    height:100%;
    background-color: #f5f5f5;
    position: relative;
    .back{
        height:.5rem;
        display:flex;
        align-items:center; 
        padding-left:10px;
        .iconfont{
            color:$color2;
            font-size:.2rem;
        }
        span:last-child{
            margin-left:.15rem;
        }
    }
    .form{
        display:flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        input[type="text"]{
            width:100%;
            height:.5rem;
            border:none;
            border-bottom:1px solid #e6e6e6;
            outline: none;
            text-indent:10px;
            color:#000;
            caret-color:$color3;
            background-color: #f5f5f5;
        }
        input[type="button"]{
            width:96%;
            border:none;
            height:.4rem;
            background-color:#cecece;
            border-radius:20px/20px;
            margin-top:10px;
            color:#fff;
            font-size:.16rem;
            outline: none;
        }
        .code{
            align-self: flex-end;
            color:$color3;
            font-size:.12rem;
            margin-right:3%;
            line-height: .3rem;
        }
        .getCode{
            height:.35rem;
            width:1rem;
            position: absolute;
            top:.58rem;
            right:10px;
            text-align: center;
            line-height:.35rem;
            border-radius:20px/20px;
            color:#fff;
            border:none;
            outline: none;
            background-color: #cecece;
        }
        .getCodeReally{
            @extend .getCode;
            background-color: $color3;
        }
    }
    .wechat{
        // background-color:#a9a9a9;
        // line-height: .4rem;
        // text-align: center;
        width:100%;
        position: absolute;
        left:0;
        bottom:0;
        .line{
            width:100%;
            border-bottom:1px solid #c1bcbc;
        }
        >span{
            position: absolute;
            left:50%;
            top:0;
            color:#a9a9a9;
            transform: translate(-50%,-50%);
            z-index: 1;
            background-color:#f5f5f5;
            em{
                font-size:12px;
            }
        }
        .wechat-login{
            height:1rem;
            text-align: center;
            margin-top:.3rem;
            .iconfont{
                display:block;
                width:.5rem;
                height:.5rem;
                margin: 0 auto;
                font-size:.4rem;
                color:#f5f5f5;
                border-radius:50%;
                background-color:#3fd866; 
                padding:9px 5px 0px 6px;
            }
            span:last-child{
                color:#a9a9a9;
            }
        }
        p{
            color:#a9a9a9;
            text-align:center;
            padding-bottom:10px;
            font-size: 12px;
            em{
                color:#3fd866;
            }
        }
    }
}
</style>
<template>
<div class="loginBox">
    <div class="back">
        <span class="iconfont icon-zuojiantou1" @click="back"></span>
        <span>登录/注册</span>
    </div>
    <div class="form">
        <input type="text"  v-model="phoneNum" placeholder="输入手机号 ( 新号码自动注册 )" 
        autofocus 
        maxlength="11"
        >
        <input type="text" v-model="suijiNum" placeholder="输入验证码" maxlength="4">
        <input type="button" value="登录" v-show="loginReally">
        <input type="button" value="登录" v-show="!loginReally" ref="login" @click="goLogin()">
        <button class="getCode" v-show="hasPhone">获取验证码</button>
        <button class="getCodeReally" v-show="!hasPhone" @click="getCode()" ref="time">获取验证码</button>
        <span class="code">收不到验证码?</span>
    </div>
    <div class="wechat" v-show="hidshow">
        <div class="line"></div>
        <span><em>◆</em> 第三账号方登录 <em>◆</em></span>
        <div class="wechat-login">
            <span class="iconfont icon-weixin"></span>
            <span>微信登录</span>
        </div>
        <p>登录即代表你同意叮咚买菜 <em>《服务协议》</em>和<em>《隐私政策》</em></p>
    </div>
</div>          
</template>
<script>
import axios from "axios"
import {getName} from "../../static/js/name"
import { Indicator,Toast } from 'mint-ui';
export default {
    name:"LoginPage",
    data() {
        return {
            phoneNum:"",
            suijiNum:"",
            isDisable:true,
            code:"",
            docmHeight: document.documentElement.clientHeight,  //默认屏幕高度
            showHeight: document.documentElement.clientHeight,   //实时屏幕高度
            hidshow:true  //是否显示
        }
    },
    watch:{
        showHeight:function() {
            if(this.docmHeight > this.showHeight){
                this.hidshow=false;
            }else{
                this.hidshow=true;
            }
        }
    },
    computed:{
        hasPhone(){
            if(this.phoneNum.length==11){
                return false;
            }else{
                return true;
            }
        },
        loginReally(){
            if(this.suijiNum.length==4){
                this.$refs.login.style.backgroundColor="#3fd866";
                return false;
            }else{
                return true;
            }
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        getCode(){
            this.$refs.time.disabled=true;
            this.$refs.time.style.backgroundColor="#cecece";
            let i=60;
            // let that=this;
            const timer=setInterval(()=>{
                i--;
                i<10?this.$refs.time.innerHTML="0"+i+"秒":this.$refs.time.innerHTML=i+"秒";
                if(i<=0){
                    clearInterval(this.Timer);
                    this.$refs.time.innerHTML="获取验证码";
                    this.$refs.time.disabled=false;
                    this.$refs.time.style.backgroundColor="#3fd866";
                }
            },1000)

            this.$once("hook:beforeDestroy",function(){
                clearInterval(timer);
            })
            axios({
                method: 'get',
                url: 'http://10.35.161.6:3001/login?phoneNum='+this.phoneNum
            })
            .then(res=>{
                if(res.data.msg=="ok"){
                    Toast({
                        message: '获取成功',
                        position: 'center',
                        duration: 1000
                    });
                    this.code=res.data.code;
                }
            })
            .catch(err=>{
                // console.log(err);
            })
            
        },
        goLogin(){
            if(this.suijiNum!=this.code){
                Toast({
                    message: '验证码错误',
                    position: 'center',
                    duration: 1000
                });
                return;
            }
            Indicator.open({
                text: '登录中...',
                spinnerType: 'fading-circle'
            })
            axios.get("/user?phone="+this.phoneNum)
            .then(res=>{
                // console.log(res.data)
                if(res.data.length>0){
                    Indicator.close();
                    Toast({
                        message: '登录成功',
                        position: 'center',
                        duration: 1000
                    });
                    localStorage.setItem("username",res.data[0].name);
                    localStorage.setItem("userphone",res.data[0].phone);
                    localStorage.setItem("id",res.data[0].id);
                    this.$router.push("/MyCenterPage");
                }else{
                    let newData={
                        id:"",
                        phone:this.phoneNum,
                        name:getName(),
                        payPass:"",
                        sex:"",
                        headIcon:"",
                        birthday:"",
                        lastNameDate:"",
                        wallet:"0.00"
                    }
                    axios.post("/user",newData)
                    .then(res=>{
                        // console.log(res);
                        if(res.status==201){
                            Indicator.close();
                            Toast({
                                message: '登录成功',
                                position: 'center',
                                duration: 1000
                            });
                            localStorage.setItem("username",res.data.name);
                            localStorage.setItem("userphone",res.data.phone);
                            localStorage.setItem("id",res.data.id);
                            this.$router.push("/MyCenterPage");
                        }
                    })
                }
            })
        }
    },
    created(){
       
    },
    mounted(){
        // window.onresize监听页面高度的变化
        window.onresize = ()=>{
            return(()=>{
                this.showHeight = document.body.clientHeight;
            })()
        }
    }
}
</script>
