<template>
<div>
    <div v-if="carregando">
      <Carregando :key="carregando" />
    </div >
       <transition>
           <div class="c-container">
               <ul>
               <li v-for="pais in paises" :key="pais.index">
                 <p>{{pais.name}}</p> 
                <p>Latitude{{pais.latlng[0]}}</p> 
                <p>Longitude{{pais.latlng[1]}}</p> 
               </li>
               </ul>
           </div>
       </transition>
</div>  
</template>

<script>
import Carregando from "../components/Carregando.vue";
import { api2 } from "@/../services.js";
export default {
name: "Bloco",
props: ["bloco"],
components: {
    Carregando
},
data(){
    return {
        carregando: false,
        paises: ''
    }
},
created(){
      this.getPaisesDoBloco();
},

  methods: {
    getPaisesDoBloco() {
      this.carregando = true;

      api2
        .get(`/regionalbloc/${this.bloco}`)
        .then((response) => {
          this.paises = response.data;
        })
        .catch((error) => console.log(error))

        .finally(() => {
          this.carregando = false;
        });
    },
  },
}
</script>

<style scoped>
ul{
    list-style: disc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
li {
    padding: 5px;
    font-weight: bold;
    color: #9e9e9e;
    margin: auto 30px;
}
.c-container{
    margin-bottom: 60px;
}
</style>