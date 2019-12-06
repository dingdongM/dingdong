<template>
	<div class="Hot">
        <header>
            <h2><span>|</span>热门产品</h2>
        </header>

		<!-- 分栏布局 -->
        <section>
            <aside v-for="(item,index) in list" :key="index">
                <div class="pic">
                    <img :src="item.goodsImg" alt="">
                </div>
                <div class="price">
                    <h2>{{item.goodsName}}</h2>
                    <p>
                        <i>￥<span>{{item.goodsPrice}}</span></i>
                        <b class="iconfont icon-gouwuche"></b>
                    </p>
                </div>
            </aside>
        </section>
	</div>
</template>

<script>

import axios from 'axios';

export default {
	name: 'Hot',
	data() {
		return {
            list:[]
        }
    },
    created(){
        axios.get('/hot')
        .then(res=>{
            this.list = res.data;
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Hot{
    width: 100%;
    background: white;
    margin-bottom: .5rem;
}
header{
    width: 90%;
    margin: 0 auto;
    padding: .15rem 0;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
}
header{
    display: -webkit-flex;
    -webkit-align-items: center;
    font-size: .14rem;
}
header h2{
    margin-right: 15px;
}
header h2 span{
    color: #3cb963;
    margin-right: 10px;
}

/* 分栏布局 */
section{
    width: 90%;
    margin: 0 auto;
    font-size: 12px;
    column-count: 2;
}
aside{
    border: 1px solid #eeeeee;
    border-radius: 5px;
    margin-bottom: 12px;
}
.pic{
    /* width: 70%; */
    text-align: center;
    margin-top: 6px;
}
.price{
    width: 80%;
    margin: 0 auto;
    padding-bottom: .15rem;
}
.price h2{
    font-weight: 500;
    font-size: 12px;
    margin-top: 12px;
    margin-bottom: .15rem;
}
.price p{
    display: -webkit-flex;
    -webkit-justify-content: space-between;
}
.price i{
    font-style: normal;
    color: #fe696a;
}
.price i span{
    font-size: .16rem;
}
.price b{
    display: block;
    width: .25rem;
    height: .25rem;
    border-radius: 50%;
    background: #43bf6a;
    color: white;
    text-align: center;
    line-height: .25rem;
}
img{
    width: 70%;
}

</style>
