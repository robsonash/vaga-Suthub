<template>
  <div>
    <div v-if="carregando">
      <Carregando :key="carregando" />
    </div>
    <div>
      <h1 class="c-container__label">Blocos Regionais</h1>
      <div class="c-container__ul">
        <ul>
          <!-- <router-link  :to="{name: 'bloco',params: { bloco: 'eu' }}">
     <li>EU (European Union)</li>
</router-link> -->

          <router-link :to="{ name: 'bloco', params: { bloco: 'EFTA' } }">
            <li>EFTA (Associação Europeia de Comércio Livre))</li>
          </router-link>

          <router-link :to="{ name: 'bloco', params: { bloco: 'CARICOM' } }">
            <li>CARICOM (Comunidade do Caribe)</li>
          </router-link>

          <router-link :to="{ name: 'bloco', params: { bloco: 'PA' } }">
            <li>PA (Aliança do Pacífico)</li>
          </router-link>

          <router-link :to="{ name: 'bloco', params: { bloco: 'UA' } }">
            <li>UA (União Africana)</li>
          </router-link>

          <router-link :to="{ name: 'bloco', params: { bloco: 'USAN' } }">
            <li>USAN (União das Nações Sul-Americanas)</li>
          </router-link>

          <router-link :to="{ name: 'bloco', params: { bloco: 'EEU' } }">
            <li>EEU (União Econômica da Eurásia)</li>
          </router-link>

          <router-link :to="{ name: 'bloco', params: { bloco: 'AL' } }">
            <li>AL (Liga Árabe)</li>
          </router-link>

          <router-link :to="{ name: 'bloco', params: { bloco: 'ASEAN' } }">
            <li>ASEAN (Associação das Nações do Sudeste Asiático)</li>
          </router-link>

          <router-link :to="{ name: 'bloco', params: { bloco: 'CAIS' } }">
            <li>CAIS (Central American Integration System)</li>
          </router-link>

          <router-link :to="{ name: 'bloco', params: { bloco: 'CEFTA' } }">
            <li>CEFTA (Acordo de Livre Comércio da Europa Central)</li>
          </router-link>

          <router-link :to="{ name: 'bloco', params: { bloco: 'NAFTA' } }">
            <li>NAFTA (Acordo de Livre Comércio da América do Norte)</li>
          </router-link>

          <router-link :to="{ name: 'bloco', params: { bloco: 'SAARC' } }">
            <li>SAARC (Associação do Sul da Ásia para Cooperação Regional)</li>
          </router-link>
        </ul>
        <div class="c-container__input">
          <select v-model="bloco" class="c-input">
            <option disabled value
              >Veja uma lista de países por bloco regional</option
            >

            <option value="EU">
              EU (European Union)
            </option>
            <option value="EFTA">
             EFTA (Associação Europeia de Comércio Livre))
            </option>
            <!--    <router-link  :to="{name: 'bloco',params: { bloco: 'eu' }}">
                  </router-link> -->
          </select>
        </div>

        <router-view />
      </div>
    </div>

    <transition>
      <div class="c-container" v-if="paises">
        <div class="c-container__buscar">
          <div class="c-container__label">
            <span class="c-label">Coloque o nome para pesquisar o país</span>
          </div>
          <div class="c-container__input">
            <input
              v-model="nome"
              class="c-input"
              type="text"
              placeholder="Coloque o nome do país"
            />
          </div>
          <div class="c-container__botao">
            <button @click="getPaises('/name/' + nome)" class="c-botao" type="button">
              Buscar
            </button>
          </div>
        </div>
        <div class="c-container__paises__informacoes">
          <div
            class="c-container__paises"
            v-for="pais in paises"
            :key="pais.index"
          >
            <!--    <router-link :to="{name:'pais',params: {pais: pais.id['ISO-3166-1-ALPHA-2']}}">  -->

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

            <!-- </router-link> -->
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
  name: "outros",
  components: {
    Carregando,
  },
  data() {
    return {
      carregando: false,
      paises: "",
      nome: "",
      bloco: "",
      novo:""
    };
  },
  created() {
    this.getPaises("all");
  },
  watch: {
    bloco(bloco) {
    console.log(bloco)
     this.novo =  this.bloco
      console.log(this.novo)
    return this.$router.push({ name: "bloco", params: {bloco: this.novo} })

    },
  },
  methods: {
    getPaises(nome) {
      this.paises = '';
      this.carregando = true;

      api2
        .get(`${nome}`)
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
.c-input {
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
}.c-container__paises{
  margin: 10px auto;
}
.c-container__buscar {
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.c-container__label {
  padding: 10px;
  font-family: "Roboto", Sans-serif;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px;
  color: #bfbfbf;
  letter-spacing: 1px;
}
.c-container__input {
  padding: 10px;
}
.c-container__botao {
  padding: 10px;
}
.c-botao {
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
.c-pais__link{
  display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}
.c-botao--mais{

}
.c-paises__titulos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
}
.c-texto {
  font-weight: bold;
  font-family: "Roboto", Sans-serif;
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
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  grid-gap: 30px;
}
table {
  display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.c-td__nome {
  color: #42b983;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
}
.c-td__valor {
  color: black;
  font-weight: bold;
  margin-left: 10px;
  text-align: left;
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
.c-img {
  min-height: 105px;
  max-height: 105px;
  max-width: 150px;
  min-width: 150px;
  border-radius: 10px 10px;
}
a {
  text-decoration: none;
}

.c-idioma {
  cursor: pointer;
}
.c-idioma .c-td__valor:hover {
  color: red;
  cursor: pointer;
}
ul a {
  /*     display: flex; */
}
a li {
  transition: all 0.3s;
  padding: 10px 30px;
  color: #4caf50ab;
}
a li:hover {
  color: #4caf4f;
  box-shadow: -1px 4px 5px #8bc34a59;
}
.c-container {
  margin-bottom: 60px;
}
@media only screen and (max-width: 600px) {
  .c-container__buscar {
    flex-direction: column;
  }
  .c-container__paises__informacoes {
    display: block;
  }
}
</style>
