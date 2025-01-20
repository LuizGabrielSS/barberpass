import api from '../../../services/api';
import store from '../../../redux'


export default function UserRequest(setloading,setstatus,dispatch,setoriginalState,state){

    setloading(true)

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    api.get('/user/',{headers: headers})
    .then(response => {
        console.log(response)
        if(String(response).toLowerCase() === "network"){
            setstatus("network")
        }else if(response.status === 404){

        }else{
            const data = response.data
            dispatch({
                label:'user',
                value:data.username
            })
        
            dispatch({
                label:'email',
                value:data.email
            })
        
            dispatch({
                label:'number',
                value:data.data.number
            })

            dispatch({
                label:'picture',
                value:data.data.picture
            })

            setoriginalState({
                'user':data.username,
                'email':data.email,
                'number':data.data.number,
                'picture':data.data.picture
            })
        }
    })

    dispatch({
        label:'modalidade',
        value:store.getState().user.modalidade
    })

    setloading(false)

}