new Vue({
    el : '#desafio',
    data : {
        nome:'Igor',
        idade : 28,
        imagem : 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },methods:{
        saudacao: function(){
            console.log(this)
            return this.titulo;
        },
        idadeVezesTres: function(){
              return this.idade * 3;  
        },
        randon: function(){
              return Math.random();  
        }
    }
})