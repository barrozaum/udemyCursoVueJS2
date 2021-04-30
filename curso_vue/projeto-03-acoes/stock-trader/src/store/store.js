import Vue from 'vue'
import Vuex from 'vuex'
import stock from './modulo/stocks'
import portifolio from './modulo/portifolio'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules :{
        stock,
        portifolio
    }
})