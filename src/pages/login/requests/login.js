import api from '../../../services/api';
import {keep} from '../../../services/keep_token'
import store from '../../../redux'
import { setToken,setRefreshToken } from '../../../redux/reducers/auth'
import { setUser } from '../../../redux/reducers/user'

export default function loginRequest(setLoading,setStatus,email,password,dispatchDialog,navegacao){

    setLoading(true)

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    const body = {
        "email": email,
        "password": password
    }

    api.post('/access/login',body,{headers: headers})
    .then(response => {
        if(String(response).toLowerCase() === "network"){
            setStatus("network")
        }else if(response.status === 400){
            dispatchDialog({
                label:'title',
                value:'Usuario não encontrado'
            })
        
            dispatchDialog({
                label:'text',
                value:'Por favor, verifique os dados inseridos e tente novamente'
            })
    
            dispatchDialog({
                label:'action',
                value:false
            })

            dispatchDialog({
                label:'open',
                value:true
            })    
            // o usuario não foi encontrado
            // console.log(response)
        }else{
            // o usuario foi encontrado
            store.dispatch(setToken(response.data.token))
            store.dispatch(setRefreshToken(response.data.refresh))
            store.dispatch(setUser(response.data.username))
            keep(response.data.token,response.data.refresh,response.data.username)

            dispatchDialog({
                label:'title',
                value:'Login realizado com sucesso'
            })
        
            dispatchDialog({
                label:'text',
                value:'Login realizado, bem vindo ao Soinpass'
            })
    
            dispatchDialog({
                label:'action',
                value:true
            })

            dispatchDialog({
                label:'open',
                value:true
            })
        }
        setLoading(false)
    })
}