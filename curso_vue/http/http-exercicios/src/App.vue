<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" 
			:key="mensagem.texto" :variant="mensagem.tipo">
			{{mensagem.texto}}
		</b-alert>
		<b-card>
			<b-form-group label="Nome :">
				<b-form-input type ="text" size="lg" v-model="usuario.nome" placeholder="informe o nome" />
			</b-form-group>
			<b-form-group label="E-mail :">
				<b-form-input type ="email" size="lg" v-model="usuario.email" placeholder="informe o e-mail" />
			</b-form-group>
			<b-button @click="salvar()" size="lg" variant="primary">Salvar</b-button>
			<b-button @click="obterUsuario" size="lg" variant="success" class="ml-2">Obter Usuario</b-button>
		</b-card>
		<hr />
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome:</strong> {{usuario.nome}}<br />
				<strong>Email:</strong> {{usuario.email}}<br />
				<strong>Id:</strong> {{usuario.id}}<br />
				<b-button variant="warning" size="lg" @click="carregar(id)"> Carregar </b-button>
				<b-button variant="danger" size="lg" class="ml-2" @click="excluir(usuario.id)"> Excluir </b-button>
			</b-list-group-item>
		</b-list-group>

	</div>
</template>

<script>
export default {
	data(){
		return {
			mensagens : [],
			usuarios : [],
			id: null,
			usuario : {
				nome : '',
				email: '',
			}
		}
	}, methods: {
		limpar(){
			this.usuario.nome='';
			this.usuario.email='';
			this.id =null;
			this.mensagens = [];
		},
		salvar(){
			const method =  this.id ? 'patch' : 'post';
			const finalUrl = this.id ? `${this.id}.json` : `.json`;
			this.$http[method](`/usuarios/${finalUrl}`, this.usuario)
			.then( _ => {
				this.limpar(),
				this.mensagens.push({'texto': 	'Operação realizado com sucesso',
									 'tipo' : 'success' })
				})
		},
		carregar(id){
			this.usuario = { ...this.usuarios[id] };
			this.id = this.usuario.id;
			this.usuario.id=null;
		},
		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`)
			.then(()=> {
				this.limpar(),
				this.mensagens.push({'texto': 	'Excluido  com sucesso',
									 'tipo' : 'success' })
				})
			.catch(_ => {
				this.mensagens.push({'texto': 	'Problema pra exclui',
									 'tipo' : 'danger' })
				})
		},
		obterUsuario(){
			this.$http.get('usuarios.json').then(resp => {
				this.usuarios = resp.data
				console.log("obeter retorno")
				console.log(resp.data)
			})
		}
	},

	//created() {
	//	this.$http.post('usuarios.json', {
	//	nome : 'Maria',
	//		email : 'maria_maria@gmail.com'})
	//	.then(res => console.log(res))
	//}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
