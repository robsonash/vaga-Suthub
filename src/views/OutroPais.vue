<template>
<div>
    <div v-if="carregando">
      <Carregando :key="carregando" />
    </div>
        <transition>
            <div class="c-container" v-if="paisRecebido">
         
                <div class="c-bandeira">
                    <img class="c-img" :src="dados.flags[1]" />
                </div>
                <div class="c-container__h1">
                    <h1 class="c-h1">{{dados.name}}</h1>
               </div>
               <div class="c-container__informacoes">
                   <table>
                       <tr><td></td><td></td></tr>
                   </table>
    <div class="c-container__informações__idiomas">
    <router-link  class="c-container__informações__idiomas__a" v-for="idioma in dados.languages" :key="idioma.index"
    :to="{ name: 'idioma', params: { idioma: idioma.iso639_1 },}">
                  {{ idioma.name }}
    </router-link>
                   </div>
               </div>
               <div class="c-container__paises">
                <router-view/>
               </div>
        </div>
        
        
           </transition>

</div>  
</template>

<script>
import Carregando from "../components/Carregando.vue";
import { api2 } from "@/../services.js";
export default {
name: 'OutroPais',
props: ['pais'],
 components: {
 Carregando,
  },
   data() {
    return {
     carregando: false,
     paisRecebido: ''
    };
  },
  created() {
    this.getPais(`name/${this.pais}`);
  },
 beforeRouteUpdate(to, from, next) {
    this.getPais(`name/${to.params.pais}`);
    next();
     
  },
  computed:{
    dados(){
        return this.paisRecebido[0] ;
    }
},
    methods: {
    getPais(nome) {

      this.carregando = true;

      api2
        .get(`${nome}`)
        .then((response) => {
          this.paisRecebido = response.data;
        })
        .catch((error) => console.log(error))

        .finally(() => {
          this.carregando = false;
        });
    },
  }
}
</script>

<style scoped>
.c-img{
    max-width: 500px;
}
.c-h1{
    font-weight: bold;
    background: #009688;
    color: white;
    padding: 10px 30px;
    letter-spacing: 0.02rem;
    font-family: "Roboto", Sans-serif;
}
.c-container__informações__idiomas{
margin: 20px
}
.c-container__informações__idiomas a{

    border: 1px solid #c8baba;
    list-style: none;

    text-decoration: none;
    padding: 10px;
}
@media only screen and (max-width: 550px) {
.c-img{
    max-width: 400px;
}
}
@media only screen and (max-width: 350px) {
.c-img{
    max-width: 200px;
}
}
</style>