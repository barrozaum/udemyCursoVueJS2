<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário <strong>{{inverteNome()}}</strong></p>
         <p>Idade do usuário : <strong> {{idade}} </strong></p>
        <button @click="reiniciarNome">Reiniciar Nome </button>
        <button @click="reiniciarFn()">Reiniciar Nome (calback) </button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props : {
        nome : {
            type : String,
            required: true
            //default : "Anonimo"
            //default : function(){
            //   return   Array(10).fill(0).join(',')
            //}
        },
        reiniciarFn : Function,
        idade :  {
            type : Number,
            required : true
        }
    },
    methods: {
        inverteNome(){
            return this.nome.split('').reverse().join('');
        },
        reiniciarNome(){
            this.$emit('nomeMudou', 'Pedro');
        }
    },created() {
        barramento.quandoIdadeMudar(idade =>{
            this.idade = idade
        })
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
