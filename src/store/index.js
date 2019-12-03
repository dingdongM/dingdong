/*
 * @Author: your name
 * @Date: 2019-11-30 20:06:08
 * @LastEditTime: 2019-12-02 17:01:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\dingdong\src\store\index.js
 */
import VueX  from 'vueX'
import Vue from 'vue'
Vue.use(VueX)
import axios from 'axios'
export default new VueX.Store({
    state:{
        infos:[]
    },
    mutations:{
        getInfo(state,infos){
            state.infos=infos
            // console.log(state.infos)
        }
    },
    actions:{
        getInfo(context,name){
            axios.get('http://localhost:3000/product?detailname='+name)
                .then(res=>{ 
                    context.commit("getInfo",res.data[0])
                    console.log("请求结果")
                    console.log(res.data)
                })
                .catch(err=>{
                    console.log("错误"+err);
                }); 
        }
        
        
    }
})