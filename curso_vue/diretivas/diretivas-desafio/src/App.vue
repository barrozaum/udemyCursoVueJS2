<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<button v-quando:click="acao">Executar</button>
		<p v-quando:mouseenter="mouseEnter"
		v-quando:mouseleave="mouseLeave"
		>Teste mouse event</p>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
	</div>
</template>

<script>
export default {
	directives : {
		quando : {
			bind(el , binding){
				//el.onclick = function(e){
				//	binding.value();
				//}	

				const tipo = binding.arg;
				const fn = binding.value;
				el.addEventListener(tipo, fn)
			}
		}
	},
	data() {
		return {
			acao(){
				alert('Ação executada !!!')
			},
			mouseEnter(){
				alert('mouse enter')
			},
			mouseLeave(){
				alert("mouseLeave")
			}
		}
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
