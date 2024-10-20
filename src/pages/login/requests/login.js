import api from '../../../services/api';
import {keep} from '../../../services/keep_token'
import store from '../../../redux'
import { setToken,setRefreshToken } from '../../../redux/reducers/auth'
import { setUser, setEmail, setNumber, setModalidade, setName, setPicture } from '../../../redux/reducers/user'

export default function loginRequest(setLoading,setStatus,email,password,dispatchDialog,navegacao){

    setLoading(true)

    if(email === "contato@soinpass.com" && password === "teste123"){

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
            value:navegacao('/')
        })

        // base data
        store.dispatch(setToken('test'))
        store.dispatch(setRefreshToken('test'))
        store.dispatch(setUser('User Test'))

        // user data
        store.dispatch(setEmail('contato@soinpass.com'))
        store.dispatch(setNumber('021 99999-9999'))
        store.dispatch(setModalidade({'id':'1','label':'cliente'},))
        store.dispatch(setName('Name test'))
        store.dispatch(setPicture(`${process.env.PUBLIC_URL}/logo/logo_without_back.png`))

        keep('test','test','User Test')

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

    // const headers = {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    // }

    // const body = {
    //     "email": email,
    //     "password": password
    // }

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