<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário é : <strong>{{inverteNome()}}</strong></p>
        <p> Idade do usuário <strong>{{idade}}</strong></p>
        <button @click="reiniciarNome">Reinicializar Nome</button>
        <button @click="reiniciarFn">Reinicializar Nome (callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props : {
        nome : {
            type: String,
            //required : true,
            //default : 'Padrão'
            default : function(){
                return Array(10).fill(0).join('')
            }
        },
        reiniciarFn : Function,
        idade : Number
    },
    methods: {
        inverteNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            //const antigo = this.nome;
            this.$emit('nomeMudou', 'Pedro')
            //this.$emit('nomeMudou', {
            //    novo : this.nome,
            //   antigo
            //})
        }
    },
    created() {
        barramento.quandoIdadeMudar( idade =>{
            this.idade = idade;
        });
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
