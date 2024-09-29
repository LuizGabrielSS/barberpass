import api from '../../../services/api';
import {keep} from '../../../services/keep_token'
import store from '../../../redux'
import { setToken,setRefreshToken,setUser } from '../../../redux/reducers/auth'


export default function loginRequest(setLoading,setStatus,email,password,dispatchDialog){

    setLoading(true)

    if(email === "teste" && password === "teste123"){

        dispatchDialog({
            label:'title',
            value:'Login realizado com sucesso'
        })
    
        dispatchDialog({
            label:'text',
            value:'Login realizado, bem vindo ao Soinpass'
        })


        store.dispatch(setToken('test'))
        store.dispatch(setRefreshToken('test'))
        store.dispatch(setUser('User Test'))

    }else{
            
        dispatchDialog({
            label:'title',
            value:'Erro ao tentar realizar o login'
        })
    
        dispatchDialog({
            label:'text',
            value:'Email ou senha incorretos'
        }) 

        
         
    }

    dispatchDialog({
        label:'open',
        value:true
    })

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    const body = {
        "email": email,
        "password": password
    }

    // api.post('/login',body,{headers: headers})
    // .then(response => {
    //     if(String(response).toLowerCase() === "network"){
    //         setStatus("network")
    //     }else if(response.status === 204){
    //         // o usuario não foi encontrado
    //         console.log('oi')
    //     }else{
    //         // o usuario foi encontrado
    //         store.dispatch(setToken(response.data.token))
    //         store.dispatch(setRefreshToken(response.data.refresh))
    //         store.dispatch(setUser(response.data.user))
    //         keep(response.data.token,response.data.refresh,response.data.user)
    //     }
    // })

    setLoading(false)

}