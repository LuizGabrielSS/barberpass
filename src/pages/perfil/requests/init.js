import api from '../../../services/api';

export default function UserRequest(setloading,setstatus,dispatch,setoriginalState,state){

    setloading(true)

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    api.get('/user',{headers: headers})
    .then(response => {
        if(String(response).toLowerCase() === "network"){
            setstatus("network")
        }else if(response.status === 404){
            window.location = `${process.env.REACT_APP_URL}/login`
        }else{
            const data = response.data
            if(String(data.id_modalidade) === "1"){
                const fields = {
                    'user': data.username,
                    'email': data.email,
                    'number': data.data.telefone,
                    'picture': data.data.foto,
                    'id': data.id,
                    'id_data': data.data.id,
                    'id_modalide': data.id_modalidade,
                    'corporativo': data.data.corporativo,
                    'id_empresa': data.data.id_empresa,
                    'id_plano': data.data.id_plano,
                };

                Object.keys(fields).forEach(key => {
                    dispatch({
                        label: key,
                        value: fields[key]
                    });
                });
    
                setoriginalState(fields)
            }
            
        }
        setloading(false)
    })

    // dispatch({
    //     label:'modalidade',
    //     value:store.getState().user.modalidade
    // })

}