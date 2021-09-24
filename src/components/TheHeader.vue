<template>
   <div id="nav">
      <div class="c-logo">
        <img src="@/assets/logo.png">
      </div>
      <div class="c-links">
      <router-link to="/">Home</router-link> |
      <router-link to="/formulario">Formulário</router-link> |
      <router-link to="/paises">Países</router-link> 
   
      </div>
    </div>
</template>

<script>
export default {
name: "TheHeader"
}
</script>

<style>

</style>