new Vue({
    el:"#app",
    data :{
        playerLife : 10,
        monsterLife : 0,
        running: false,
        logs: []
    }, 
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame(){
            this.playerLife = 100;
            this.monsterLife = 100;
            this.running = true;
            this.logs= [];
        },
        atack(especial){
            this.hurt('monsterLife', especial, 5, 10, 'Jogador', 'Mostro', 'player');
            if(this.monsterLife > 0){
                this.hurt('playerLife', false, 7, 12, 'Mostro', 'Jogador',  'monster');
            }
        },
        hurt(prop, especial, min, max, origem, alvo, cls){
            const plus = especial  ? 5 : 0;
            const hurt = this.getRandom(min + plus, max + plus);
            this[prop] = Math.max(this[prop] - hurt, 0); // pegar maior numero 
            this.registerLog(`${origem} atingiu ${alvo} com  ${hurt}` , cls);
        },
        heal(min, max){
            const heal = this.getRandom(min, max);
            this.playerLife = Math.min(this.playerLife + heal, 100); // pegar maior numero 
            this.registerLog(`Jogador ganhou força de ${heal}` , 'player');
        },
        healAndHurt(){
            this.heal(10,15);
            this.hurt('playerLife', false, 7, 12 ,'Mostro', 'Jogador',  'monster');
        },

        getRandom(min, max){
            const value = Math.random() * (max-min) + min;
            return Math.round(value);
        },
        registerLog(text, cls){
            this.logs.unshift({text, cls});
            console.log(this.logs)
        }
    },
    watch: {
        hasResult(value){
            if(value){
                this.running = false;
            }
        }
    },
})