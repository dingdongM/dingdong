<!--
 * @Author: your name
 * @Date: 2019-12-04 14:53:51
 * @LastEditTime: 2019-12-04 17:55:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day14d:\dingdong\src\pages\sharePage.vue
 -->
<template>
<div class="box">
    <shareHead></shareHead>
    <shareContent></shareContent>
</div>
 
</template>
<script>
import shareHead from "../components/shareHead"
import shareContent from "../components/shareContent"
export default {
    data() {
        return {
        }
    },
    components:{shareHead,shareContent}
    
}
</script>
<style scoped>

</style>
