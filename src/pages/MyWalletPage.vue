<style scoped lang="scss"> 
@mixin boxAndPadding{
    box-sizing:border-box;
    padding-left:10px;
    padding-right:10px;
}
.wallet{
    width:100%;
    height:100%;
    .back{
        height:.5rem;
        display:flex;
        justify-content: space-between;
        align-items:center; 
        @include boxAndPadding();
        position: sticky;
        background-color:#fff;
        left:0;
        top:0;
        .iconfont{
            color:#666;
            font-size:.2rem;
        }
        p{
            span:last-child{
                margin-left:.15rem;
            }
        }
        >span{
            color:#3fd866;
        }
        
    }
    .content{
        width:100%;
        @include boxAndPadding();
        .showMoney{
            width:100%;
            height: 1.5rem;
            background-color:#415270;
            border-radius:10px;
            display:flex;
            justify-content: space-between;
            align-items: center;
            >span{
                background-color:#46c165;
                padding:6px;
                color:#000;
                font-size:12px;
                font-weight:600;
                border-radius:15px/15px;
                margin-right:.15rem;
            }
            >div{
                margin-left:.15rem;
                color:#fff;
                span{
                    font-size:.18rem;
                    font-weight:600;
                }
            }
        }
        .recharge{
            margin-top:.15rem;
            >p:nth-of-type(1){
                font-weight:900;
            }
            >p:nth-of-type(2){
                font-size:12px;
                color:#afafaf;
                padding-top:6px;
            }
            >div{
                margin-top:10px;
                width:100%;
                height:100%;
                display:flex;
                justify-content: space-between;
                div{
                    width:23%;
                    height:1rem;
                    border:1px solid #3fd866;
                    border-radius:5px;
                    display:flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        line-height:.2rem;
                        font-weight:900;
                        font-size:.18rem;
                        em{
                            font-weight:normal;
                            font-size:.14rem;
                        }
                    }
                    span{
                        font-size:12px;
                        color:#afafaf;
                    }
                }
            }
            .current{
                background-color:#3fd866;
                color:#fff;
                box-shadow:0 0 5px 2px #ccc;
                span{
                    color:#fff;
                }
            }
            
        }
        .rechargeAccount{
            width:100%;
            margin-top:.4rem;
            >p{
                font-weight:900;
                em{
                    font-weight:normal;
                    color:#afafaf;
                }
            }
            div{
                height:.5rem;
                background-color:#eaeaea;
                box-sizing: border-box;
                padding:0 10px;
                display:flex;
                border-radius:5px;
                justify-content: space-between;
                align-items: center;
                p{
                    .icon-wode{
                        display:inline-block;
                        background-color:#fff;
                        border-radius:50%;
                        text-align: center;
                        line-height:.2rem;
                        color:#3fd866;
                        width:.2rem;
                        height:.2rem;
                        border:1px solid #3fd866;

                    }
                }
            }
            div:nth-of-type(1){
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                margin-top:.15rem;
            }
            div:nth-of-type(2){
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }
        }
        .rechargeAccount2{
            @extend .rechargeAccount;
            div{
                p{
                    .icon-zhifubao1{
                        width:.25rem;
                        height:.25rem;
                        color:#004fff;
                    }
                    .icon-weixinzhifu1{
                        width:.25rem;
                        height:.25rem;
                        color:#11bc0e;
                    }
                }
            }
            .null{
                width:100%;
                height:.5rem;
                background-color:#fff;
            }
            
        }
        
    }
    .footer{
        width:100%;
        height:.8rem;
        position:sticky;
        left:0;
        bottom:0;
        z-index: 10;
        background-color:#fff;
        p{
            font-size:12px;
            color:#afafaf;
            text-align: center;
            line-height:.3rem;
            em{
                color:#3fd866;
            }
        }
        div{
            width:100%;
            height:.5rem;
            text-align: center;
            box-sizing: border-box;
            padding:0 10px;
            input{
                width:100%;
                height:.4rem;
                background-color:#3fd866;
                color:#fff;
                font-size:.16rem;
                border:none;
                outline: none;
                font-weight:600;
                border-radius:120px/120px;
            }
        }
    }
}
</style>
<template>
<div class="wallet">
    <div class="back">
        <p>
            <span class="iconfont icon-zuojiantou1" @click="back()"></span>
            <span>我的余额</span>
        </p>
        <span>明细</span>
    </div>
    <div class="content">
        <div class="showMoney">
            <div>
                <p>账户余额 (元)</p>
                <span>{{data.wallet}}</span>
            </div>
            <span>用礼品卡充值</span>
        </div>
        <!-- 充值模块 -->
        <div class="recharge">
            <p>充值</p>
            <div>
                <div :class="{current:iscurrent==0}" @click="recharage(0)">
                    <p>1000<em>元</em></p>
                    <span>赠送36元</span>
                </div>
                <div :class="{current:iscurrent==1}" @click="recharage(1)">
                    <p>500<em>元</em></p>
                    <span>赠送15元</span>
                </div>
                <div :class="{current:iscurrent==2}" @click="recharage(2)">
                    <p>300<em>元</em></p>
                    <span>赠送8元</span>
                </div>
                <div :class="{current:iscurrent==3}" @click="recharage(3)">
                    <p>200<em>元</em></p>
                </div>
            </div>
            <p>充值完成后，可在【我的】礼品【礼品卡】中查看余额（礼品卡充值不返现哦）</p>
        </div>
        <!-- 充值账户模块 -->
        <div class="rechargeAccount">
            <p>充值账户<em>可以帮父母，亲人充值啦</em></p>
            <div>
                <p>
                    <span class="iconfont icon-wode"></span>
                    <span>我的账户</span>
                </p>
                <el-checkbox v-model="checked1" class="checkBtn" disabled></el-checkbox>
            </div>
            <div @click="other()">
                <p>
                    <span class="iconfont icon-wode"></span>
                    <span>其他账户</span>
                </p>
                <el-checkbox v-model="checked2" class="checkBtn" disabled></el-checkbox>
            </div>
        </div>
        <div class="rechargeAccount2">
            <p>支付方式</p>
            <div>
                <p>
                    <span class="iconfont icon-zhifubao1"></span>
                    <span>支付宝支付</span>
                </p>
                <el-checkbox v-model="checked3"></el-checkbox>
            </div>
            <div>
                <p>
                    <span class="iconfont icon-weixinzhifu1"></span>
                    <span>微信支付</span>
                </p>
                <el-checkbox v-model="checked4"></el-checkbox>
            </div>
            <div class="null">

            </div>
        </div>
    </div>
    <div class="footer">
        <p>充值即表示同意<em>《预付卡章程及购卡协议》</em></p>
        <div @click="payFor()">
            <input type="button" value="充值">
        </div>
    </div>
    <vpay ref="pays"
        v-model="show"        
        @input-end="inputEnd"
        :duration="time"
        :val="value"
    >
    </vpay>
</div>         
</template>
<script>
import  {MessageBox,Swith,Checklist,Indicator,Toast} from "mint-ui"
import axios from "axios"
export default {
    name:"MyWalletPage",
    data() {
        return {
            data:{},
            iscurrent:0,
            checked1:true,
            checked2:false,
            checked3:true,
            checked4:false,
            show:false,
            time:1000,
            value:"",
            totalMoney:0
        }
    },
    watch:{
        checked3:function(){
            if(this.checked3){
                this.checked4=false;
            }
        },
        checked4:function(){
            if(this.checked4){
                this.checked3=false;
            }
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        recharage(index){
            this.iscurrent=index;   
        },
        other(){
            MessageBox.prompt("请输入要充值的号码").then(({value,action})=>{
                if(value==null){
                    Toast({
                        message: '请输入要充值的电话号码',
                        position: 'center',
                        duration: 2000
                    });
                }else{
                    let reg=/^1\d{10}$/;
                    if(reg.test(value)){
                        axios.get("/user?phone="+value)
                        .then(res=>{
                            if(res.data[0]==null){
                                Toast({
                                    message: '该电话号码还未注册',
                                    position: 'center',
                                    duration: 2000
                                });
                            }else{
                                MessageBox.prompt("请输入支付密码")
                            }
                        })
                        .catch(err=>{
                            console.log(err);
                        })
                    }else{
                        Toast({
                            message: '请输入正确的电话号码',
                            position: 'center',
                            duration: 2000
                        });
                    }
                    
                }
            })
        },
        payFor(){
            if(this.data.payPass==""){
                Toast({
                    message:"前往设置支付密码",
                    position:"center",
                    duration:2000
                });
                this.$router.push("/RemoveAccountPage");
            }else{
                this.show=true;
            }
        },
        inputEnd(value){
            if(value==this.data.payPass){
                console.log(this.iscurrent);
                switch(this.iscurrent){
                    case 0:this.totalMoney=1000;break;
                    case 1:this.totalMoney=500;break;
                    case 2:this.totalMoney=300;break;
                    case 3:this.totalMoney=200;break;
                    default:;break;
                }
                console.log(this.totalMoney);
                let obj={
                    id: this.data.id,
                    phone: this.data.phone,
                    name: this.data.name,
                    payPass: value,
                    sex: this.data.sex,
                    headIcon: this.data.deadIcon,
                    birthday: this.data.birthday,
                    lastNameDate: this.data.lastNameDate,
                    wallet: (Number(this.data.wallet)+this.totalMoney).toString()
                }
                console.log((Number(this.data.wallet)+this.totalMoney).toString());
                axios.put(`/user/${this.data.id}`,obj)
                .then(res=>{
                    console.log(res);
                    this.data=res.data;
                    this.$refs.pays.$success(true).then(res => {
                        console.log('支付成功')
                    })
                })
            }else{
                this.$refs.pays.$fail('支付密码错误')
            }
        }
    },
    created:function(){
        axios.get("/user?phone="+localStorage.getItem("userphone"))
        .then(res=>{
            // console.log(res);
            this.data=res.data[0];
        })
        .catch(err=>{
            // coloe.log(err);
        }) 
    }
}
</script>
