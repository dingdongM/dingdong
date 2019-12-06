/*
 * @Author: your name
 * @Date: 2019-11-14 17:53:23
 * @LastEditTime: 2019-12-05 16:35:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\store\index.js
 */
import Vue from 'vue'
import VueX from 'vueX';
Vue.use(VueX)

let store = new VueX.Store({
    state: {
        navs:[],
        myFooterCls:[
			true,
			false,
			false,
			false,
			false
		]
    },
    mutations:{
        getdatas(state,navs){
            // console.log(navs)
            state.navs=navs
            // console.log(navs[0])
            // console.log(navs[1].list)
        },
        myFooterChange(state,index){
			if(index<0 || index>state.myFooterCls.length-1){
				return false;
			}
			state.myFooterCls.forEach((item,index,arr)=>{
				arr[index] = false;
			});
			state.myFooterCls[index] = true;
		}
    },
    actions:{
       getdatas(context){
            fetch('http://localhost:3000/nav')
            .then(res=>{
                return res.json()
            })
            .then(data=>{
                context.commit('getdatas',data)
            })
       },
    }
})
export default  store;

