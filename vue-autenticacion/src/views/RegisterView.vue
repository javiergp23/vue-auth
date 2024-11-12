<script>
import { createUserWithEmailAndPassword, auth } from "@/auth";

  export default {
    data(){
      return {
        email: "",
        password: "",
      }
    },
    methods: {
      async register(){
        try{
          const userCredentials = await createUserWithEmailAndPassword(auth, this.email, this.password)
          const user = userCredentials.user
          console.log('Usuario creado con éxito', user)
        }catch(error){
          console.error(error, 'Erro al crear el usuario')
        }
      }
    }
  }
</script>

<template>
  
  <div>
    <h1>Registro</h1>
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Contraseña">
    <button @click="register">Registrar</button>
  </div>
 
</template>

<style scoped>

</style>
