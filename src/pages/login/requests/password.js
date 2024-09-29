import api from '../../../services/api';

export default function passwordRequest(setLoading,setStatus,email){
    setLoading(true)

    const body = {
        "email": email
    }

    setLoading(false)
}