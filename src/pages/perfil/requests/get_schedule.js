import api from '../../../services/api';

export default function getSchedule(setloading,setstatus,setSchedules){

    setloading(true)

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    api.get('/user/schedule',{headers: headers})
    .then(response => {
        if(String(response).toLowerCase() === "network"){
            setstatus("network")
        }else if(response.status === 404){
            setSchedules([])
        }else{
            setSchedules(response.data)
        }
    })

}