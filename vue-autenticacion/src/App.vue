<script>
  import firebase from "../firebaseConfig.js";

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

        }catch(error){
          console.error(error, 'Erro al crear el usuario')
        }
      }
    }
  }
</script>

<template>
  

 
</template>

<style scoped>

</style>
