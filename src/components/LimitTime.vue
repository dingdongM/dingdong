<template>
	<div class="LimitTime">
        <header>
            <div>
                <h2><span>|</span>限时抢购</h2>
                <p>
                    <span v-html="hours"></span>&nbsp;:&nbsp;<span v-html="minutes"></span>&nbsp;:&nbsp;<span v-html="seconds"></span>
                </p>
            </div>
            <b>更多</b>
        </header>
        <ul>
            <li v-for="(item,index) in List" :key="index">
                <router-link :to="'/DetailsPages/'+item.goodsId">
                    <div class="pic">
                        <img :src="item.src" alt="">
                        <h2>{{item.brif}}</h2>
                    </div>
                </router-link>
                <div class="price">
                    <p>
                        <i>￥<span>{{item.newPrice}}</span></i>
                        <del>￥<span>{{item.oldPrice}}</span></del>
                    </p>
                    <b class="iconfont icon-gouwuche"></b>
                </div>
            </li>
        </ul>
	</div>
</template>

<script>

import axios from 'axios';

export default {
	name: 'LimitTime',
	data() {
		return {
            "hours":13,
            "minutes":26,
            "seconds":59,
            "myTimer":-1,
            "List":[]
        }
    },
    created(){
        axios.get("/LimitList")
        .then(res=>{
            this.List = res.data;
        })
        .catch(err=>{
            console.log(err);
        })
    },
    mounted(){
        this.start();
    },
    methods:{
        //开始倒计时
        start(){
            if(this.myTimer>-1){
                clearInterval(this.myTimer);
            }
            this.myTimer = setInterval(()=>{
                this.seconds--;
                if(this.seconds == 0){
                    this.minutes--;
                    if(this.minutes == 0){
                        this.hours--;
                        this.minutes = 59;
                    }
                    this.seconds = 59;
                }
                this.seconds = this.seconds<10?"0"+this.seconds:this.seconds;
            },1000)
            this.minutes = this.minutes<10?"0"+this.minutes:this.minutes;
            this.hours = this.hours<10?"0"+this.hours:this.hours;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.LimitTime{
    width: 100%;
    background: white;
}
header{
    width: 90%;
    margin: 0 auto;
    padding: .15rem 0;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
}
header div{
    display: -webkit-flex;
    -webkit-align-items: center;
    font-size: .14rem;
}
header div h2{
    margin-right: 15px;
}
header div h2 span{
    color: #3cb963;
    margin-right: 10px;
}
header div p span{
    display: inline-block;
    padding: 3px;
    background: black;
    font-size: 12px;
    color: white;
}
header b{
    font-size: 14px;
    color: #3cb963;
    font-weight: 100;
}
ul{
    padding-left: 5%;
    display: -webkit-flex;
    overflow-x: auto;
}
ul li{
    width: 30%;
    height: 1.84rem;
    font-size: 12px;
    flex-shrink: 0;
    margin-right: 5px;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
}
li .pic{
    width: 100%;
}
li h2{
    padding: 0 3px;
    font-size: 12px;
    font-weight: 400;
    color: black;
}
.price{
    width: 90%;
    padding-bottom: 5px;
    margin: 0 auto;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
}
.price p i{
    display: block;
    font-style: normal;
    color: #fe696a;
}
.price p del{
    color: #b9b9b9;
}
.price b{
    display: block;
    width: .25rem;
    height: .25rem;
    border-radius: 50%;
    background: #43bf6a;
    color: white;
    text-align: center;
    line-height: .25rem;
}
img{
    width: 100%;
}
</style>
