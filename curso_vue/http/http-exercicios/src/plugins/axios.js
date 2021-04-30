import Vue from 'vue'
import axios from 'axios'

// forma global
//axios.defaults.baseURL = "https://curso-vue-62362-default-rtdb.firebaseio.com/"
//axios.defaults.headers.common['Authorization'] = 'abc123';
//axios.defaults.headers.get['Accepts'] = 'application/json';

Vue.use({
    install(Vue){
     //   Vue.prototype.$http = axios
       Vue.prototype.$http = axios.create({
           baseURL : 'https://curso-vue-62362-default-rtdb.firebaseio.com/',
           headers : {
               "Authorization" : "abc1234"
           }
       })

    Vue.prototype.$http.interceptors.request.use(config => {
        console.log(config.method)
        //if(config.method == 'post'){
        //    config.method = 'put'
        //}
        return config;
    }, error => Promise.reject(error))
    
    Vue.prototype.$http.interceptors.response.use(res => {
        console.log("interceprot")
        const array = [];
        for(let chave in res.data){
            array.push({id : chave, ...res.data[chave] })
        }

        res.data = array;
        return res;

    }, error => Promise.reject(error));

    }
})