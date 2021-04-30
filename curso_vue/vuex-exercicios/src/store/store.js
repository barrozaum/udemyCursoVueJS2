import Vue from 'vue'
import Vuex from 'vuex'
import carrinho from './modulo/carrinho'
import parametro from './modulo/parametro'

import * as getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nome: 'Maria',
        sobrenome: 'Silva'
    },
    getters : {
        ...getters
    },
    modules: { carrinho, parametro },


})