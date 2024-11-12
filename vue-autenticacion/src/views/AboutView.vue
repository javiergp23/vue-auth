<script>
import { signOut, auth } from "@/auth";
import { useRouter } from "vue-router";

export default {
  //setup, created y mounted
  setup(){
    const router = useRouter()
    const logout = async() => {
      try{
        await signOut(auth)
        router.push('/')
      }catch(error){
        console.error(error, 'Error al cerrar sesion')
      }
    }

    return{
      logout
    }
  }
}
</script>

<template>
  <div class="about">
    <h1>Esta es una vista protegida</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;  
    align-items: center;
  }
}
</style>
