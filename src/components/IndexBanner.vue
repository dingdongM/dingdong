<template>
	<div class="IndexBanner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(pic,index) in pics" :key="index">
                    <img :src="pics[index]">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
	</div>
</template>

<script>

import Swiper from 'swiper';
import axios from 'axios';

export default {
	name: 'IndexBanner',
	data() {
		return {
            pics:[]
        }
	},
    created(){
        axios.get('/banner')
        .then(res=>{
            this.pics = res.data;
            this.$nextTick(function(){
                //此时已经有dom了。
                var mySwiper = new Swiper ('.swiper-container', {
                    loop: true,
                    effect : 'slide',
                    autoplay : {
                        delay:3000,
                        disableOnInteraction: false,//用户操作swiper之后，是否禁止autoplay。默认为true：停止。
                    },
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
                    }
                })
            })
        })
        .catch(err=>{
            console.log(err);
        })

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("https://unpkg.com/swiper/css/swiper.css");
.IndexBanner{
    width: 100%;
}
.swiper-container{
	width: 90%;
	height: 1.4rem;
	border-radius: 12px;
}
img{
	width: 100%;
	height: 100%;
}
.swiper-pagination{
    bottom: -12px;
}

</style>
