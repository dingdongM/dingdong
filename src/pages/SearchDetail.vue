<template>
	<div class="SearchDetail">
        <div class="Top">
            <header>
                <b class="el-icon-back" @click="back"></b>
                <div>
                    <i class="el-icon-search"></i>
                    <input type="text" v-model="this.$route.query.name">
                </div>
                <span class="iconfont icon-gouwuche"></span>
            </header>
            <div class="find">
                <p>
                    <span>综合</span>
                    <span>销量</span>
                    <span>价格<i class="el-icon-d-caret"></i></span>
                </p>
            </div>
        </div>
        <ul>
            <li v-for="(item,index) in detailList" :key="index">
                <div class="pic"><img :src="item.pic" alt=""></div>
                <div class="price">
                    <h2>{{item.name}}</h2>
                    <p>
                        <i>￥<span>{{item.price}}</span></i>
                        <b class="iconfont icon-gouwuche"></b>
                    </p>
                </div>
            </li>
        </ul>
	</div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'SearchDetail',
    // props:['name'],
	data() {
		return {
            detailList:[]
        }
    },
    created(){
        // console.log(this.$route);
        // console.log(this.$route.query.name);
        axios.get('/search?name='+this.$route.query.name)
        // axios.get('/search?name='+this.name)
        .then(res=>{
            let list = res.data.list[0].list;
            // console.log(res.data.list[0].list);
            this.detailList = list;
        })
        .catch(err=>{
            console.log(err);
        });
    },
	methods:{
		back(){
			this.$router.back(-1);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.SearchDetail{
	width: 100%;
    background: #f5f5f5;
}
.Top{
    width: 100%;
    background: white;
    position: fixed;
    top: 0;
}
header{
    width: 90%;
	margin: 0 auto;
	padding-top: .08rem;
	display: -webkit-flex;
	-webkit-justify-content: space-between;
	-webkit-align-items: center;
}
header b{
	font-size: .18rem;
	font-weight: 800;
	color: #81838e;
}
header span{
	font-size: .22rem;
}
header div{
	width: 2.66rem;
	height: .32rem;
	background: #f5f5f5;
	border-radius: .16rem;
	display: -webkit-flex;
	-webkit-align-items: center;
}
header div i{
	font-size: .14rem;
	margin-left: .15rem;
}
header div input{
	margin-left: .1rem;
	border: 0;
	outline: 0;
	background: #f5f5f5;
}
.find{
	width: 90%;
	margin: 0 auto;
	font-size: 12px;
}
.find p{
	padding: .15rem 0;
	display: -webkit-flex;
	-webkit-justify-content: space-around;
	-webkit-align-items: center;
    letter-spacing: 2px;
}
.find p span i{
    color: #999999;
}
ul{
    width: 95%;
    margin: 0 auto;
    padding-top: 1rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-flex-wrap: wrap;
}
ul li{
    width: 48.5%;
    background: white;
    border-radius: 10px;
    margin-bottom: .1rem;
    font-size: 12px;
}
ul li .pic{
    width: 70%;
    margin: .12rem auto;
}
img{
    width: 100%;
    height: 100%;
}
li h2{
    padding: 0 3px;
    font-size: 12px;
    font-weight: 400;
    color: black;
}
.price{
    width: 90%;
    height: 1rem;
    margin: 0 auto;
    padding-bottom: .15rem;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-justify-content: space-between;
}
.price p{
     display: -webkit-flex;
    -webkit-justify-content: space-between;
}
.price i{
    font-style: normal;
    color: #fe696a;
}
.price i span{
    font-size: .16rem;
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

</style>
