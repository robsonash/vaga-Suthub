<template>
  <div>
    <div v-if="carregando">
     <Carregando :key="carregando"/>
      </div>
        <transition>
         <div class="c-container" v-if="dados">
          <div class="c-container__informacoes">
           <div class="c-container__h1">
             <h1 class="c-h1">{{dado.nome.abreviado}}</h1> 
          </div>
         
                    
       
         
   
    <div class="c-informacoes">    
        <table>
         <tr>
          <td class="c-td__nome">Capital:</td>
          <td class="c-td__valor">{{dado.governo.capital.nome}}</td>
        </tr>
         <tr>
          <td class="c-td__nome">Area:</td>
          <td class="c-td__valor">{{dado.area.total}}</td>
        </tr>
         <tr>
          <td class="c-td__nome">Unidade:</td>
          <td class="c-td__valor">{{dado.area.unidade.nome}}</td>
        </tr>
         <tr>
          <td class="c-td__nome">Simbolo:</td>
          <td class="c-td__valor">{{dado.area.unidade.símbolo}}</td>
        </tr>
         <tr>
          <td class="c-td__nome">Localização:</td>
          <td class="c-td__valor">{{dado.localizacao.regiao.nome}}</td>
        </tr>
        <tr>
          <td class="c-td__nome">ID:</td>
          <td class="c-td__valor">{{dado.id["ISO-3166-1-ALPHA-2"]}}</td>
        </tr>       
       </table>
    </div>
            <div class="c-informacoes__container__historico">
                <h2 class="c-h2">Um pouco mais sobre o país</h2>
                  <div class="c-historico">
                   <p class="c-p">{{dado.historico}}</p>
                </div>
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
name: "Pais",
components:{
    Carregando
},
props: ["pais"],
data() {
    return {
        dados:'',
        carregando: false
        
     }       
 },
 created(){
     this.getPaises(this.pais);
},
computed:{
    dado(){
        return this.dados[0] ;
    }
},
methods: {

    getPaises(sigla) {
      this.carregando = true;
    
      api
        .get(sigla)
        .then((response) => {  
    this.dados = response.data;
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
 * {
  font-family: "Roboto", Sans-serif;
}
 a.router-link-active {
  color: #42b983!important;
}
.c-container__informacoes{
max-width: 1200px;
}
.c-informacoes{
    margin: 10px;
    border-color: #e8e8e8;
    border-radius: 0px 0px 0px 0px;
    box-shadow: -1px 4px 5px #f7f1f1;
    padding: 10px 10px;

}
.c-h1{

    font-weight: bold;
    color: white;
    padding: 10px 30px;
    font-family: "Roboto", Sans-serif;
    background: #009688;

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
.c-h2{

    font-weight: bold;
    font-size: 3.9rem;
    text-align: initial;
    margin: 10px auto;
    color: #9e9e9e;

}
.c-historico{

   margin-bottom: 60px;

}
.c-p{
   background: #00000003;
   line-height: 1.3rem;
   text-align: justify;
   text-shadow: 0px 0px 1px #bac7cd85;
}
@media only screen and (max-width: 1300px) {
 .c-container{
     margin: auto 100px;
 }
 @media only screen and (max-width: 810px) {
   .c-container__informacoes{
  
   }
     .c-h2{
     font-size: 3.0rem;
     }
 }
 @media only screen and (max-width: 550px) {
     .c-h2{
     font-size: 2.1rem;
     }
     .c-container[data-v-521d9ed6] {
       margin: auto 10px;
 }
 }

}
</style>