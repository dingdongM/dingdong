<!--
 * @Author: your name
 * @Date: 2019-11-26 18:00:29
 * @LastEditTime: 2019-12-02 17:40:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\dingdong\src\pages\eatwhat.vue
 -->
<template>
<div>
    <EatDetailHead :detailname="detailname" :top="scrollTop" id="head" :class="{'head':isfixed}"></EatDetailHead>
    <EatDetailContent :detailname="detailname"></EatDetailContent>
    <EatMaterial id="material" :detailname="detailname"></EatMaterial>
    <EatStep id="step" :detailname="detailname"></EatStep>   
    <EatBottom class="bottom"></EatBottom>
</div>
</template>
<script>
import EatDetailHead from "../components/EatDetailHead"
import EatDetailContent from "../components/EatDetailContent"
import EatMaterial from "../components/EatMaterial"
import EatBottom from "../components/EatBottom"
import EatStep from "../components/EatStep"

export default {
    props:['detailname'],
    name:'EatDetailPage',
    data() {
        return {
            isfixed:false,
            scrollTop:0
        }
    },
    created(){
        this.$store.dispatch('getInfo',this.detailname)    
    },
    components:{EatDetailHead,EatDetailContent,EatMaterial,EatBottom,EatStep},
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
        handleScroll:function(){
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // console.log(this.scrollTop)
            if (this.scrollTop > 200) {
                this.isfixed = true
                // console.log(this.isfixed)
            } else {
                this.isfixed = false
            }
        }
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
    
}
</script>
<style lang="scss" scoped>
#head{
    position: fixed;
    left: 0;
    top:0;   
}
.head{
    background: white;
}
.bottom{
    position: fixed;
    left: 0;
    bottom: 0;
}
</style>
