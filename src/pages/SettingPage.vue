<!--
 * @Author: 潘金红
 * @Date: 2019-11-29 19:52:53
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-30 16:47:01
 * @Description: 
 -->
<style scoped lang="scss">
$color2:#666;
@mixin marginval{
    padding-left:10px;
    padding-right:10px;
}
.setting{
    width:100%;
    height:100%;
    background-color: #f5f5f5;
    .back{
        height:.5rem;
        display:flex;
        align-items:center; 
        padding-left:10px;
        background-color: #fff;
        .iconfont{
            color:$color2;
            font-size:.2rem;
        }
        span:last-child{
            margin-left:.15rem;
        }
    }
    .tip{
        height:.6rem;
        display:flex;
        align-items: center;
        @include marginval;
        background-color: #fff;
        margin-top:10px;
        #mt-switch{
            margin-left:.1rem;
            width:.5rem;
            height:.1rem;
        }
        .bellow{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .safety{
        height:.5rem;
        display:flex;
        align-items: center;
        justify-content: space-between;
        background-color:#fff;
        margin:10px 0;
        span:first-child{
            margin-left:10px;
        }
        span:last-child{
            margin-right:10px;
        }
    }
    .about{
        box-sizing: border-box;
        padding-left:10px;
        background-color:#fff;
        >div{
            height:.5rem;
            display:flex;
            align-items: center;
            justify-content: space-between;
            background-color:#fff;
            margin:0;
            border-bottom:1px solid #e8e8e8;
            span{
                margin-right:10px;
            }
        }
        >div:last-child{
            border-bottom:none;
        }
    }
    .loginOut{
        height:.5rem;
        background-color:#fff;
        text-align:center;
        line-height: .5rem;
        margin-top:10px;
    }
    .login{
        height:.4rem;
        width:90%;
        background-color: #3fd866;
        border-radius:120px/120px;
        margin:10px auto 0;
        text-align: center;
        line-height:.4rem;
        color:#fff;
    }
}          
</style>
<template>
<div class="setting">
    <div class="back">
        <span class="iconfont icon-zuojiantou1" @click="back"></span>
        <span>应用设置</span>
    </div> 
    <div class="tip">
        <div>
            <span>赠葱提醒</span>
            <p class="bellow">开启后,当符合条件时在购物车会收到赠葱提醒</p>
        </div>
        <mt-switch id="mt-switch" v-model="value"></mt-switch>
    </div>
    <div class="safety" @click="goRemove()">
        <span>账号与安全</span>
        <span class="iconfont icon-qianjin3"></span>
    </div>
    <div class="about">
        <div>
            <span>清除缓存</span>
        </div>
        <div>
            <span>检查更新</span>
        </div>
        <div>
            <span>去评价</span>
            <span class="iconfont icon-qianjin3"></span>
        </div>
        <div>
            <span>关于</span>
            <span class="iconfont icon-qianjin3"></span>
        </div>
    </div>
    <div v-show="!hasLogin" class="login" @click="goLogin()">
        登录
    </div>
    <div class="loginOut" @click="loginOut()" v-show="hasLogin">
        退出登录
    </div>
</div>
           
</template>
<script>
import { Switch,MessageBox,Toast } from 'mint-ui'
export default {
    name:"SettingPage",
    data() {
        return {
            value:true,
            hasLogin:""
        }
    },
    components:{
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        loginOut(){
            MessageBox.confirm("确定要退出登录吗?").then(()=>{
                Toast({
                    message: '退出成功',
                    position: 'center',
                    duration: 1000
                });
                localStorage.clear();
                this.hasLogin=false;
            })   
        },
        goLogin(){
            this.$router.push("/LoginPage");
        },
        goRemove(){
            this.$router.push("/RemoveAccountPage");
        }
    },
    created(){
        if(localStorage.getItem("username")!=null){
            this.hasLogin=true;
        }else{
            this.hasLogin=false;
        }
    }
}
</script>
