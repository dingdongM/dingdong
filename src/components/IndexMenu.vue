<template>
	<div class="IndexMenu">
        <ul>
            <li v-for="(pic,index) in menu" :key="index">
                <div><img :src="pic.src" alt=""></div>
                <span>{{pic.name}}</span>
            </li>
        </ul>
        <div class="vipImg">
            <img src="../assets/img/vip.jpg" alt="">
        </div>
	</div>
</template>

<script>

import axios from 'axios';

export default {
	name: 'IndexMenu',
	data() {
		return {
            "menu":[]
        }
    },
    created(){
        axios.get('/Menu')
        .then(res=>{
            this.menu = res.data;
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.IndexMenu{
    width: 100%;
}
ul{
    width: 100%;
    display: -webkit-flex;
    flex-wrap: wrap;
    padding-top: .15rem;
    font-size: 12px;
    color: #696969;
    background: white;
}
li{
    width: 20%;
    height: .74rem;
    margin-bottom: .15rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    flex-direction: column; 
}
li div{
    width: .57rem;
    height: .57rem;
}
li img{
    width: 100%;
    height: 100%;
}

.vipImg{
    width: 100%;
    /* background: #f5f5f5; */
    margin: .1rem 0;
    display: -webkit-flex;
    -webkit-justify-content: center;
}
.vipImg img{
    width: 90%;
    height: .45rem;
}
</style>