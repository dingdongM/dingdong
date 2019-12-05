<template>
	<div class="SearchHead">

		<!-- 搜索框 -->
        <header>
            <b class="el-icon-back" @click="back"></b>
			<div>
				<i class="el-icon-search"></i>
				<input type="text" placeholder="玉米" v-model="searchText"
					 @click="displayDiv" @input="content">
			</div>
			<span>搜索</span>
        </header>

		<!-- 历史记录 -->
		<div class="note" v-show="displayHistory">
			<p>
				<span>历史搜索</span>
				<i class="el-icon-delete" @click="delHistory"></i>
			</p>
			<ul>
				<li v-for="(item,index) in historyList" :key="index">{{item.val}}</li>
			</ul>
		</div>

		<!-- 热门产品 -->
		<div class="find" v-show="displayHot">
			<p>热门发现</p>
			<ul>
				<li>鸡蛋</li>
				<li>葱</li>
				<li>食用油</li>
				<li>鸡蛋</li>
				<li>鸡蛋</li>
				<li>鸡蛋</li>
				<li>鸡蛋</li>
				<li>鸡蛋</li>
				<li>鸡蛋</li>
				<li>鸡蛋</li>
			</ul>
		</div>

		<!-- 分页 -->
		<div class="moreDetai" v-if="searchList.length>0">
			<ul>
				<li v-for="(item,index) in searchList" :key="index">
					<span @click="search(item.name,item.id)">{{item.name}}</span>
					<!-- <router-link :to="'/SearchDetail/'+item.name">{{item.name}}</router-link> -->
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'SearchHead',
    data() {
      return {
        searchText:"",
        searchList:[],
        displayHot:true,
        displayHistory:true,
        historyList:{},
        myTimer:null
      }
    },
    created(){

      if(localStorage.length == 1 || localStorage.length == 0){
        this.displayHistory = false;
      }

      var arr = [];
      var len = localStorage.length;
      for(var i=0;i<len-1;i++){
        // 获取key 索引从0开始
        var getKey = localStorage.key(i);
        // 获取key对应的值
        var getVal = localStorage.getItem(getKey);
        // 放进数组
        arr[i] = {
          'key': getKey,
          'val': getVal,
        }
        // console.log(arr[i]);
        // console.log(arr[i].val);
      }
      // console.log(arr);
      this.historyList = arr;
    },
    methods:{
        back(){
          this.$router.back(-1);
        },

        //带参数查询
        content(){
          
          //事件防抖
          if(this.myTimer != null){
          		window.clearTimeout(this.myTimer);
          }

          this.myTimer = setTimeout(()=>{
              axios.get('/search?name_like='+this.searchText)
              .then(res=>{
                this.searchList = res.data.list;
                // console.log(this.searchList);
              })
              .catch(err=>{
                console.log(err);
              });
          },1500);

        },

        //历史记录隐藏与显示
        displayDiv(){
          this.displayHot = false;
          this.displayHistory = false;
        },

        //删除历史记录
        delHistory(){
          localStorage.clear();
          this.historyList = "";
        },

        //分页跳转
        search(name,id){
          this.$router.push({path:'/SearchDetail',query:{name:name}});

          localStorage.setItem(id,name);

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.SearchHead{
	width: 100%;
}

/* 搜索框 */
header{
    width: 90%;
	margin: 0 auto;
	padding: .08rem 0;
	display: -webkit-flex;
	-webkit-justify-content: space-between;
	-webkit-align-items: center;
}
header b{
	font-size: .18rem;
	font-weight: 800;
	color: #81838e;
}
header span{
	font-size: 14px;
}
header div{
	width: 2.66rem;
	height: .32rem;
	background: #f5f5f5;
	border-radius: .16rem;
	display: -webkit-flex;
	-webkit-align-items: center;
}
header div i{
	font-size: .14rem;
	margin-left: .15rem;
}
header div input{
	margin-left: .1rem;
	border: 0;
	outline: 0;
	background: #f5f5f5;
}

/* 历史记录note，热门产品find */
.find,.note{
	width: 90%;
	margin: 0 auto;
	font-size: 12px;
}
.find p,.note p{
	padding: .23rem 0;
	display: -webkit-flex;
	-webkit-justify-content: space-between;
	-webkit-align-items: center;
}
.find p i{
	font-size: .2rem;
	color: #999999;
}
.find ul,.note ul{
	display: -webkit-flex;
	flex-wrap: wrap;
}
.find ul li,.note ul li{
	padding: 4px 6px;
	border: 1px solid #dcdcdc;
	border-radius: .11rem;
	letter-spacing: 3px;
	color: #666;
	margin-right: .08rem;
	margin-bottom: .1rem;
}
.find li:nth-of-type(1),.find li:nth-of-type(2),.find li:nth-of-type(3){
	border: 1px solid red;
}

/* 分页 */
.moreDetai{
	width: 100%;
	font-size: 12px;
}
.moreDetai ul{
	width: 90%;
	margin: 0 auto;
}
.moreDetai ul li{
	height: .5rem;
	line-height: .5rem;
	border-bottom: 2px solid #f5f5f5;
	letter-spacing: 2px;
}

</style>
