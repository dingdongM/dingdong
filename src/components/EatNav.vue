<!--
 * @Author: your name
 * @Date: 2019-11-26 20:21:48
 * @LastEditTime: 2019-12-06 11:24:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\dingdong\src\components\EatNav.vue
 -->
<template>
    <div class="box">
        <div class="content">
            <h1>今日菜单</h1>
            <div class="nav">
                <ul>   
                    <li v-for="(title,index) in this.titles" :key="index" :class="num==index?'borderColor':'' " v-on:click="changeBorder(index,title.name)">{{title.name}}</li>
                </ul>
            </div>
            <div class="content">  
                <WaterFall :typename="currtype"></WaterFall>
            </div>
        </div>
    </div>          
</template>
<script>
import axios from 'axios';
import WaterFall from './WaterFall';
export default {
    name:"EatNav",
    data() {
        return {
            titles:[],
            num:"",
            currtype:"面食",
            newWaterfallData: [],
            waterfallData:[]
        }
    },
    components:{WaterFall},
    methods:{
        changeBorder:function(index,typeName){
            this.num=index
            this.currtype=typeName      
            // console.log("nav页面"+this.currtype)
        }
    },
    created(){
        axios.get("http://10.35.161.8:3000/title")
        .then(res=>{
            this.titles=res.data
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
</script>
<style scoped>
    .box{
        width: 100%;
        height: 0.25rem;
        margin-top:5px;
    }   
    .content{
        width: 3.58rem;
        height: 0.73rem;
        margin:0 auto;
    }
    .content h1{      
        font-size: 0.14rem;
        border-left: 2px solid #52cd75;
        padding-left: 7px;
    }  
    ul{
        display: flex;
        width: 3.58rem;
        height: 0.48rem;
        align-items: center;
        overflow-x: auto;
    }
    li{
        width: 0.52rem;
        height: 0.23rem;
        border:1px solid #dbdada;
        border-radius: 12px;
        font-size: 12px;
        margin-right: 9px;
        line-height: 0.23rem;
        text-align: center;    
        flex-shrink: 0;
    }
    .borderColor{
        border:1px solid #34aa70;
        color:#34aa70;
    } 

</style>
