<script>
  export default{
    name: 'App' 
  }
</script>
<template>
  
  <div>
   <router-link to="/">Home</router-link>
   <router-link to="/login">Login</router-link>
   <router-link to="/register">Register</router-link>
  </div>
 
  <router-view/>
</template>

<style scoped>

</style>
