import store from '../redux'
import CryptoJS from 'crypto-js'
import { setToken,setRefreshToken,setUser } from '../redux/reducers/auth'

export function keep(token,refresh,user){

    const token_encrypted = CryptoJS.AES.encrypt(token,process.env.REACT_APP_SECRET_TOKEN).toString()

    const refresh_encrypted = CryptoJS.AES.encrypt(refresh,process.env.REACT_APP_SECRET_REFRESH).toString()

    const user_encrypted = CryptoJS.AES.encrypt(user,process.env.REACT_APP_SECRET_USER).toString()

    const secrets = {
        "token": token_encrypted,
        "refresh": refresh_encrypted,
        "user":user_encrypted
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

    return true

}