<!--
 * @Author: your name
 * @Date: 2019-11-28 19:34:56
 * @LastEditTime: 2019-12-02 14:50:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\dingdong\src\components\EatDetailHead.vue
 -->
<template>
    <div class="box">
        <div>
            <img :src="$store.state.infos.src" alt="">
        </div>
        <div class="text">
            <h5>{{$store.state.infos.detailname}}</h5>
            <div >
                <img :src="$store.state.infos.userimg" alt="">
                <p>{{$store.state.infos.username}}</p>
            </div>
        </div>
    </div>           
</template>
<script>
import axios from 'axios'
export default {
    props:['detailname'],
    name:"EatDetailContent",
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
    width: 100%;
    height: 3.76rem;
    div{
        width: 100%;
        height: 2.64rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .text{
        width: 100%;
        height: 1.1rem;
        // background: white;
        overflow: hidden;
        text-align: center;
        h5{
            font-size: 0.19rem;
            line-height: 0.19rem;
            font-weight: bold;
            margin: 0.23rem 0 0.15rem 0;
        }
        div{
            width: 100%;
            display: flex;
            justify-content: center;
            img{
                width: 0.17rem;
                height: 0.17rem;
                border-radius: 50%;
                // margin: 0 auto;
            }
            p{
                font-size: 12px;
            }
        }
    }
}
            
</style>
