<template>
	<div class="Special">
        <header>
            <h2><span>|</span>特色专区</h2>
        </header>
        <ul>
            <li v-for="(item,index) in special" :key="index">
                <h2>{{item.title}}</h2>
                <p>{{item.brif}}</p>
                <div>
                    <img :src="item.src1" alt="">
                    <img :src="item.src2" alt="">
                </div>
            </li>
        </ul>
	</div>
</template>

<script>

import axios from 'axios';

export default {
	name: 'Special',
	data() {
		return {
            "special":[]
        }
    },
    created(){
        axios.get('/SpecialList')
        .then(res=>{
            this.special = res.data;
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Special{
    width: 100%;
    background: white;
    margin: .1rem 0;
    padding-bottom: .1rem;
}
header{
    width: 90%;
    margin: 0 auto;
    padding: .15rem 0;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    font-size: .14rem;
}
header h2{
    margin-right: 15px;
}
header h2 span{
    color: #3cb963;
    margin-right: 10px;
}
ul{
    width: 90%;
    margin: 0 auto;
    border: 1px solid #eeeeee;
    box-sizing: border-box;
    border-radius: 10px;
    display: -webkit-flex;
    flex-wrap: wrap;
    font-size: 12px;
    color: #999;
}
ul li{
    width: 50%;
    border-right:1px solid #eeeeee;
    border-bottom:1px solid #eeeeee;
    box-sizing: border-box; 
    padding: .11rem;
}
ul li:nth-of-type(2n){
    border-right: none;
}
ul li:nth-of-type(3),ul li:nth-of-type(4){
    border-bottom: none;
}
ul li h2{
    font-size: .14rem;
    padding: .11rem 0;
}
ul li:nth-of-type(1) h2{
    color: #fe6741;
}
ul li:nth-of-type(2) h2{
    color: #fe3752;
}
ul li:nth-of-type(3) h2{
    color: #3eba31;
}
ul li:nth-of-type(4) h2{
    color: red;
}
ul li div{
    padding-top: .14rem;
}
img{
    width: .55rem;
    height: .54rem;
}
img:nth-of-type(1){
    margin-right: .22rem;
}
</style>