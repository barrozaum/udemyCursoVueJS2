export default {
    state : {
        quantidade : 10,
        preco :20
    },
    mutations : {
        setQuantidade(state, payload){
            state.quantidade = payload  
        },
        setPreco(state, payload){
            state.preco = payload  
        }
    }
}