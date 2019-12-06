<template>
	<div class="IndexPage">
        <IndexHeader/> 
        <IndexBanner class="banner"/>
        <Advertisement/>
        <IndexMenu/>
        <LimitTime/>
        <Special/>
        <Hot/>
        <Myfooter/>
	</div>
</template>

<script>

import IndexHeader from '../components/IndexHeader';
import IndexBanner from '../components/IndexBanner';
import Advertisement from '../components/Advertisement';
import IndexMenu from '../components/IndexMenu';
import LimitTime from '../components/LimitTime';
import Special from '../components/Special';
import Hot from '../components/Hot';
import Myfooter from '../components/Myfooter';

export default {
	name: 'IndexPage',
	data() {
		return {}
    },
    components:{
        IndexHeader,IndexBanner,Advertisement,IndexMenu,LimitTime,Special,Myfooter,
        Hot
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.IndexPage{
    background: #f5f5f5;
}
.banner{
    position: absolute;
    top: 1rem;
}

</style>