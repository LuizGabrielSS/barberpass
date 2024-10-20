import api from '../../../services/api';
import {keep} from '../../../services/keep_token'
import store from '../../../redux'
import { setUser,setEmail,setModalidade,setName,setNumber,setPicture } from '../../../redux/reducers/user'

export default function saveChanges(setoriginalState,state,setloading,setStatus){

    setloading(true)

    store.dispatch(setUser(state.user))

    store.dispatch(setEmail(state.email))

    store.dispatch(setModalidade(state.modalidade))

    store.dispatch(setName(state.name))

    store.dispatch(setNumber(state.number))

    store.dispatch(setPicture(state.picture))

    setoriginalState(state)

    setloading(false)

}