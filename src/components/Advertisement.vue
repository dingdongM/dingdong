<template>
	<div class="Advertisement">
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div>
            <img src="../assets/img/pic.jpg" alt="">
        </div>
	</div>
</template>

<script>
export default {
	name: 'Advertisement',
	data() {
		return {}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Advertisement{
    width: 100%;
    padding-top: .52rem;
    background: white;
}
ul{
    width: 100%;
    padding: .08rem 0;
    display: -webkit-flex;
}
ul li{
    height: .2rem;
}
ul li:nth-child(1){
    width: 38%;
    background: url(../assets/img/text.jpg) no-repeat;
    background-size: 3.75rem .2rem;
}
ul li:nth-child(2){
    width: 30%;
    background: url(../assets/img/text.jpg) no-repeat -154px 0;
    background-size: 3.75rem .2rem;
}
ul li:nth-child(3){
    width: 32%;
    background: url(../assets/img/text.jpg) no-repeat -272px 0;
    background-size: 3.75rem .2rem;
}
.Advertisement div{
    width: 100%;
    height: 1.1rem;
}
img{
    width: 100%;
    height: 100%;
}
</style>