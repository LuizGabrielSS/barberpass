import api from '../../../services/api';

export default function searchRequest(setLoading,setStatus,searchText,setData,position){

    setLoading(true)

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    const body = {
        "search": searchText,
        "location":position,
    }

    api.post('/provider',body,{headers: headers})
    .then(response => {
        if(String(response).toLowerCase() === "network"){
            setStatus("network")
        }else if(response.status === 204){
            setStatus("notfound")
        }else{
            setData(response.data)
        }
    })
    
    setLoading(false)
}