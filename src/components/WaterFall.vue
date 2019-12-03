
<!--
 * @Author: your name
 * @Date: 2019-11-26 20:21:48
 * @LastEditTime: 2019-12-02 14:56:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\dingdong\src\components\EatNav.vue
 -->
<template>
    <div class="box">
        <div style="display:none">{{typename}}</div>
        <div class="content">
            <ul v-for="(item,index) in this.newwaterfallData" :key="index">
                <li v-for="(el,index) in item" :key="index">
                    <router-link :to='"/EatDetailPage/"+el.detailname'>
                        <div>
                            <img :src="el.img" alt="" class="imgP">
                        </div>
                        <div class="text">
                            <h5>{{el.detailname}}</h5>
                            <div >
                                <img :src="el.userimg" alt="">
                                <p>{{el.username}}</p>
                            </div>
                        </div>
                    </router-link>
                </li>       
            </ul>
        </div>
    </div>          
</template>
<script>
import axios from 'axios';
export default {
    props:['typename'],
    name:"WaterFall",
    data() {
        return {          
            title:"",
            waterfallData:[],
            newwaterfallData:[]
            
        }
    },
    methods:{
        getList:function(data){
            let arr=[]
            // console.log("1"+this.typename)
            for(let i=0;i<=data.length;i++){
                if(data[i].name==this.typename){
                    arr=data[i].list
                    return arr;
                }
            }
            
        },
        classColumn:function(data){
            let newwaterfallData=[[],[]]
            data.forEach((item,index)=>{
                switch(index%2){
                    case 0:newwaterfallData[0].push(item);break;
                    case 1:newwaterfallData[1].push(item);break;
                    default:;break;
                }
            })
            this.newwaterfallData=newwaterfallData
            
        }
        
    },
    created(){
        axios.get("http://localhost:3000/title")
        .then(res=>{
            this.title=res.data
            this.waterfallData=this.getList(this.title)
            this.classColumn(this.waterfallData)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    beforeUpdate(){
        // console.log(this.typename)
        this.waterfallData=this.getList(this.title)
        this.classColumn(this.waterfallData)
    }
}
</script>
<style lang="scss" scoped>
.box{
    width: 100%;
    height: 5rem;
    .content{
        display: flex;
        justify-content: space-between;
    }
    ul{
        width:1.74rem; 
        .imgP{
            width: 100%;
        }
        li{
            margin-bottom: 9px;
            border:2px solid #dcdcdc;
            border-radius: 4px;
            color: black;
        }
        .text{
            width: 1.66rem;
            height: 0.65rem;
            background: white;
            overflow: hidden;
            padding-left: 0.09rem;   
            color:black;
            h5{
                font-size: 13px;
                line-height: 13px;
                font-weight: bold;
                margin: 10px 0;
            }
            div{
                display: flex;
                img{
                    width: 0.17rem;
                    height: 0.17rem;
                    border-radius: 50%;
                }
                p{
                    font-size: 12px;
                }
            }
        }
    }

}

</style>
