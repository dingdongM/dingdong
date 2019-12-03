<!--
 * @Author: your name
 * @Date: 2019-11-28 21:02:52
 * @LastEditTime: 2019-12-02 14:50:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\dingdong\src\components\EatMaterial.vue
 -->
<template>
<div class="box">
    <h1><i class="iconfont icon-canpan"></i>食材</h1>
    <ul>
        <li v-for="(item,index) in $store.state.infos.material" :key="index">
            <p>·{{item.main}}</p>
            <ul>
                <li v-for="(list,index) in item.mainlist" :key="index">
                    <span class="img"><img :src="list.producturl" alt=""></span>
                    <span class="content">
                        <h5>{{list.productname}}</h5>
                        <p><span>￥{{list.productprice}}</span><i class="iconfont icon-gouwuche"></i></p>
                    </span>
                </li>
            </ul>
        </li>
    </ul>
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
    width: 100%;
    h1{
        width: 3.63rem;
        height: 0.29rem;
        border-bottom: 1px dashed #c4c3c3;
        font-size: 0.14rem;
        margin-left: 10px;
    }
    ul{
        width: 100%;
        li{
            width: 100%;;
            height: 1.28rem;
            
            p{  
                font-size: 14px;
                height: 0.43rem;
                line-height: 0.43rem;
                font-weight: bold;
            }
            ul{
                width: 100%;
                height: 0.85rem;                 
                display: flex;
                flex-wrap: nowrap;
                overflow-x: auto;
                li{
                    width: 2.67rem;
                    height: 0.83rem;   
                    border:1px solid #919191;
                    border-radius: 10px;
                    margin-right: 8px; 
                    display: flex; 
                    .img{
                        width: 0.85rem;
                        height: 0.8rem;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                .content{
                    width: 1.82rem;
                    h5{
                        height: 0.3rem;
                        line-height: 0.3rem;
                        font-size: 0.15rem;
                    }
                    p{  
                        font-size: 12px;
                        line-height: 12px;
                        width: 1.68rem;
                        height: 0.25rem;
                        padding-top: 0.25rem;
                        padding-right: 12px;
                        span{
                           color: red;  
                           float: left;
                        //    margin-right: 1.1rem;
                        }
                        i{
                            color: #51af7b;
                            float: right;
                        }
                    }
                }
                    
                }
                
            }

        }

    }
}          
</style>
