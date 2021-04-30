<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
     <hr>
     <p><strong>Código :</strong> {{id }} / {{ this.$route.params.id}}</p>
     <p><strong>Completo :</strong> {{ $route.query.completo  ? 'sim' : 'não' }}</p>
     <p><strong>Lingua :</strong> {{ $route.query.lingua  }}</p>
     <hr/>
     <button primario @click="confirmou=true">Confirma</button>
     <div id="rodape">
      <H3>Curso vue</H3> 
    </div>
  </div>
</template>
<script>
export default {
  props : ['id'],
  data(){
    return{
      confirmou : false
    }
  },
  beforeRouteLeave (to, from, next) {
    if(this.confirmou){
      next();
    }else{
      if(confirm("Tem certeza ?")){
        next()
      }
    }
    next(false)
  }
}
</script>
<style>
  #rodape {
    margin-top: 3000px;
  }
</style>