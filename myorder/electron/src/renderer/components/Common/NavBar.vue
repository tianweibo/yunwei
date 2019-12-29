<template>
  <div id="new" class="content">
	  <ul>
		  <li><router-link to='home'>Home</router-link></li>
		  <li><router-link to='user'>用户</router-link></li>
		  <li><router-link to='authority'>权限</router-link></li>
		  <li><router-link to='funcs'>功能</router-link></li>
	  </ul>
  </div>
</template>
<script>
    export default {
	  name: 'Navbar',
      data(){
          return{
          }
      },
      methods: {
      },
      mounted() {  
      }
    }
</script>

<style lang="scss">
 

</style>
