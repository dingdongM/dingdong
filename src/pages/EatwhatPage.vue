<!--
 * @Author: your name
 * @Date: 2019-11-26 18:00:29
 * @LastEditTime: 2019-11-28 15:38:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\dingdong\src\pages\eatwhat.vue
 -->
<template>
<div>
    <EatSearch></EatSearch> 
    <EatNav></EatNav>
    
</div>
</template>
<script>
import EatSearch from '../components/EatSearch';
import EatNav from '../components/EatNav';

export default {
    name:'EatWhat',
    data() {
        return {
        }
    },
    components:{EatSearch,EatNav}
}
</script>
<style scoped>
            
</style>
