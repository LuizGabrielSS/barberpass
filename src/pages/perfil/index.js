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
    'id_modalide':null,
    'picture':null
}

const reducer = (state,action) => {
    return {
        ...state,
        [action.label]:action.value
    }
}

export default function ProfileScreen(){

    const[loading,setloading] = useState(false);
    
    const[status,setstatus] = useState(200);

    const[state,dispatch] = useReducer(reducer,initialState)
    
    const[originalState,setoriginalState] = useState(initialState)

    const[loadingUpdate,setloadingUpdate] = useState(false)

    const[schedules,SetSchedules] = useState([])

    useEffect(() => {
        UserRequest(setloading,setstatus,dispatch,setoriginalState,state)
    },[])

    return(
        <ContainerComponent
        loading={loading}
        status={status}
        >
            <Box
            pt={4}
            sx={{
                background: 'linear-gradient(to right, #b87333, rgb(181, 174, 164))', // Gradient background
                backgroundAttachment: 'fixed', // Make the background fixed
            }}
            >
                <LoadingDialogComponent
                open={loadingUpdate}/>
                {
                    state.id_modalide !== null && String(state.id_modalide) === "1"
                    ?   <ProfileClient
                        originalState={originalState}
                        state={state}
                        dispatch={dispatch}
                        setloading={setloadingUpdate}
                        setstatus={setstatus}
                        setoriginalState={setoriginalState}      
                        schedules={schedules}
                        SetSchedules={SetSchedules}	         
                        />
                    : null
                }
            </Box>
        </ContainerComponent>
    )

}