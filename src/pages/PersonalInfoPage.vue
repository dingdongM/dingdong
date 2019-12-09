<style scoped lang="scss">
$color2:#666;
.personalInfo{
    width:100%;
    height:100%;    
    background-color:#f5f5f5;
    .back{
        height:.5rem;
        display:flex;
        align-items:center; 
        padding-left:10px;
        background-color: #fff;
        .iconfont{
            color:$color2;
            font-size:.2rem;
        }
        span:last-child{
            margin-left:.15rem;
        }
    }
    .about{
        margin-top:10px;
        box-sizing: border-box;
        padding-left:10px;
        background-color:#fff;
        div:first-child{
            height:.7rem;
        }
        >div{
            height:.5rem;
            display:flex;
            align-items: center;
            justify-content: space-between;
            background-color:#fff;
            margin:0;
            border-bottom:1px solid #e8e8e8;
            .sex{
                span:first-child{
                    color:#afafaf;
                }
            }
            .birthday{
                span:first-child{
                    color:#afafaf;
                }
            }
            .wechat{
                span:first-child{
                    color:#afafaf;
                }
            }
            p{
                margin-right:10px;
                display:flex;
                align-items: center;
                img{
                    width:.6rem;
                    height:.6rem;
                    border-radius:50%;
                }
                .iconfont{
                    color:#afafaf;
                }
            }
            #getBirthday{
                width:100%;
                display:flex;
                justify-content: space-between;
                align-items: center;
                padding-right:10px;
            }
            #drawer div{
                height:.5rem;
                text-align: center;
                line-height:.5rem;
                border-bottom:1px solid #cecece;
                margin-right:0;
            }
            #headBtn{
                display:flex;
                width:100%;
                height:100%;
                justify-content: space-between;
            }
        }
        >div:last-child{
            border-bottom:none;
        }
        >div:first-child{
            position: relative;
        }
        #headBtn{
            position: absolute;
            width:100%;
            height:100%;
            left:0;
            top:0;
            opacity: 0;
        }
    }
}
</style>
<template>
<div class="personalInfo">
    <div class="back">
        <span class="iconfont icon-zuojiantou1" @click="back()"></span>
        <span>个人资料</span>
    </div> 
    <div class="about">
        <div>
            <span>头像</span>
             <p>
                <img src="../assets/img/headimg.jpg" alt="">
                <span class="iconfont icon-qianjin3"></span>
            </p>
            <el-button @click="drawer = true" type="primary" id="headBtn"></el-button>
            <el-drawer
            id="drawer"
            :visible.sync="drawer"
            :direction="direction"
            >
            <!-- :before-close="handleClose" -->
            <div @click="beginCamera()">点击拍照</div>
            <div @click="selFile()">本地文件</div>
            </el-drawer>
        </div>
        <div @click="updateName()">
            <span>昵称</span>
            <p>
                <span>{{data.name}}</span>
                <span class="iconfont icon-qianjin3"></span>
            </p>
        </div>
        <div @click="selSex()"> 
            <span>性别</span>
            <p class="sex">
                <span v-show='(data.sex==="")'>请选择</span>
                <em v-show='!(data.sex==="")'>{{data.sex}}</em>
                <span class="iconfont icon-qianjin3"></span>
            </p>
        </div>
        <div @click="updatedBirthday()">
            <span v-show='!(data.birthday==="")'>生日</span>
            <p class="birthday" v-show='!(data.birthday==="")'>
                <span v-show='(data.birthday==="")'>生日</span>
                <em v-show='!(data.birthday==="")'>{{data.birthday}}</em>
                <span class="iconfont icon-qianjin3"></span>
            </p>
            <div class="block" v-show='(data.birthday==="")' id="getBirthday">
                <span class="demonstration">点击选择您的生日</span>
                <el-date-picker
                ref="picker"
                id="picker"
                v-model="value1"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
            </div>
        </div>
        <div>
            <span>手机</span>
            <p>
                <span>{{splitPhone}}</span>
                <span class="iconfont icon-qianjin3"></span>
            </p>
        </div>
        <div>
            <span>绑定微信号</span>
            <p class="wechat">
                <span>立即绑定</span>
                <span class="iconfont icon-qianjin3"></span>
            </p>
        </div>
    </div>
</div>      
</template>
<script>
import axios from "axios"
import {Indicator,Toast,MessageBox} from "mint-ui"
export default {
    name:"PersonalInfoPage",
    data() {
        return {
            drawer: false,
            direction: 'btt',
            data:{},
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
            },
            value1:this.$refs.picker,
            year:new Date().getFullYear(),
            month:Number(new Date().getMonth())+1,
            day:new Date().getDate(),
        }
    },
    watch:{
        value1:function(){
            if(this.value1!==""){
                Indicator.open({
                    text: '正在修改...',
                    spinnerType: 'fading-circle'
                })
                let getDate=(this.value1.getDate())>9?this.value1.getDate():"0"+this.value1.getDate()
                let obj={
                    id:this.data.id,
                    phone: this.data.phone,
                    name: this.data.name,
                    payPass:this.data.payPass,
                    sex: this.data.sex,
                    headIcon: this.data.headIcon,
                    birthday: this.value1.getFullYear()+"-"+(Number(this.value1.getMonth())+1)+"-"+getDate,
                    lastNameDate:this.data.lastNameDate,
                    wallet:this.data.wallet
                }
                axios.put(`/user/${this.data.id}`,obj)
                .then(res=>{
                    if(Object.keys(res.data).length>0){
                        Indicator.close();
                        Toast({
                            message: '修改成功',
                            position: 'center',
                            duration: 1000
                        });
                        this.data=res.data;
                    }else{
                        Indicator.close();
                        Toast({
                            message: '修改失败，请检查网络连接',
                            position: 'center',
                            duration: 1000
                        });
                    }
                })
            }
        }
    },
    computed:{
        splitPhone(){
            let phoneNum=this.data.phone;
            let first=phoneNum.substring(0,3);
            let last=phoneNum.substring(7);
            let str=first+"****"+last;
            return str;
        }
    },
    methods:{
        beginCamera(){
            this.captureImage();
        },
        selFile(){
            this.getImg();
        },
        back(){
            this.$router.go(-1);
        },
        updateName(){
            if(this.data.lastNameDate!==""){
                if(this.year==this.data.lastNameDate.substring(0,4)){
                    if(this.month==this.data.lastNameDate.substring(5,7)){
                        Toast({
                            message: '修改失败，上次修改时间为'+this.data.lastNameDate+"一个月内只能修改一次",
                            position: 'center',
                            duration: 2000
                        });
                        return;
                    }
                    if(Math.sqrt(this.month-this.data.lastNameDate.substring(5,7))==1){
                        let days=Number(this.data.lastNameDate.substring(8));
                        if(Number(this.day)+Number(30-days)<=29){
                            Toast({
                                message: '修改失败，上次修改时间为'+this.data.lastNameDate+"一个月内只能修改一次",
                                position: 'center',
                                duration: 2000
                            });
                            return;
                        }
                    }
                }
                this.updateNameFun();
            }
            this.updateNameFun();
        },
        updateNameFun(){
            MessageBox.prompt('请输入昵称，一个月内只能修改一次').then(({ value, action }) => {
                console.log(value);
                if(value===null){
                    Toast({
                        message: '请输入昵称',
                        position: 'center',
                        duration: 2000
                    });
                    return;
                }
                Indicator.open({
                    text: '修改中...',
                    spinnerType: 'fading-circle'
                })
                let obj={
                    id:this.data.id,
                    phone: this.data.phone,
                    payPass: this.data.payPass,
                    name: value,
                    sex: this.data.sex,
                    headIcon: this.data.headIcon,
                    birthday: this.data.birthday,
                    lastNameDate:""+this.year+"-"+this.month+"-"+this.day,
                    wallet:this.data.wallet

                }
                axios.put(`/user/${this.data.id}`,obj)
                .then(res=>{
                    if(Object.keys(res.data).length>0){
                        Indicator.close();
                        Toast({
                            message: '修改成功',
                            position: 'center',
                            duration: 2000
                        });
                        this.data=res.data;
                        localStorage.setItem("username",this.data.name)
                    }else{
                        Indicator.close();
                        Toast({
                            message: '修改失败，请检查网络连接',
                            position: 'center',
                            duration: 2000
                        });
                    }
                })
            });    
        },
        selSex(){
            MessageBox.prompt('请输入性别').then(({ value, action }) => {
                Indicator.open({
                    text: '修改中...',
                    spinnerType: 'fading-circle'
                })
                let obj={
                    id:this.data.id,
                    phone: this.data.phone,
                    name: this.data.name,
                    payPass: this.data.payPass,
                    sex: value,
                    headIcon: this.data.headIcon,
                    birthday: this.data.birthday,
                    lastNameDate:this.data.lastNameDate,
                    wallet:this.data.wallet
                }
                axios.put(`/user/${this.data.id}`,obj)
                .then(res=>{
                    if(Object.keys(res.data).length>0){
                        Indicator.close();
                        Toast({
                            message: '修改成功',
                            position: 'center',
                            duration: 2000
                        });
                        this.data=res.data;
                    }else{
                        Indicator.close();
                        Toast({
                            message: '修改失败，请检查网络连接',
                            position: 'center',
                            duration: 2000
                        });
                    }
                })
            });    
        },
        updatedBirthday(){
            this.data.birthday="";
        },
        //调取摄像头,实现拍照功能
        captureImage(){
            //获取摄像头对象
            let cmr=plus.camera.getCamera();
            //调用拍照功能
            let res = cmr.supportedImageResolutions[2];//拍照分辨率，第三种
            let fmt = cmr.supportedImageFormats[0];//文件格式.jpg
            cmr.captureImage( function( path ){//成功回调函数，获取路径
                // alert( "拍照成功："+filePath );
                    Toast({
                        message: '拍照成功',
                        position: 'center',
                        duration: 2000
                    });
                    // applicationCacheplus.gallery.save( path, function () { //将图片保存到系统路径，再通过gallery.pick才能获取到,其实在captureImage成功回调之后图片已经被保存到了你打包的APP的目录下。
                    //     //alert( "保存图片到相册成功" );
                    //     Toast({
                    //         message: '已保存至相册',
                    //         position: 'center',
                    //         duration: 2000
                    //     });
                    // });
                    //显示头像
                    window.plus.io.resolveLocalFileSystemURL(path, function(entry) {
                        let pathPhoto = entry.toLocalURL();
                        // console.log(pathPhoto);
                        document.getElementById("headimg").src=pathPhoto;
                    }, function(e) {
                        // console.log("出错了！");
                        Toast({
                            message: '出错啦',
                            position: 'center',
                            duration: 2000
                        });
                    });
                },
                //失败时的回调
                function(error) {
                    Toast({
                        message: '拍照失败',
                        position: 'center',
                        duration: 2000
                    });
                    // alert( "Capture image failed: " + error.message );
                },
                {resolution:res,format:fmt}//分辨率和格式，必填，就是上面获取到的。
            )
        },
        //获取手机相册里的文件
        getImg() {
            // 从相册中选择图片
            // console.log("从相册中选择图片:");
            window.plus.gallery.pick( function(path){
            // console.log(path);
            Toast({
                message: "选择成功",
                position: 'center',
                duration: 2000
            });
            document.getElementById("headimg").src=path;
            }, function ( e ) {
                // console.log( "取消选择图片" );
                Toast({
                    message: "已取消选择",
                    position: 'center',
                    duration: 2000
                });
            }, {filter:"image"} );//过滤器，只要照片，默认是单张``
  }
    },
    created(){
        axios.get("http://10.35.161.6:3000/user?phone="+localStorage.getItem("userphone"))
        .then(res=>{
            this.data=res.data[0];
        })
    },
    mounted(){
    }
}
</script>
