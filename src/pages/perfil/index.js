import React, {useReducer, useState, useEffect} from 'react'
import { Box } from '@mui/material';

//Componente
import ContainerComponent from '../../components/container';
import UserRequest from './requests/init'
import LoadingDialogComponent from '../../components/loading';

//Screen
import ProfileClient from './cliente';


const initialState = {
    'email':null,
    'user':null,
    'number':null,
    'modalidade':null,
    'picture':null
}

const reducer = (state,action) => {
    return {
        ...state,
        [action.label]:action.value
    }
}

export default function ProfileScreen(){

    const[loading,setloading] = useState(true);
    
    const[status,setstatus] = useState(200);

    const[state,dispatch] = useReducer(reducer,initialState)
    
    const[originalState,setoriginalState] = useState(initialState)

    const[loadingUpdate,setloadingUpdate] = useState(false)

    useEffect(() => {
        UserRequest(setloading,setstatus,dispatch,setoriginalState,state)
    },[])

    return(
        <ContainerComponent
        loading={loading}
        status={status}
        >
            <Box
            pt={15}
            >
                <LoadingDialogComponent
                open={loadingUpdate}/>
                {
                    state.modalidade !== null && String(state.modalidade) === "1"
                    ?   <ProfileClient
                        originalState={originalState}
                        state={state}
                        dispatch={dispatch}
                        setloading={setloadingUpdate}
                        setstatus={setstatus}
                        setoriginalState={setoriginalState}                        
                        />
                    : null
                }
            </Box>
        </ContainerComponent>
    )

}