<!--
 * @Author: 潘金红
 * @Date: 2019-11-28 15:11:34
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-30 16:28:09
 * @Description: 
 -->
<style scoped lang="scss">
.xihuan{
    width:94%;
    margin:0 auto;
    .xihuan-title{
        height:.4rem;
        background-color:#a9a9a9;
        line-height: .4rem;
        text-align: center;
        background:url();
        position: relative;
        hr{
            position: absolute;
            left:0;
            top:50%;
            width:100%;
            border-left:none;
        }
        span{
            position: absolute;
            left:50%;
            top:50%;
            transform: translate(-50%,-50%);
            z-index: 1;
            background-color:#f5f5f5;
            em{
                font-size:12px;
            }
        }
    }
    .xihuan-list{
        ul{
            display:flex;
            flex-wrap:wrap;
            justify-content: space-between;
            li{
                width:48%;
                height:2.9rem;
                border-radius: 5px;
                margin-bottom:10px;
                background-color: #fff;
                position: relative;
                img{
                    width:100%;
                    height:1.8rem;
                    border-radius: 5px;
                    border-bottom-left-radius:0; 
                    border-bottom-right-radius:0; 
                }
                #goodsName{
                    box-sizing: border-box;
                    display:inline-block;
                    width:100%;
                    padding:0 10px;
                    line-height:.3rem;
                }
                .price{
                    position: absolute;
                    left:0;
                    bottom:10px;
                    padding:0 10px;
                    .used-price{
                        color:#f60000;
                        em{
                            font-size:.16rem;
                        }
                    }
                    #used-price{
                        em{
                            font-size:.16rem;
                        }
                    }
                    .del{
                        font-size:12px;
                        color:#a9a9a9;
                        text-decoration:line-through;
                        em{
                            font-size:12px;
                        }
                    }
                    .spePrice{
                        position: absolute;
                        left:10px;
                        top:-.25rem;
                        color:#f60000;
                        font-size:10px;
                        padding:2px 4px;
                        border:1px solid #f60000;
                        border-radius:15px/15px;
                    }
                    .green{
                        font-size:12px;
                        color:#43cb5d;
                        line-height: .12rem;
                        span{
                            background-color:#43cb5d;
                            color:#fff;
                            border-radius:3px/3px;
                            padding:0 1px;
                        }
                    }
                }
                .iconfont{
                    width:.2rem;
                    height:.2rem;
                    position: absolute;
                    right:10px;
                    bottom:10px;
                    padding:8px 7px 7px 9px;
                    border-radius:50%;
                    background-color:#43cb5d;
                    color:#fff;
                }
            }
        }
    }
}
</style>
<template>
<div class="xihuan">
    <div class="xihuan-title">
        <hr>
        <span><em>◆</em> {{title}} <em>◆</em></span>
    </div>
    <div class="xihuan-list">
        <ul>
            <li v-for="(item,index) in xihuan" :key="index">
                <img :src="item.img" :alt="item.name">
                <span id="goodsName">{{item.name}}</span>
                <div class="price">
                    <span v-show="item.specialPrice" class="spePrice">特价</span>
                    <span class="used-price" v-show="item.specialPrice">￥<em>{{item.specPrice}}</em></span>
                    <span class="used-price" :class="{del:item.specialPrice}">￥<em>{{item.price}}</em></span>
                    <p v-show="item.greenCard" class="green" :class="{del:item.specialPrice}">￥<em>{{item.cardPrice}}</em>
                        <span>绿卡价</span>
                    </p>
                </div>
                <span class="iconfont icon-gouwuche1"></span>
            </li>
        </ul>
    </div>
</div>        
</template>
<script>
import axios from "axios"
import {url} from "../../static/js/api"
export default {
    name:"CaiNiXiHuan",
    props:["title"],
    data() {
        return {
            xihuan:[]
        }
    },
    created(){
        axios({
            method:"get",
            url:"/xihuan"
        })
        .then(res=>{
            this.xihuan=res.data;
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>
