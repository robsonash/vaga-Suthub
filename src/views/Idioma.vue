<template>
<div>
     <div v-if="carregando">
     <Carregando :key="carregando"/>
      </div>
       <transition>
           <div>
               <div>Países com o idioma em comum</div>
             <div v-for="pais in idiomas" :key="pais.name">
                 <p>{{pais.name}}</p>
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
        idiomas: '',
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
          this.idiomas = response.data;
        })
        .catch((error) => console.log(error))

        .finally(() => {
          this.carregando = false;
        });
    },
}
}

</script>

<style>

</style>