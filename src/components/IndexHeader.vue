<template>
	<div class="IndexHeader">
      <div class="Top">
          <i class="el-icon-location-outline">
            <span>雁塔区</span><b class="el-icon-caret-bottom"></b>
          </i>
          <i class="el-icon-bell"></i>
      </div>
      <router-link to='/SearchPage'>
          <div id="boxFixed" :class="{'is_fixed' : isFixed}">
              <div class="search" :style="pstyle">
                  <i class="el-icon-search"></i>
                  <span>玉米</span>
              </div>
          </div>
      </router-link>
	</div>
</template>

<script>
export default {
    name: 'IndexHeader',
    data(){
        return {
          isFixed: false,
          offsetTop:0,
          pstyle:""
        }
      },
    mounted(){
      window.addEventListener('scroll',this.initHeight);
      this.$nextTick( () => {
        this.offsetTop = document.querySelector('#boxFixed').offsetTop;
      })
    },
    methods:{
      initHeight () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.isFixed = scrollTop > this.offsetTop ? true : false;
        this.pstyle = scrollTop > this.offsetTop ?"background-color:#f5f5f5":"";
      },
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.IndexHeader{
  width: 100%;
  height: 1.88rem;
  background: linear-gradient(to right,#02c954 40%,#00c551 60%);
}
.Top{
  width: 90%;
  margin: 0 auto;
  display: -webkit-flex;
  -webkit-justify-content: space-between;
  padding: .17rem 0;
  color: white;
  font-size: .22rem;
}
.Top i{
  display: -webkit-flex;
  -webkit-align-items: center;
}
.Top span{
  font-size: .20rem;
  margin: 0 4px;
}
.Top b{
  font-size: .14rem;
}
.is_fixed{
  width: 100%;
  background: white;
  padding: 10px 0;
  position: fixed;
  top: 0;
  z-index: 999;
}
.search{
  width: 90%;
  height: .34rem;
  background: white;
  border-radius: .17rem;
  margin: 0 auto;
  display: -webkit-flex;
  -webkit-justify-content: center;
  -webkit-align-items: center;
  color: #bababa;
  font-size: .22rem;
}
.search span{
  font-size: 14px;
  margin-left: 10px;
}

</style>