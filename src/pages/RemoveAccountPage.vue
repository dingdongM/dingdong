<style scoped lang="scss">
@mixin widthAndHeight{
    width:100%;
    height:100%;
}
@mixin widthOnly{
    width:100%;
}
@mixin box{
    box-sizing:border-box;
    padding-left:10px;
}
$color2:#666;
.removeAccount{
    @include widthAndHeight;
    background-color:#f5f5f5;
    .back{
        @include box;
        width:100%;
        height:.5rem;
        display:flex;
        align-items:center; 
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
        @include widthOnly;
        @include box;
        height:.3rem;
        background-color:rgba($color: #f5f5f5, $alpha: 0);
        line-height:.3rem;
    }
    .mid{
        width:100%;
        background-color:#fff;
        >div{
            padding:0 10px;
            display:flex;
            justify-content: space-between;
            align-items:center;
        }
        div:first-child{
            height:.5rem;
            border-bottom:1px solid #e8e8e8;
            .payPassword{
                color:#afafaf;
            }
        }
        div:last-child{
            height:.6rem;
            div{
                height:100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                border:none;
                em{
                    color:#3fd866;
                }
            }
        }
    }
    .remove{
        width:100%;
        height:.5rem;
        line-height: .5rem;
        text-align: center;
        background-color: #fff;
        margin-top:10px;
    }
}
</style>
<template>
<div class="removeAccount">
    <div class="back">
        <span class="iconfont icon-zuojiantou1" @click="back"></span>
        <span>账号与安全</span>
    </div> 
    <div class="tip">
        支付设置
    </div>
    <div class="mid">
        <div @click="setPassword()">
            <span>支付密码</span>
            <p class="payPassword">
                <span v-show='(data.payPass==="")'>未设置</span>
                <span class="iconfont icon-qianjin3"></span>
            </p>
        </div>
        <div>
            <div>
                <span>指纹支付</span>
                <p class="bellow">同意<em>《 指纹支付协议 》</em></p>
            </div>
            <mt-switch id="mt-switch" v-model="value"></mt-switch>
        </div>
    </div>
    <div class="remove" @click="removeAccount()">
        注销账号
    </div>
</div>          
</template>
<script>
import axios from "axios"
import { Switch,MessageBox,Toast } from 'mint-ui'
export default {
    name:"RemoveAccountPage",
    data() {
        return {
            value:false,
            data:{}
        }
    },
    methods:{
        back(){
            this.$router.go(-2);
        },
        removeAccount(){
            // console.log(localStorage.getItem("id"));
            if(localStorage.getItem("id")===null){
                Toast({
                    message: '请登录',
                    position: 'center',
                    duration: 2000
                });
                return;
            }
            MessageBox.confirm("确定要注销吗?").then(()=>{
                axios.delete(`/user/${localStorage.getItem("id")}`)
                .then(res=>{
                    // console.log(res.data)
                    if(Object.keys(res.data).length==0){
                        Toast({
                            message: '注销成功',
                            position: 'center',
                            duration: 1000
                        });
                        localStorage.clear();
                    }
                })
                .catch(err=>{
                    Toast({
                        message: '注销失败',
                        position: 'center',
                        duration: 1000
                    });
                })
            })   
        },
        setPassword(){
            MessageBox.prompt("请输入支付密码,可以是6~10为数字,字母,下划线的组合").then(({value,action})=>{
                if(value==null){
                    Toast({
                        message:"请输入密码",
                        position:"center",
                        duration:2000
                    })
                    return;
                }else{
                    let reg=/^\d{6}/;
                    let obj={
                        id: this.data.id,
                        phone: this.data.phone,
                        name: this.data.name,
                        payPass: value,
                        sex: this.data.sex,
                        headIcon: this.data.deadIcon,
                        birthday: this.data.birthday,
                        lastNameDate: this.data.lastNameDate,
                        wallet: this.data.wallet
                    };
                    if(reg.test(value)){
                        axios.put(`/user/${this.data.id}`,obj)
                        .then(res=>{
                            this.data=res.data;
                            Toast({
                                message:"设置成功",
                                position:"center",
                                duration:2000
                            });
                        })
                    }else{
                        Toast({
                            message:"密码不合法",
                            position:"center",
                            duration:2000
                        })
                        return;
                    }
                }
            })
        },
    },
    created(){
        axios.get(`/user/${localStorage.getItem("id")}`)
        .then(res=>{
            this.data=res.data;
        })
    }
}
</script>
