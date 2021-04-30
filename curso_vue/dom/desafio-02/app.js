new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },methods: {
        pressionar: function(){
            alert("Pressionado")
        },
        armazenar : function(event){
            this.valor = event.target.value;
        }

    },
})