export default {
    namespaced: true,
    state : {
        produtos: [],
    },
    getters : {
        valorTotal(state){
            return state.produtos.map(p => p.quantidade * p.preco)
            .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations : {
        adicionarProduto(state, payload){
            state.produtos.push(payload);
        }
    },
    actions : {
        adicionarProduto ({commit}, payload){
            setTimeout(() => {
                   commit('adicionarProduto', payload) 
            }, 1000);
            // JOGANDO FUNÇÃO NO RAIZ
            // root: true,
            // handler({commit}, payload){
            //    setTimeout(() => {
            //        commit('adicionarProduto', payload) 
            //    }, 1000);
            //}
        }
    }
}