import api from '../../../services/api';
import {keep} from '../../../services/keep_token'
import store from '../../../redux'


export default function UserRequest(setloading,setstatus,dispatch,setoriginalState,state){

    setloading(true)
    
    dispatch({
        label:'name',
        value:store.getState().user.name
    })

    dispatch({
        label:'user',
        value:store.getState().user.user
    })

    dispatch({
        label:'email',
        value:store.getState().user.email
    })

    dispatch({
        label:'number',
        value:store.getState().user.number
    })

    dispatch({
        label:'modalidade',
        value:store.getState().user.modalidade
    })

    dispatch({
        label:'picture',
        value:store.getState().user.picture
    })

    setoriginalState({
        'name':store.getState().user.name,
        'user':store.getState().user.user,
        'email':store.getState().user.email,
        'number':store.getState().user.number,
        'modalidade':store.getState().user.modalidade,
        'picture':store.getState().user.picture
    })

    setloading(false)

}