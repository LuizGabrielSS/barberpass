import api from '../../../services/api';

export default function saveChanges(setoriginalState,state,setloading,setStatus){

    setloading(true)

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    const body = {
        "id": state.id,
        "email": state.email,
        "username": state.user,
        "id_modalidade": state.id_modalide,
        "data": {
            "id": state.id_data,
            "telefone": state.number,
            "foto": state.picture,
            "corporativo": state.corporativo,
            "id_empresa": state.id_empresa,
            "id_plano": state.id_plano,
        }
    }

    api.patch('/user',body,{headers: headers})
    .then(response => {
        if(String(response).toLowerCase() === "network"){
            setStatus("network")
        }else if(response.status === 404){
            window.location = `${process.env.REACT_APP_URL}/login`
        }else{
            setoriginalState(state)

            setloading(false)
        }
    })

}