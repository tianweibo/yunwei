<template>
  <div id="new" class="content">
	  Home--{{msg}}
  </div>
</template>
<script>
    export default {
	  name: 'Home',
      data(){
          return{
			  msg:'home'
          }
      },
      methods: {
		  changeMsg(){
			this.msg='qqq'
		  }
      },
      mounted() {  
		  this.changeMsg()
      }
    }
</script>

<style lang="scss">
 

</style>
