<template>
  <div>
    <div v-if="carregando">
       <Carregando :key="carregando"/>
    </div>
    <transition>
    <div class="c-container" v-if="paises">
      <div class="c-container__buscar">
       <div class="c-container__label">
        <span class="c-label">Coloque a sigla para pesquisar o país</span>
        </div>
        <div class="c-container__input">
             <input
             
              v-model="sigla"
              class="c-input"
              type="text"
              maxlength="2"
              placeholder="Coloque a sigla do país">
        </div>
         <div class="c-container__botao">
          <button 
             @click="getPaises(sigla)"
            class="c-botao"
            type="button">Buscar
          </button>
        </div>
        </div>
        <div class="c-container__paises__informacoes">
      
          
         <div class="c-container__paises" v-for="pais in paises" :key="pais.index">
      <router-link :to="{name:'pais',params: {pais: pais.id['ISO-3166-1-ALPHA-2']}}"> 

         <div class="c-paises">
           <div class="c-paises__container__h2">
            <h2 class="c-paises__h2">{{pais.nome.abreviado}}</h2>
          </div>
      <table>
         <tr>
          <td class="c-td__nome">Capital:</td>
          <td class="c-td__valor">{{pais.governo.capital.nome}}</td>
        </tr>
         <tr>
          <td class="c-td__nome">Area:</td>
          <td class="c-td__valor">{{pais.area.total}}</td>
        </tr>
         <tr>
          <td class="c-td__nome">Unidade:</td>
          <td class="c-td__valor">{{pais.area.unidade.nome}}</td>
        </tr>
         <tr>
          <td class="c-td__nome">Simbolo:</td>
          <td class="c-td__valor">{{pais.area.unidade.símbolo}}</td>
        </tr>
         <tr>
          <td class="c-td__nome">Localização:</td>
          <td class="c-td__valor">{{pais.localizacao.regiao.nome}}</td>
        </tr>
        <tr>
          <td class="c-td__nome">ID:</td>
          <td class="c-td__valor">{{pais.id["ISO-3166-1-ALPHA-2"]}}</td>
        </tr>       
</table>
</div>


         
          </router-link>
         </div>
        
        </div>
      </div>
     
    </transition>
  </div>
</template>

<script>

import Carregando from "../components/Carregando.vue";
import { api } from "@/../services.js";

export default {
  name: "paises",
  components:{
   Carregando
  },
  data() {
    return {
      carregando: false,
      paises: null,
      sigla: ""
    }; 
  },
  created() {
    this.getPaises("br");
  },

  methods: {
    getPaises(sigla) {
      this.carregando = true;
 
      api
        .get(sigla)
        .then((response) => {
          this.paises = response.data; 
       
        })
        .catch((error) => console.log(error))

        .finally(() => {
          this.carregando = false;
        });
    },
  },
};

</script>

<style scoped>

.c-input{

  padding: 10px;
  font-family: "Roboto", Sans-serif;
  background-color: rgba(255, 255, 255, 0);
  border-color: #e8e8e8;
  border-radius: 0px 0px 0px 0px;
  box-shadow: -1px 4px 5px #f7f1f1;
  border: 1px solid #e8e8e8;
  font-size: 16px;
  font-weight: 400;
}
.c-input textarea:focus,
input:focus,
select:focus {
  box-shadow: 0 0 1px 0;
  border-color: #e8e8e8;
  outline: 0;
}
.c-container__buscar{
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}
.c-container__label{
    padding: 10px;
    font-family: "Roboto", Sans-serif;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    color: #bfbfbf;
    letter-spacing: 1px;

}
.c-container__input{

    padding: 10px;

}
.c-container__botao{
      padding: 10px;
}
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
.c-botao:hover{
  transform: scale(1.1);
    background: #42b983;
}
.c-paises__titulos{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
}
.c-texto{
 font-weight: bold;
 font-family: "Roboto", Sans-serif;
}
.c-paises__span {
  color: #42b983;
}
.c-paises{
    margin: 10px;
    cursor: pointer;
    border-color: #e8e8e8;
    transition: all 0.3s;
    border-radius: 0px 0px 0px 0px;
    box-shadow: -1px 4px 5px #f7f1f1;
    padding: 10px 10px;

}
.c-paises:hover{
  transform: scale(1.1);
}
.c-paises__p {
  
 color: black;
}
.c-paises__container__span{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 10px;
}
.c-paises__container__p{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.c-container__paises__informacoes{
    display: grid;
    grid-template-columns: 1fr minmax(200px, 400px);
    grid-gap: 30px;
}
table {
   
}
.c-td__nome{
  color: #42b983;
  font-weight: bold;
  text-align: left;
}
.c-td__valor{
  color: black;
  font-weight: bold;
  margin-left: 10px;
  text-align:left
}
.c-paises__container__h2{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
  
}
.c-paises__h2{
 
    background: #00968817;
    padding: 5px 30px;
    color: #42b987;
    box-shadow: 0px 0px 1px;
    font-weight: bold;
    border-radius: 5px;
}
a{
  text-decoration: none;
}

@media only screen and (max-width: 600px) {
 .c-container__buscar {
      flex-direction: column;
 }
 .c-container__paises__informacoes{
   display: block;
 }
}

</style>
