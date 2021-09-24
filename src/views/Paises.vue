<template>
  <div>
    <div v-if="carregando">
       <Carregando :key="carregando"/>
    </div>
    <transition>
    <div class="c-container" v-if="countries">
      <div class="c-container__flag"> <img class="c-flag" :src="this.flag" /></div>
        <div class="c-list">
          <div class="c-list--left">
            <p class="c-titulo">{{ countries[0].name }}</p>
            <p class="c-subTitulo"> {{countries[0].altSpellings[3]}}</p>
            <p class="c-text"><span class="c-text__span">Capital:</span> {{ countries[0].capital }}</p>
            <p class="c-text"><span class="c-text__span">Código de discagem:</span> +{{ countries[0].callingCodes[0] }}</p>
            <p class="c-text"><span class="c-text__span">Região:</span> {{ countries[0].region }}</p>
            <p class="c-text"><span class="c-text__span">Sub-Região:</span> {{ countries[0].subregion }}</p>
            <p class="c-text"><span class="c-text__span">População:</span> {{ countries[0].population }}</p>
            <p class="c-text"><span class="c-text__span">Dominio de topo:</span> {{ countries[0].topLevelDomain[0] }}</p>
          </div>
                 
           <div class="c-list--center">
            <ul class="c-list--center__ul"> 
             <span class="c-text__span">Moeda: </span>
              <li class="c-list--center__li" v-for="currenci in countries[0].currencies" :key="currenci.code">
               <p class="c-text__span">Nome:<span class="c-text">{{currenci.name}}</span></p>       
               <p class="c-text__span">Código:<span class="c-text">{{currenci.code}}</span></p>
               <p class="c-text__span">Simbolo:<span class="c-text">{{ currenci.symbol}}</span></p> 
              </li>
            </ul>
           </div>

 
           <div class="c-list--center">
            <ul class="c-list--center__ul"> 
              <span class="c-text__span">Traduções: </span>
               <li class="c-list--center__li" v-for="language in countries[0].languages" :key="language.code">
                <p class="c-text__span">iso639_1:<span class="c-text">{{language.iso639_1}}</span></p>       
                <p class="c-text__span">iso639_2:<span class="c-text">{{language.iso639_2}}</span></p>
                <p class="c-text__span">name:<span class="c-text">{{ language.name}}</span></p> 
                <p class="c-text__span">nativeName:<span class="c-text">{{ language.nativeName}}</span></p> 
               </li>
              </ul>
             </div>

             <div class="c-list--center">
               <ul class="c-list--center__ul"> 
                <span class="c-text__span">Fuso horários: </span>
                 <li class="c-list--center__li" v-for="timezone in countries[0].timezones" :key="timezone">
                  <p class="c-text__span"><span class="c-text">{{timezone}}</span></p>       
                 </li>
               </ul>
             </div>

             <div class="c-list--center">
               <ul class="c-list--center__ul"> 
                <span class="c-text__span">Traduções </span>
                 <li class="c-list--center__li" v-for="(translation, index) in countries[0].translations" :key="translation.index">
                  <p class="c-text__span">{{index}}:<span class="c-text">{{translation}}</span></p>       
                 </li>
               </ul>
             </div>

             <div class="c-list--center">
               <ul class="c-list--center__ul"> 
                <span class="c-text__span">Cordenadas</span>
                 <p class="c-text__span">Latitude<span class="c-text">{{countries[0].latlng[0]}}</span></p>
                 <p class="c-text__span">Longitude<span class="c-text">{{countries[0].latlng[1]}}</span></p>        
               </ul>
             </div>
             



        <ul>
          
          <li>
            <p>topLevelDomain: {{ countries[0].topLevelDomain[0] }}</p>
          </li>
          <li>
            <p>alpha2Code: {{ countries[0].alpha2Code }}</p>
          </li>
          <li>
            <p>alpha3Code: {{ countries[0].alpha3Code }}</p>
          </li>
          <li>
            <p>callingCodes: </p>
          </li>
          <li>
            <p>capital: {{ countries[0].capital }}</p>
          </li>
           <li>
               <ul>
                   Spellings: 
                   <li v-for="spelling in countries[0].altSpellings" :key="spelling">
                   {{ spelling }}
                   </li>
               </ul>
          </li>
          <li>
            <p>Region: {{ countries[0].region }}</p>
          </li>
          <li>
            <p>Subregion: {{ countries[0].subregion }}</p>
          </li>
          <li>
            <p>Population: {{ countries[0].population }}</p>
          </li>
           <li>
               <ul>
                   latlng: 
                   <li v-for="latlng in countries[0].latlng" :key="latlng">
                   {{ latlng }}
                   </li>
               </ul>
          </li>
          <li>
            <p>Demonym: {{ countries[0].demonym }}</p>
          </li>
           <li>
            <p>Area: {{ countries[0].area }}</p>
          </li>
          <li>
            <p>Gini: {{ countries[0].gini }}</p>
          </li>
            <li>
               <ul>
                   Timezones: 
                   <li v-for="timezone in countries[0].timezones" :key="timezone">
                   {{ timezone }}
                   </li>
               </ul>
          </li>
           <li>
               <ul>
                   Borders: 
                   <li v-for="border in countries[0].borders" :key="border">
                   {{ border }}
                   </li>
               </ul>
          </li>
           <li>
            <p>Native name: {{ countries[0].nativeName }}</p>
          </li>
           <li>
            <p>Numeric code: {{ countries[0].numericCode }}</p>
          </li>
          <li>
               <ul>
                   Currencies: 
                   <li v-for="currenci in countries[0].currencies" :key="currenci.code">
                   {{ currenci.code }}<br>
                     {{ currenci.name }}<br>
                       {{ currenci.symbol }}<br>
                   </li>
               </ul>
          </li>
           <li>
               <ul>
                   Languages: 
                   <li v-for="language in countries[0].languages" :key="language.code">
                   {{ language.code }}<br>
                     {{ language.name }}<br>
                       {{ language.symbol }}<br>
                   </li>
               </ul>
          </li>
            <li>
               <ul>
                   Translations: 
                   <li v-for="translation in countries[0].translations" :key="translation.index">
                   {{ translation }}<br>
                    
                   </li>
               </ul>
          </li>
           <li> RegionalBlocs:
               <ul>
                 <li><p> Name {{ countries[0].regionalBlocs[0].name }}</p></li>
                 <li><p> Acronym {{ countries[0].regionalBlocs[0].acronym }}</p></li>
 <li>otherAcronyms
     <ul>
        <li v-for="regionalBloc in countries[0].regionalBlocs[0].otherAcronyms" :key="regionalBloc.index">
         {{ regionalBloc }}<br>
        </li>
     </ul>
</li>
<li>otherNames
     <ul>
        <li v-for="regionalBloc in countries[0].regionalBlocs[0].otherNames" :key="regionalBloc.index">
         {{ regionalBloc }}<br>
        </li>
     </ul>
</li>
               </ul>  
          </li>
        <li><p> Cioc {{ countries[0].cioc }}</p></li>



        </ul>
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
      countries: null,
      flag: null
    }; 
  },
  created() {
    this.getCountries();
  },

  methods: {
    getCountries() {
      this.carregando = true;
      api
        .get(`name/brasil`)
        .then((response) => {
          this.countries = response.data; 
            this.flag = response.data[0].flag; 
        })
        .catch((error) => console.log(error))

        .finally(() => {
          this.carregando = false;
        });
    },
  },
};
/* img.naturalHeight / 2
img.naturalWidth / 2 */
</script>

<style scoped>
.c-container{
display: flex;
}
.c-flag{
    max-width: 500px;  
    border-radius: 10px;
    box-shadow: -1px 2px 20px 0px #7d7777;
    margin-right: 10px;
}
.c-list{
   
}
.c-list--left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
 .c-list--center{
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    justify-content: center;
   
 
  }
  .c-list--center__ul{
        border-radius: 10px;
    border: 6px solid #e7e6eb;
  }
  .c-list--center__li{

  }
.c-titulo{
 
    font-size: 2rem;
    font-weight: bold;
    color: #009b3a
}
.c-subTitulo{
    font-size: 20px;
    color: #009b3a;
    font-weight: bold;
    margin-bottom: 10px;
}
.c-text{
      color: black;
      font-weight: bold;
      margin-bottom: 2px;
}
.c-text__span{
  color: #009b3ac4;}
 
</style>
