import axios from 'axios'
import refresh from './refresh'
import store from '../redux'
import { recovery } from './keep_token'

const url = process.env.REACT_APP_API_URL

const api = axios.create({
    baseURL: url
})

api.interceptors.request.use(
    config => {
        console.log(config)
        // recovery()
        // config.headers['Authorization'] = `Bearer ${store.getState().auth.token}`
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    async function(response){
        return response
    },

    async function (error){

        if(String(error.code).toUpperCase() === "ERR_NETWORK" || String(error.code).toUpperCase() === "ERR_CONNECTION_REFUSED"){

            //erro de rede

            return "network"

        }else if((error.response.status === 401 || error.response.status === 403 || error.response.status === 422) && error.response.config.url !== "/login"){
            if(error.response.config.url === "/refresh"){
                return window.location = `${process.env.REACT_APP_URL}/login`
                //erro de autenticação
                //redirecionar para a tela de login
            }
            //erro de autenticação
            //redirecionar para a tela de login
            const response = await refresh();
            return response
        }
        else{
            return Promise.reject(error)
        }
    }
)

export default api