<template>
  <div>
    <transition>
    <div class="c-container__form">
      <div class="c-container ">
        <h1 class="c-container__h1">Cadastro</h1>
      </div>
      <div class="c-container__form">
        <form v-on:submit.prevent class="c-form">
          
          <div class="c-container__input">
            <span class="c-span">Nome</span>
            <div class="c-container__input__nome">
              <input
              
                @input="$v.nome.$touch()"
                class="c-input"
                type="text"
                v-model.trim="nome"
                placeholder="Nome"
              />
              <span
                v-if="$v.nome.$dirty && $v.nome.$invalid"
                class="c-span--aviso"
                :class="{ invalid: $v.nome.$dirty && $v.nome.$invalid }"
              >
                Campo nome, obrigatório !
              </span>
            </div>
          </div>

          <div class="c-container__input">
            <span class="c-span">SobreNome</span>
            <div class="c-container__input__nome">
              <input
                
                @input="$v.sobreNome.$touch()"
                class="c-input"
                type="text"
                v-model.trim="sobreNome"
                placeholder="Sobrenome"
              />
              <span
                v-if="$v.sobreNome.$dirty && $v.sobreNome.$invalid"
                class="c-span--aviso"
                :class="{
                  invalid: $v.sobreNome.$dirty && $v.sobreNome.$invalid,
                }"
              >
                Campo sobrenome, obrigatório !
              </span>
            </div>
          </div>

          <div class="c-container__input">
            <span class="c-span">Data de nascimento</span>
            <input
                
              class="c-input"
              type="text"
              @keyup="verificarIdade()"
              v-model="data"
                v-mask="['##/##/####']"
                placeholder="Data de nascimento"
            />
            <span class="c-span--aviso invalid" v-if="!$v.idade.between">
              Permitido apenas para quem tem entre
              {{ $v.idade.$params.between.min }}
              e
              {{ $v.idade.$params.between.max }} de idade
            </span>
          </div>

          <div class="c-container__input">
            <span class="c-span">CPF</span>
            <input
              @input="$v.cpf.$touch()"
       
              class="c-input"
              type="text"
              v-model="cpf"
              v-mask="['###.###.###-##']"
              placeholder="Digite seu cpf"
            />
            <span
              v-if="$v.cpf.$dirty && $v.cpf.$invalid"
              class="c-span--aviso"
              :class="{ invalid: $v.cpf.$dirty && $v.cpf.$invalid }"
            >
              Preencha corretamente o campo !
            </span>
          </div>
  <div class="c-container__input">
            <div><span class="c-span">Renda Mensal </span></div>
           <div class="c-container__input__span--aviso">
            <money
              class="c-input"
              v-model="renda"
              v-bind="money"
              placeholder="Qual a sua renda mensal ?"
            >
            </money>
         
            <span
              v-if="this.renda < 1000"
              class="c-span--aviso invalid"
              >A sua renda mensal deve ser de no minimo R$: 1.000,00
            </span>
               </div>
          </div>
          <div class="c-container__input">
            <span class="c-span">Qual é seu pet ?</span>
            <select
              @focus="$v.animal.$touch()"
              class="c-input"
              v-model="animal"
              @change="getRacas(animal)"
            >
              <option disabled value>Qual é seu Pet</option>
              <option value="cachorro">Cachorro</option>
              <option value="gato">Gato</option>
            </select>
            <span
              v-if=" $v.animal.$invalid"
              class="c-span--aviso"
              :class="{
                invalid: $v.animal.$invalid,
              }"
            >
              Selecione uma opção !
            </span>
          </div>

          <div class="c-container__input">
               <div> <span class="c-span">Qual a raça do seu pet ?</span></div>
           <div class="c-container__input__span--aviso">
            <select
              @focus="$v.raca.$touch()"
              class="c-input"
              v-model="raca"
            >
              <option disabled value>Raça do Pet</option>
              <option v-for="dataRaca in racas" :key="dataRaca">
                {{ dataRaca }}
              </option>
              <option>Outra</option>
            </select>
            <span
              v-if="$v.raca.$dirty && $v.raca.$invalid"
              class="c-span--aviso"
              :class="{
                invalid:
                  $v.raca.$dirty && $v.raca.$invalid,
              }"
            >
              Selecione uma opção !
            </span>
            </div>
          </div>

          <div 
           class="c-container__input"
            v-if="this.raca === 'Outra'">


               <div> <span class="c-span">Qual a raça do seu {{animal}} ?</span></div>
              <div class="c-container__input__span--aviso">
            <input
              @input="$v.outraRaca.$touch()"
              class="c-input c-input--especial"
              v-model.trim="outraRaca"
              type="text"
              :placeholder="`Qual a raça do seu ${animal}`"
            />
            <span
              v-if=" $v.outraRaca.$invalid"
              class="c-span--aviso"
              :class="{ invalid: $v.outraRaca.$invalid }"
            >
              Este campo deve conter a raça de seu pet !
            </span>
             </div>
          </div>




        






          <div class="c-endereco">
            <div class="c-container">
              <h2 class="c-container__h2">Endereço</h2>
            </div>

              <div v-if="this.carregando">
                <Carregando :key="carregando"/>
               </div>


            <div class="c-container__endereco">
                  <input
                   @input="$v.cep.$touch()"
                    class="c-input"
                    v-model.trim="cep"
                    @keyup="Cep()"
                    type="text"
                    v-mask="['#####-###']"
                    placeholder="Digite seu cep:"
                    
                    />
                   <span
                     v-if="$v.cep.$dirty && $v.cep.$invalid"
                    class="c-span--aviso">
                    Preencha o campo cep !
                  </span>
            </div>

            <div class="c-container__endereco">
              <input
               @input="$v.rua.$touch()"
                v-model.trim="rua"
                class="c-input"
                type="text"
                placeholder="Rua:"
              />
              <span 
                  v-if="$v.rua.$dirty && $v.rua.$invalid"
              class="c-span--aviso">
                    Preencha o campo rua !
                  </span>
            </div>

             <div class="c-container__endereco">
              <input
               @input="$v.numero.$touch()"
                v-model.trim="numero"
                class="c-input"
                type="text"
                placeholder="Número:"
              />
              <span 
                  v-if="$v.numero.$dirty && $v.numero.$invalid"
              class="c-span--aviso">
                    Preencha o campo número (máximo de 6 números) !
                  </span>
            </div>

            <div class="c-container__endereco">
              <input
                 @input="$v.bairro.$touch()"
                v-model.trim="bairro"
                class="c-input"
                type="text"
                placeholder="Bairro:"
              />
              <span 
                v-if="$v.bairro.$dirty && $v.bairro.$invalid"
              class="c-span--aviso">
                    Preencha o campo bairro !
                  </span>
            </div>
            <div class="c-container__endereco">
              <input
                @input="$v.cidade.$touch()"
                v-model.trim="cidade"
                class="c-input"
                type="text"
                placeholder="Cidade:"
              />
              <span
                v-if="$v.cidade.$dirty && $v.cidade.$invalid"
               class="c-span--aviso">
                    Preencha o campo cidade !
                  </span>
            </div>





            <div class="c-container__endereco">
              <input
               @input="$v.estado.$touch()"
                v-model.trim="estado"
                class="c-input"
                type="text"
                placeholder="Estado:"
              />
              <span 
                v-if="$v.estado.$dirty && $v.estado.$invalid"
              class="c-span--aviso">
                    Preencha o campo estado (Apenas as siglas) !
                  </span>
            </div>
          </div>
          <div class="c-container__botao">
            <button class="c-botao" type="submit" @click="enviarFormulario()">Enviar</button>
          </div>
        </form>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
import Carregando from "../components/Carregando.vue";

import { required, minLength,maxLength, between, requiredIf } from "vuelidate/lib/validators";
import { getCep } from "@/../services.js";
import {  mapState,mapMutations } from "vuex";

const Swal = require("sweetalert2");
//import Swal from 'sweetalert2';

export default {
  name: "formulario",
  components:{
Carregando
  },
  data() {
    return {
        money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: "",
        precision: 2,
        masked: false,
      },
      carregando: false,
      nome: "",
      sobreNome: "",
      data: "",
      dia: "",
      mes: "",
      ano: "",
      idade: "",
      cpf: "",
      renda: "",
      cep: "",
      rua: "",
      numero:"",
      bairro: "",
      cidade: "",
      estado: "",
      animal: "",
      outraRaca: "",
      selecionado:false,

      racas: {},
      raca: "",
      cachorro: ["Poodle", "Pinscher", "Labrador", "Shih Tzu", "Yorkshire Terrier"],
      gato: ["Persa", "Siamês", "Maine Coon", "Ragdoll", "Sphynx"],
    };
  },

  validations: {
   
    nome: {
      required,
      minLength: minLength(3),
    },
    sobreNome: {
      required,
      minLength: minLength(3),
    },
    idade: {
      required,
      between: between(18, 65),
    },
    data:{

  minLength: minLength(10),

    },
    cpf: {
      required,
      minLength: minLength(14),
    },
     renda: {
      required,
    },
    animal: {
      required,
    },
    raca: {
      required,
    },
     
    outraRaca: {
      required: requiredIf(function(){
        return this.selecionado;
      })
    },
    cep:{
      required,
      minLength: minLength(9),
      maxLength: maxLength(9),
    },
    rua:{
      required
    },
    numero:{
      required,
       maxLength: maxLength(6),
    },
    bairro:{
      required
    },
    cidade:{
      required
  },
    estado:{
    required,
    maxLength: maxLength(2),
  }
  },
  watch: {
    data() {
      this.verificarIdade();
    },
    raca(){
      this.mudaestado();
    }
  },
   computed:{
    ...mapState(["formulario"])
},
  created() {},
  methods: {
   ...mapMutations(["CRIAR_FORMULARIO"]),

  mudaestado(){
        if(this.raca === "Outra"){
        this.selecionado = true;
        }else{
          this.selecionado = false;
          this.outraRaca = '';
        }
        
  },







    enviarFormulario(){
    
      
    if(!this.$v.$invalid){
      if(this.raca === "Outra"){
      this.raca = this.outraRaca;
      }
      this.CRIAR_FORMULARIO({
        nome:this.nome,
        sobreNome:this.sobreNome,
        data:this.data,
        cpf:this.cpf,
        renda:this.renda,

        animal:this.animal,
        raca:this.raca,

        cep:this.cep,
        rua:this.rua,
        numero:this.numero,
        bairro:this.bairro,
        cidade:this.cidade,
        estado:this.estado,

      });
     
      this.formularioTerminado = JSON.parse(JSON.stringify(this.formulario))
      console.log(this.formularioTerminado);

      Swal.fire({
       position: 'top-center',
       icon: 'success',
       title: 'Formulario enviado com sucesso',
       confirmButtonColor: '#007c74',
       showConfirmButton: true,
 
})
    } else {
      Swal.fire({
       position: 'top-center',
       icon: 'error',
       title: 'Preencha corretamente o formulário',
       confirmButtonColor: '#007c74',
       showConfirmButton: true,
    });

       this.$v.$touch();
    }
    },




    getRacas(tipoAnimal) {
      this.tipoSelecionado = "";
      if (tipoAnimal === "cachorro") {
        this.racas = this.cachorro;
      } else {
        this.racas = this.gato;
      }
    },
    Cep() {
     
      const cep = this.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        this.cep.replace("-", "");
        this.carregando = true;
        getCep(cep)
          .then((response) => {
            this.rua = response.data.logradouro;
            this.bairro = response.data.bairro;
            this.estado = response.data.uf;
            this.cidade = response.data.localidade;
          })
          .catch((error) => console.log(error))

          .finally(() => {
            this.carregando = false;
          });
      }
    },
    verificarIdade() {
      const dataNova = this.data
        .split("-")
        .reverse()
        .join("/");
      const dia = dataNova.split("/")[0];
      const mes = dataNova.split("/")[1];
      const ano = dataNova.split("/")[2];
      this.dia = dia;
      this.mes = mes;
      this.ano = ano;

      this.calcularIdade(this.dia, this.mes, this.ano);
    
    },

    calcularIdade(dia_aniversario, mes_aniversario, ano_aniversario) {
      var d = new Date(),
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),
        quantos_anos = ano_atual - ano_aniversario;

      if (
        mes_atual < mes_aniversario ||
        (mes_atual == mes_aniversario && dia_atual < dia_aniversario)
      ) {
        quantos_anos--;
      }
      this.idade = quantos_anos;
      return quantos_anos < 0 ? 0 : quantos_anos;
        
    },
  

  },
};
</script>

<style scoped>
*{
  font-family: "Roboto", Sans-serif;
}
.c-container {
  margin: auto 10px;
  padding: 10px;
}
.c-container__form{
      margin-bottom: 60px;
}
.c-container__h1 {
  font-family: "Source Sans Pro", Sans-serif;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: black;
}
.c-container__h2 {
  font-family: "Source Sans Pro", Sans-serif;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: black;
}

.c-container__input {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 40px;
  padding: 5px 14px;
  margin-bottom: 10px;
 
}
.c-container__endereco {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 40px;
  padding: 5px 14px;
  margin-bottom: 10px;
}
.c-input {
  min-width: 600px;
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
.c-input--especial{
      border: 2px solid #88e5f5
}
.c-span {
  font-family: "Roboto", Sans-serif;
  font-size: 15px;
  font-weight: 600;

  text-transform: uppercase;
  margin-right: 10px;
  color: #bfbfbf;
  letter-spacing: 1px;
}
.invalid{
 text-align: left;
}
.c-span.invalid {
  color: red;
 
  
}
.c-span--aviso {
  color: red;
  font-size: 13px;
  margin-top: 5px;
   text-align: left;
}
.c-span--aviso.invalid {
  color: red;
}
.c-input textarea:focus,
input:focus,
select:focus {
  box-shadow: 0 0 1px 0;
  border-color: #e8e8e8;
  outline: 0;
}

.c-input.invalid {
  border-color: red;
}
.c-container__input__nome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.c-container__input__span--aviso{
  display: flex;
  flex-direction: column;
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
@media only screen and (max-width: 800px) {
 .c-input {
    min-width: 400px;
 }
}
@media only screen and (max-width: 450px) {
 .c-input {
   min-width: 350px;
 }
 @media only screen and (max-width: 376px) {
 .c-input {
   min-width: 280px;
 }
 
}
 @media only screen and (max-width: 281px) {
 .c-input {
   min-width: 210px;
 }
 
}
}
</style>
