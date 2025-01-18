import api from '../../../services/api';
import {keep} from '../../../services/keep_token'
import store from '../../../redux'
import { setUser } from '../../../redux/reducers/user'
import { setToken,setRefreshToken } from '../../../redux/reducers/auth'

export default function signupRequest(setLoading,setStatus,password,modalidade,name,email,dispatchDialog,navegacao){

    setLoading(true)

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }

    const body = {
        "email": email,
        "password": password,
        "username":name,
        "modalidade":modalidade
    }

    api.post('/access/signup',body,{headers: headers})
    .then(response => {
        if(String(response).toLowerCase() === "network"){
            setStatus("network")
        }else if(response.status === 400){
            // Dados preenchidos de maneira incorreta
            console.log(response)

            dispatchDialog({
                label:'title',
                value:'Erro tentando criar usuario'
            })
        
            dispatchDialog({
                label:'text',
                value:response.data.message
            })

            dispatchDialog({
                label:'open',
                value:true
            })

            dispatchDialog({
                label:'action',
                value:false
            })

        }else{
            // o usuario foi encontrado
            store.dispatch(setToken(response.data.token))
            store.dispatch(setRefreshToken(response.data.refresh))
            store.dispatch(setUser(response.data.username))
            keep(response.data.token,response.data.refresh,response.data.username)

            dispatchDialog({
                label:'title',
                value:'Usuario criado com sucesso'
            })
        
            dispatchDialog({
                label:'text',
                value:'Usuario criado com sucesso, bem vindo ao Soinpass'
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
    })
    
    setLoading(false)

}