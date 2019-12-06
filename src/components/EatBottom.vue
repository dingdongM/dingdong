<!--
 * @Author: your name
 * @Date: 2019-11-29 15:35:21
 * @LastEditTime: 2019-12-06 11:24:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\dingdong\src\components\EatBottom.vue
 -->
<template>
    <div class="box" @click="addfavorite">
        <i class="iconfont icon-addFavorite" :class="{colorGreen:shoucang}"></i>
        <span id="changeContent">{{content}}</span>
        <!-- <span display="none">{{id}}</span> -->
    </div>     
</template>
<script>
import axios from "axios"
export default {
    name:"EatBottom",
    data() {
        return {
            shoucang:false,
            content:"",
        }
    },
    // updated(){
    //             console.log(this.$store.state.infos.id);
    //             axios.get('http://localhost:3000/addfavorite?id='+this.$store.state.infos.id)
    //             .then(res=>{  
    //                 console.log("查询id")   
    //                 console.log(this.$store.state.infos.id)            
    //                 if(res.status=="200"){
    //                     console.log("查询结果")
    //                     console.log(res.data)
    //                     document.getElementById("changeContent").innerHTML="已收藏"
    //                     document.getElementById("favorite").style.color="#52cd75"
    //                 }else{
    //                     document.getElementById("changeContent").innerHTML="收藏"
    //                     document.getElementById("favorite").style.color="#4f4f4f"
    //                 }
    //             })
    //             .catch(err=>console.log(err))

    //     },
    computed:{
        id:function(){     //此处的id是自定义的变量名
             return this.$store.state.infos.id;
        }
    },
    watch:{
        id:function (a){      //id是删除的computed里面的属性，传入的是id的变化后的值
            axios.get('http://10.35.161.8:3000/addfavorite?id='+a)
                .then(res=>{  
                    console.log("查询id")   
                    console.log(a)            
                    if(res.status=="200"&&res.data.length!=0){
                        console.log("查询结果")
                        console.log(res.data)         
                        this.shoucang=true
                        this.content="已收藏"
                    }else{
                        this.shoucang=false
                        this.content="收藏"
                    }
                })
                .catch(err=>console.log(err))
        }
    },
    methods:{
        addfavorite:function(){
            if(this.shoucang==false){
                var newproduct={}
                newproduct.id=this.$store.state.infos.id
                newproduct.detailname=this.$store.state.infos.detailname
                console.log(newproduct)
                axios.post('http://10.35.161.8:3000/addfavorite',newproduct)
                .then(res=>{
                    if(res.status=="201"){
                        this.shoucang=true
                        this.content="已收藏"
                    }
                    

                })
                .catch(err=>console.log(err))

            }else{
                console.log(this.content)
                console.log("删除id")
                console.log(this.id)
                axios.delete('http://10.35.161.8:3000/addfavorite/'+this.id)
                .then(
                    res=>{
                        console.log(res)
                        if(res.status==200){
                            this.shoucang=false;
                            this.content="收藏"
                        }
                    }
                )
                .catch(err=>console.log(err))
            }

        }

    }
}
</script>
<style lang="scss"scoped>
    .box{
        width: 100%;
        height: 0.44rem;
        background: #e0e0e0;
        font-size: 13px;
        color: #4f4f4f;
        line-height: 0.44rem;
        .colorGreen{
            color:#52cd75;
        }
    }
            
</style>
