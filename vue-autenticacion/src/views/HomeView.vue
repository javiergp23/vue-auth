<script >
import { signInWithEmailAndPassword, auth } from "@/auth";

export default{
  data(){
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async signIn(){
      try{
        const { email, password } = this
        const{ user } = await signInWithEmailAndPassword(auth, email, password)
        console.log('Usuario autenticado con éxito', user)
      }catch(error){
        console.error(error, 'Error en las credenciales')
      }
    }
  }
}

</script>

<template>
  
  <div>
    <h1>Iniciar sesion</h1>
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Contraseña">
    <button @click="signIn">Iniciar sesion</button>
  </div>
 
</template>
