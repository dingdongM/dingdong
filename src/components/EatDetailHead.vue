<!--
 * @Author: your name
 * @Date: 2019-11-28 19:34:56
 * @LastEditTime: 2019-12-02 14:49:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\dingdong\src\components\EatDetailHead.vue
 -->
<template>
    <div class="box">
        <div>
            <div style="display:none">{{top}}</div>
            
            <router-link to="/"><i class="iconfont icon-fanhui"></i></router-link>
            <span :class="{'show':isshow}">{{$store.state.infos.detailname}}</span>
            <i class="iconfont icon-fenxiang" id="fenxiang"></i>
            <i class="iconfont icon-gouwuche"></i>
        </div>
        <p :class="{'pshow':isshow}">
          <a href="#material">食材</a>  
          <a href="#step">步骤</a>
        </p>
    </div>           
</template>
<script>

export default {
    props:['top','detailname'],
    name:"EatDetailHead",
    data() {
        return {
            isshow:false,
            product:{}
        }
    },
    methods:{
        isdisplay:function(){
            if(this.top>100){                
                this.isshow=true
            }else{
                this.isshow=false
            }
        }
        
    },
    created(){
    },
    updated(){
        this.isdisplay()   
        // this.product=this.$store.state.infos  
    }
}
</script>
<style lang="scss" scoped>

.box{
    width: 100%;
    height: 0.71rem;
    div{
        width: 3.4rem;
        height: 0.39rem;
        line-height: 0.39rem;
        font-size: 0.16rem;
        margin-left: 0.17rem;
        span{
            font-weight: bold;
            margin-left: 0.96rem;
            margin-right: 0.6rem;
            visibility: hidden;
        }
        .show{
            visibility: visible;
        }
        #fenxiang{
            margin-right: 0.24rem;
        }
    }
    p{
        font-size: 12px;
        height: 0.32rem;
        line-height: 0.32rem;
        display: flex;
        justify-content: space-around;
        visibility: hidden;
        a{
            color: black;
        }

    }
    .pshow{
        visibility: visible;
    }
}
            
</style>
