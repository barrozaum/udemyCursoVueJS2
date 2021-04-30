<template>
    <div>
        <h1 class>Negocie e consulte suas Ações</h1>
        <v-sheet :elevation="6" color="primary">
            <v-icon>info</v-icon>
            <span>Você pode Salvar & Carregar os Dados</span>
        </v-sheet>
        <v-divider class="my-4"/>
        <v-sheet :elevation="6" color="warning">
            <v-icon>info</v-icon>
            <span>Clique em 'Finalizar Dia' para iniciar um novo dia !</span>
        </v-sheet>
        <p><strong>Seu Saldo : </strong> {{funds | currency}}</p>
    </div>
</template>

<script>
export default {
    computed: {
        funds(){
            return this.$store.getters.funds
        }
    }
}
</script>

<style >

</style>