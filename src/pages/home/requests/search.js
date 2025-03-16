import api from '../../../services/api';
import data_init from '../../../mocks/services'

export default function searchRequest(setLoading,setStatus,searchText,setData,position){

    setLoading(true)

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    const params = {
        text: searchText,
        latitude: position['latitude'],
        longitude: position['longitude'],
        limit: 20
    }

    setData(data_init)

    // api.get('/provider/search', { params: params, headers: headers })
    // .then(response => {
    //     if(String(response).toLowerCase() === "network"){
    //         setStatus("network")
    //     }else if(response.status === 204){
    //         setStatus("notfound")
    //     }else{
    //         console.log(response)
    //         setData(response.data)
    //     }
    // })
    
    setLoading(false)
}