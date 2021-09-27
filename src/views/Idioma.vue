<template>
<div>
     <div v-if="carregando">
     <Carregando :key="carregando"/>
      </div>
       <transition>
           <div>
               <div>Países que possuem o idioma em comum</div>
           <!--   <div v-for="pais in idiomas" :key="pais.name">
                 <p>{{pais.name}}</p>
             </div> -->


  <div class="c-container__paises__informacoes">
          <div
            class="c-container__paises"
            v-for="pais in paises"
            :key="pais.index">
    
            <div class="c-paises">

              <div class="c-container__img">
                <img class="c-img" :src="pais.flags[1]" />
              </div>

              <div class="c-paises__container__h2">
               <h2 class="c-paises__h2">{{ pais.name }}</h2>    
              </div>

              <div class="c-pais__link">
               <router-link :to="{name:'outroPais', params: { pais: pais.name }}"
                class="c-botao c-botao--mais">
                Ver mais
              </router-link>
              </div>
            </div>

          </div>
        </div>













               
    </div>
     </transition>
</div>  
</template>

<script>
import Carregando from "../components/Carregando.vue";
import { api2 } from "@/../services.js";
export default {
    
name:'Idioma',
components: {
    Carregando,
  },
props: ['idioma'],

data(){
    return {
        paises: '',
        carregando: false
    }
},
created() {
    this.getPaises(this.idioma)
},
methods: {
    getPaises(idioma) {
      this.carregando = true;

      api2
        .get(`/lang/${idioma}`)
        .then((response) => {
          this.paises = response.data;
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
.c-botao{
    transition: all 0.3s;
    min-width: 210px;
    padding: 10px 30px;
    border: none;
    color: white;
    cursor: pointer;
    background: #007c74;
    border-radius: 5px;
    box-shadow: 0px 8px 13px #dccfcf;
    font-weight: bold;
}
.c-botao:hover {

  background: #42b983;
}
.c-img{
  max-width: 200px;
}
.c-paises__span {
  color: #42b983;
}
.c-paises {
  margin: 10px;
  border-color: #e8e8e8;
  transition: all 0.3s;
  border-radius: 0px 0px 0px 0px;
  box-shadow: -1px 4px 5px #f7f1f1;
  padding: 10px 10px;
}
.c-paises:hover {
  transform: scale(1.1);
}
.c-paises__p {
  color: black;
}
.c-paises__container__span {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
}
.c-paises__container__p {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.c-container__paises__informacoes {
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
 
}
.c-paises__container__h2 {
  display: flex;
  justify-content: center;
  margin: 20px auto;
  align-items: center;
}
.c-paises__h2 {
  background: #00968817;
  padding: 5px 30px;
  color: #42b987;
  box-shadow: 0px 0px 1px;
  font-weight: bold;
  border-radius: 5px;
}
.c-pais__link{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}
.c-img {
  min-height: 105px;
  max-height: 105px;
  max-width: 150px;
  min-width: 150px;
  border-radius: 10px 10px;
}
.c-container__h1{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
a {
  text-decoration: none;
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