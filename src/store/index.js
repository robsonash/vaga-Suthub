import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        formulario: {
            nome: "",
            sobreNome: "",
            data: "",
            cpf: "",
            renda: "",
            animal: "",
            raca: "",
            cep: "",
            rua: "",
            numero: "",
            bairro: "",
            cidade: "",
            estado: ""
        },
    },
    mutations: {
        CRIAR_FORMULARIO(state, payload) {
            state.formulario.nome = payload.nome;
            state.formulario.sobreNome = payload.sobreNome;
            state.formulario.data = payload.data;
            state.formulario.cpf = payload.cpf;
            state.formulario.renda = payload.renda;

            state.formulario.animal = payload.animal;
            state.formulario.raca = payload.raca;

            state.formulario.cep = payload.cep;
            state.formulario.rua = payload.rua;
            state.formulario.numero = payload.numero;
            state.formulario.bairro = payload.bairro;
            state.formulario.cidade = payload.cidade;
            state.formulario.estado = payload.estado;


        },
    },
    actions: {

        /*   enviarFormulario(context, payload) {
              context.commit("UPDATE_USUARIO", {

                  id: payload.email

              });

          }, */

    },
    modules: {}
})