import store from '../redux'
import CryptoJS from 'crypto-js'
import { setToken,setRefreshToken } from '../redux/reducers/auth'
import { setUser, setEmail, setNumber, setModalidade, setName, setPicture } from '../redux/reducers/user'

export function keep(token,refresh,user){

    const token_encrypted = CryptoJS.AES.encrypt(token,process.env.REACT_APP_SECRET_TOKEN).toString()

    const refresh_encrypted = CryptoJS.AES.encrypt(refresh,process.env.REACT_APP_SECRET_REFRESH).toString()

    const user_encrypted = CryptoJS.AES.encrypt(user,process.env.REACT_APP_SECRET_USER).toString()

    const secrets = {
        "token": token_encrypted,
        "refresh": refresh_encrypted,
        "user":user_encrypted,
        "email": store.getState().user.email,
        "number": store.getState().user.number,
        "modalidade": store.getState().user.modalidade,
        "name": store.getState().user.name,
        "picture": store.getState().user.picture
    }

    const all_secrets = CryptoJS.AES.encrypt(String(secrets),process.env.REACT_APP_SECRET).toString()

    localStorage.setItem('crypto',all_secrets)

    return true

}

export function recovery(){

    const token_store = store.getState().auth.token

    if(token_store !== null){

        return true

    }else{

        const secrets = localStorage.getItem('crypto')

        if(secrets !== null){

            const bytes  = CryptoJS.AES.decrypt(secrets, process.env.REACT_APP_SECRET);

            const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))

            const token = CryptoJS.AES.decrypt(decryptedData.token, process.env.REACT_APP_SECRET_TOKEN).toString(CryptoJS.enc.Utf8)

            const refresh = CryptoJS.AES.decrypt(decryptedData.refresh, process.env.REACT_APP_SECRET_REFRESH).toString(CryptoJS.enc.Utf8)

            const user = CryptoJS.AES.decrypt(decryptedData.user, process.env.REACT_APP_SECRET_USER).toString(CryptoJS.enc.Utf8)

            store.dispatch(setToken(token))
            
            store.dispatch(setRefreshToken(refresh))

            store.dispatch(setUser(user))

            store.dispatch(setEmail(decryptedData.email))

            store.dispatch(setNumber(decryptedData.number))

            store.dispatch(setModalidade(decryptedData.modalidade))

            store.dispatch(setName(decryptedData.name))

            store.dispatch(setPicture(decryptedData.picture))

            // adicionar uma funcao para buscar as informacoes do usuario na API

            return true
        
        }else{

            return false
        }

    }
}

export function clean(){

    localStorage.removeItem('crypto')

    store.dispatch(setToken(null))

    store.dispatch(setRefreshToken(null))

    store.dispatch(setUser(null))

    return window.location = `${process.env.REACT_APP_URL}/login`

}