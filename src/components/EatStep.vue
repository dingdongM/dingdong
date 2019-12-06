<!--
 * @Author: your name
 * @Date: 2019-11-29 16:35:13
 * @LastEditTime: 2019-12-04 23:55:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\dingdong\src\components\EatStep.vue
 -->
<template>
    <div class="box">       
        <h1><i class="iconfont icon-canpan"></i>步骤</h1>
        <ul>
            <li v-for="(itme,index) in $store.state.infos.step" :key="index">
                <h5>步骤{{index+1}}<span>/{{$store.state.infos.step.length}}</span></h5>
                <p>{{itme.eachcontent}}</p>
            </li>
        </ul>
        <div>
            <img src="static/img/bottom.jpg" alt="">          
        </div>
    </div>
</template>
<script>
export default {
    props:["detailname"],
    data() {
        return {
        }
    },
    created(){

    }
}
</script>
<style lang="scss" scoped>
    .box{
        h1{
            width: 3.63rem;
            height: 0.29rem;
            margin-top:10px;
            border-bottom: 1px dashed #c4c3c3;
            font-size: 0.14rem;
            margin-left: 10px;
        }
        ul{
           width: 100%;
           background: white; 
           margin-top: 8px;
           overflow:hidden;
           li{
                 margin-top: 0.22rem;
                 margin-bottom: 0.2rem;
                h5{
                    font-size: 14px;
                    line-height: 14px;
                    margin-bottom: 12px;
                    color: #1e1e1e;
                    span{
                        color: #919191;
                    }
                }
                p{
                    font-size: 12px;
                    line-height: 12px;
                }
            }
        }
        div{
            width: 100%;
            height:1rem;
            background: #efeef3;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom:0.44rem;
        }
    }      
</style>
