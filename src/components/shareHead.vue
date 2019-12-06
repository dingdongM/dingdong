<!--
 * @Author: your name
 * @Date: 2019-12-04 15:09:17
 * @LastEditTime: 2019-12-05 17:10:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day14d:\dingdong\src\components\shareHead.vue
 -->
<template>
    <div class="box">
        <div class="content">
            <div class="fanhui">
                <router-link to="/"><i class="iconfont icon-fanhui" id="back"></i></router-link>
            </div>
            <div class="head">    
                <img src="static/img/userimg.jpg" alt="">
                <span>sunrise</span>
            </div> 
        </div>
    </div>           
</template>
<script>
export default {
    data() {
      return {
      }
   },
}
</script>
<style lang="scss" scoped>
.box{
    width: 100%;
    height: 1.5rem;   
    background: #dcdcdc;
    .content{
        width: 100%;       
        background:#ffffff;
        border-bottom: 1px solid #f0f0f0;
        .fanhui{
            width: 3.53rem;
            height: 0.4rem;
            margin: 0 auto;
            line-height: 0.4rem;
            font-size: 0.1rem;
            padding-left: 0.05rem;       
            background:#ffffff;
        }
        .head{
            width: 3.53rem; 
            padding-left: 0.05rem;
            height: 1rem;
            margin: 0 auto;
            display: flex;       
            background:#ffffff;
            img{
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 50%;
                border: 1px solid rgb(209, 207, 207);
            }
            span{
                font-size: 0.14rem;
                margin-top: 0.6rem;
            }
        }
    }
}                
</style>
