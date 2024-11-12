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
        const userCredentials = await signInWithEmailAndPassword(auth, this.email, this.password)
        const user = userCredentials.user
        console.log('Usuario autenticado con éxito', user)
      }catch(error){
        console.error(error, 'Error al autenticar el usuario')
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
