<template>
	<div class="Myfooter">
        <ul>
			<li>
				<router-link to="/IndexPage">
					<div :class="{'green':myFooterCls[0]}" @click="clickFooter(0)">
						<i class="iconfont icon-02"></i>
						<span>首页</span>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/ClassifyPages">
					<div :class="{'green':myFooterCls[1]}" @click="clickFooter(1)">
						<i class="iconfont icon-fenlei"></i>
						<span>分类</span>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/EatwhatPage">
					<div :class="{'green':myFooterCls[2]}" @click="clickFooter(2)">
						<i class="iconfont icon-yiqichifan"></i>
						<span>吃什么</span>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/ShoppcarPages">
					<div :class="{'green':myFooterCls[3]}" @click="clickFooter(3)">
						<i class="iconfont icon-gouwuche"></i>
						<span>购物车</span>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/MyCenterPage">
					<div :class="{'green':myFooterCls[4]}" @click="clickFooter(4)">
						<i class="iconfont icon-wode"></i>
						<span>我的</span>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Myfooter',
	data() {
		return {}
	},
	computed:{
		myFooterCls(){
			return this.$store.state.myFooterCls;
		}
	},
	methods:{
		clickFooter(index){
			this.$store.commit('myFooterChange',index);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Myfooter{
    width: 100%;
	height: .5rem;
	font-size: 12px;
	border-top: 1px solid #f5f5f5;
	text-align: center;
    background: white;
    position: fixed;
	bottom: 0;
	color: #979797;
}
ul{
	display: -webkit-flex;
	justify-content: space-around;
}
i{
	display: block;
}
.iconfont{
	font-size: .2rem;
	margin-top: 5px;
}

/* 绿色 */

.green i,.green span{
	color: #43bf6a;
}

</style>