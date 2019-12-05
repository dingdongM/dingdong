
import Vue from 'vue';
import VueX from 'vueX';

Vue.use(VueX)

export default new VueX.Store({
    state:{
		myFooterCls:[
			true,
			false,
			false,
			false,
			false
		]
	},
	mutations:{
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
	actions:{}
})