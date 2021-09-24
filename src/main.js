import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import money from 'v-money'
import VueTheMask from 'vue-the-mask'


import Carregando from "@/components/Carregando.vue";
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2)

Vue.use(Vuelidate)
Vue.use(money, { precision: 4 })
Vue.use(VueTheMask)
Vue.component("Carregando", Carregando);
Vue.config.productionTip = false
Vue.filter("numeroPreco", valor => {
    valor = Number(valor);
    if (!isNaN(valor)) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    } else {
        return "";
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')