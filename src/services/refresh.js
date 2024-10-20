import axios from 'axios'
import store from '../redux'
import { setToken, setRefreshToken } from '../redux/reducers/auth'
import { setUser } from '../redux/reducers/user'
import { keep,recovery } from './keep_token'

const url = process.env.REACT_APP_API_URL

const refresh_api = axios.create({
    baseURL: url
})

refresh_api.interceptors.request.use(
    config => {
        recovery()
        config.headers['Authorization'] = `Bearer ${store.getState().auth.refresh}`
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

refresh_api.interceptors.response.use(
    async function (response){
        return response
    },
    async function(error){
        if(String(error.code).toUpperCase() === "ERR_NETWORK" || String(error.code).toUpperCase() === "ERR_CONNECTION_REFUSED"){

            //erro de rede

            return "network"

        }else if((error.response.status === 401 || error.response.status === 403 || error.response.status === 422)){

            return window.location = `${process.env.REACT_APP_URL}/login`

            //erro de autenticação
            //redirecionar para a tela de login
        }else{
            return Promise.reject(error)
        }
    }
)

export default function refresh(){

    const headers = {
        'Content-Type': 'application',
        'Accept': 'application/json'
    }

    refresh_api.post('/login/refresh',{},{headers: headers})
    .then(async(res) => {
        store.dispatch(setToken(res.data.token))
        store.dispatch(setRefreshToken(res.data.refresh))
        store.dispatch(setUser(res.data.user))
        //guardando a token e a refresh
        keep(res.data.token,res.data.refresh,res.data.user)
        return res.status
    })
    .catch((err) => {
        return window.location = `${process.env.REACT_APP_URL}/login`
    })

}