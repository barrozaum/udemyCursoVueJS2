new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    watch: {
         resultado(){
            setTimeout(() => {
                this.valor = 0
            }, 500);
        }
    },
    computed: {
        resultado() {
            return this.valor == 37 ?  'Valor Igual' :'Valor Diferente'
        },
    },
});