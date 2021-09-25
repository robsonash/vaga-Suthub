<template>
 <div class="c-container">
  <transition>
    <div class="c-container--flexivel">
     <img class="c-img" src="../assets/cachorroGato.png">
      <div class="container__p">
       <p class="c-p">Seus melhores amigos agora com a liberdade que precisam</p>
      </div>
      <div class="container__botao">
       <router-link :to="{ name: 'formulario' }">
        <button  class="c-botao">Cadastre-se</button>
       </router-link>
      </div>
     </div>
  </transition>
 </div>
</template>

<script>



export default {
  name: 'home',
  components: {
  
  },
  methods: {
    
  /*   formulario(){
     this.router.push({ name: 'formulario'})

    } */
  }
}
</script>
<style scoped>
.c-container--flexivel{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.c-img {
  max-width: 300px;

}
.c-p{
    font-weight: bold;
    margin-top: 30px;
    text-align: center;
    color: #e91e63;
    max-width: 300px;
    line-height: initial;

}
.c-botao{
    color: white;
    background: #e91e63;
    margin-top: 30px;
    padding: 10px 60px;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
}
.c-botao:hover{
    box-shadow: 1px 0px 5px 0px #e91e63;
    transform: scale(1.1);
}
@media only screen and (max-width: 300px) {
.c-nav__img {
     max-width: 250px
}
   .c-img{

     max-width: 250px;
     
   } 
}
</style>