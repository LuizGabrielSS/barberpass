export default function returnFields(dispatch,originalState,setloading){

    setloading(true)

    dispatch({label:'user',value:originalState.user})
    dispatch({label:'name',value:originalState.name})
    dispatch({label:'email',value:originalState.email})
    dispatch({label:'number',value:originalState.number})
    dispatch({label:'modalidade',value:originalState.modalidade})
    dispatch({label:'picture',value:originalState.picture})

    setloading(false)

}