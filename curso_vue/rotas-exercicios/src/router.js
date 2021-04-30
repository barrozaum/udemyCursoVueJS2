import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
//import Usuario from './components/usuario/Usuario.vue'
//import UsuarioLista from './components/usuario/UsuarioLista.vue'
//import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
//import UsuarioEditar from './components/usuario/UsuarioEditar.vue'
import Menu from './components/template/Menu'
import Menu_Alternativo from './components/template/Menu_alter'

Vue.use(Router);
//carregamento tardio layze de rotas num mesmo arquivo
const Usuario = () => import (/* webpackChunkName: "usuario" */'./components/usuario/Usuario.vue')
const UsuarioEditar = () => import (/* webpackChunkName: "usuario" */'./components/usuario/UsuarioEditar.vue')
const UsuarioLista = () => import (/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista.vue')
const UsuarioDetalhe = () => import (/* webpackChunkName: "usuario" */'./components/usuario/UsuarioDetalhe.vue')


const router = new Router({
    mode:'history',
    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition
        }else if(to.hash){
            return { selector : to.hash}
        }else{
            return {x : 0, y : 0}
        }
    },
    routes:[{
        path: '/',
        name : 'inicio',
        //component: Inicio,
        components : {
            default : Inicio,
            menu : Menu
        }
    },{
        path:'/usuario',
        //component: Usuario,
        components : {
            default : Usuario,
            menu : Menu_Alternativo,
            menuInferior : Menu_Alternativo
        },
        props : true,
        children : [
            { path : '' , component : UsuarioLista},
            {   path : ':id' ,
                component : UsuarioDetalhe , props : true,
                beforeEnter : (to,from,next)=>{
                    console.log("antes da rota -> usuario Detalhe");  
                    next()
                }
            },
            { path : ':id/editar' , component : UsuarioEditar , props : true, 
                name : 'editarUsuario'}
        ]
    }, {
        path : '/redirecionar',
        redirect :'/usuario'
    }, {
        path : '*',
        redirect :'/'
    }]
})

router.beforeEach((to, from, next) => {
    console.log("antes das rotas -> global")
    //if(to.path !== '/usuario')
    //next('/usuario');
    //else
    next()
})
export default router