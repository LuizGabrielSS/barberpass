import api from '../../../services/api';
import store from '../../../redux'
import { setToken,setRefreshToken,setUser } from '../../../redux/reducers/auth'

export default function signupRequest(setLoading,setStatus,user,password,number,modalidade,name,email){

    setLoading(true)

    const body = {
        "user": user,
        "password": password,
        "number":number,
        "modalidade":modalidade,
        "name":name,
        "email":email
    }


    
    setLoading(false)

}