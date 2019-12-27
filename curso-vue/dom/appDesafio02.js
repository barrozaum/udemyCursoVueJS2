new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertar(){
            alert("Pressionou");
        },
        armazeneValor(event){
         this.valor = event.target.value;
        }
    },
})