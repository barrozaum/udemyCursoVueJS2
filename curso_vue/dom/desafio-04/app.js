new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		perigo : true,
		classe3 : '',
		classe4 : '',
		cor5 : '',
		estilo5 : {
			width : 100,
			height : 100
		},
		width : 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 200);
		},
		iniciarProgresso() {
			console.log("iniciarProgresso")
			let valor = 0
			const temporizador = setInterval(() =>{
				valor += 5
				this.width = `${valor}%`;
				if(valor == 100) clearInterval(temporizador)
			}, 500)
		},
		setPerigo(event){
			if(event.target.value=="true")
			this.perigo = true;
			else
			this.perigo = false;
		}
	}
})
