<!--
 * @Author: your name
 * @Date: 2019-12-04 15:50:04
 * @LastEditTime: 2019-12-06 17:35:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day14d:\dingdong\src\components\shareContent.vue
 -->
<template>
    <div class="box">
        <div class="title">
            <div class="titlecontent">
                <span>发布编号</span>
                <input type="text" v-model="id">
            </div>
            <div class="titlecontent">
                <span>标题</span>
                <input type="text" v-model="detailname">
            </div>
        </div>
        <div class="step">
            <div class="stepcontent">
                <p>制作步骤</p>
                <div>
                    <ol class="list">
                        <li v-for="(item,index) in arr" :key="index">
                            <div class="eachstep">
                                <div contenteditable="true" @blur="currentContent($event,index)">{{arr[index].index}}</div>       
                            </div>
                        </li>
                        <input type="button" value="添加下一步 " class="clickfunction" @click="next">
                        <!-- <div class="clickfunction">
                            <span @click="next">+</span>
                        </div>                             -->
                    </ol>
                </div>
            </div>
            
        </div>
        <div class="imgcontent">
            <p>
				上传图片
				<i class="iconfont icon-zhaoxiangji" @touchstart  ="captureImage"></i>
				<i class="iconfont icon-tupian"  @touchstart  ="getImg"></i>
			</p>
            <div class="showimg">
            <img id="imgId" src="" alt="">
        </div>  
        </div>
        <div class="bottom">
            <input type="button" value="发表" @click="mysubmit">
        </div>
    </div>    
</template>
<script>
import axios from "axios"
var qiniu = require('qiniu-js')
export default {
    data() {
        return {
            // pathPhoto:"",
            id:"",
            detailname:"",           
            arr:[
                {
                    "eachtitle":"1"
                }
            ] 
        }
    },
    methods:{
        next:function(){
            this.arr.push({
               })
        },
        currentContent:function(e,index){
            let content = e.target.innerText
            this.arr[index].eachcontent=content
            console.log(this.arr)
        },
        mysubmit:function(){
            let newproduct={
                "id":this.id,
                "detailname":this.detailname,
                "src":this.pathPhoto,
                "userimg": "static/img/userimg.jpg",
                "username": "大辣椒",
                "material": [],
                "step":this.arr
            }
            console.log(newproduct)
            axios.post('http://10.35.161.8:3000/product',newproduct)
                .then(res=>{
                    if(res.status=="201"){
                        this.$router.push({path:'EatDetailPage',query:{detailname:this.detailname}})
                    }
                    

                })
            .catch(err=>console.log(err))
        },
        getImg:function(){
            // 从相册中选择图片
            console.log("从相册中选择图片:");
            window.plus.gallery.pick( function(path){
                console.log(path);
                document.getElementById("imgId").src=path;
                // this.pathPhoto=path
                // console.log(this.pathPhoto)
            }, function ( e ) {
                console.log( "取消选择图片" );
            }, {filter:"image"} );//过滤器，只要照片，默认是单张
        },
        captureImage:function (){
			console.log("aaa")
				var cmr = window.plus.camera.getCamera();//获取摄像头对象
				var res = cmr.supportedImageResolutions[2];//获取支持的分辨率，这里是第三个分辨率,直接使用supportenImageResolutions可以获取自己手机所支持的分辨率有多少种格式，返回值类型 string[]
				var fmt = cmr.supportedImageFormats[0];//JPG格式，
			
				cmr.captureImage( function( path ){//成功回调函数，获取路径
						alert( "拍照成功" );
		                //把保存在app目录下的照片显示在img标签里
						window.plus.io.resolveLocalFileSystemURL(path, function(entry) {
							 let pathPhoto = entry.toLocalURL();
                            document.getElementById("imgId").src=pathPhoto;
                            // var observable = qiniu.upload(file, key, token, putExtra, config)
                            // var subscription = observable.subscribe(observer) // 上传开始
                            // subscription.unsubscribe() // 上传取消
                            
						}, function(e) {
							console.log("出错了！");
						});
					},
					function( error ) {
						alert( "Capture image failed: " + error.message );
					},
					{resolution:res,format:fmt}//分辨率和格式，必填，就是上面获取到的。
				);
			}  
    }

}
</script>
<style lang="scss" scoped>
.box{
    width: 100%;
    height: 2rem;
    .title{
        background:#ffffff;
        .titlecontent{
            width: 3.58rem;
            height: 0.46rem;
            margin: 0 auto; 
            padding-left: 0.05rem;
            line-height: 0.46rem;
            font-size: 0.18rem;
            border-bottom: 1px solid #e4e3e3;
            span{
                font-weight: bold;
                font-size: 0.18rem;
            }
            input{
                outline: none;
                width: 2rem;
                border: none;
                font-size: 0.18rem;
                
            }
        }
    }
    .step{
        width: 100%;
        margin-top: 10px;
        background:#ffffff; 
        .stepcontent{
            width: 3.58rem;
            margin: 0 auto;
            font-size: 0.18rem;
            margin-bottom: 0.54rem; 
            // border-bottom: 1px solid #e4e3e3;
            p{
                font-size: 0.18rem;
                font-weight: bold;
                margin-bottom: 6px;      
            }
            div{
                ol{
                    margin-left: 0.2rem;
                    list-style-type:decimal;
                    li{
                        list-style-type:decimal;
                        font-size: 0.16rem;
                        .eachstep{
                            width: 3.2rem;
                            display: flex;
                            justify-content: space-between;
                            div{
                                outline: none;
                                font-size: 0.16rem;
                                width: 2.8rem;
                            }
                        }
                    }
                    .clickfunction{
                        width: 1.2rem;
                        height: 0.3rem;
                        margin-top: 14px;
                        border-radius: 12px;
                        outline: none;
                        border: none;
                        float:right;
                    }

                }
            }
        }
    }
    .imgcontent{
        width: 100%;   
        height: 1.2rem;
        border-top: 1px solid #e4e3e3;
        p{
            font-size: 0.18rem;
            font-weight: bold;
            margin-top: 10px;
            i{
			    font-size: 0.2rem;
			    margin-top: 0.5rem;
			    margin-right: 14px;  
			}
        }
        .showimg{
        width: 100%;
        clear: right;   
        height: 0.9rem;
        img{
            width: 0.9rem;
            height: 0.9rem;
        }
        .btn{
            float: right;
            height: 1rem;
        }
        }
            
    }
    .bottom{
        width: 100%;
        // text-align: center;
        input{
            width: 2rem;
            height: 0.4rem;
            border-radius: 6px;
            outline: none;
            border: none;
            margin-left: 0.86rem;
        }
    }

}          
</style>
