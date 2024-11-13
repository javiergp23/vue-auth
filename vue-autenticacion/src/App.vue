<script>
import { onAuthStateChanged, auth } from "@/auth";
  export default{
    name: 'App',
    data(){
      return{
        isAuthenticated: false
      }
    },
    created(){
      onAuthStateChanged(auth, (user) => {
        if(user){
          this.isAuthenticated = true
        }else{
          this.isAuthenticated = false
        }
      })
    }
  }
</script>
<template>
  
  <div>
   <router-link to="/">Login</router-link>
   <router-link to="/register">Register</router-link>
   <router-link to="/about" v-if="isAuthenticated" >About</router-link>
  </div>
 
  <router-view/>
</template>

<style scoped>

</style>
