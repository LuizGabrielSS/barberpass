function validate_field(new_value,old_value){

    if(new_value !== null){
        if(String(new_value).replace(" ","").length > 0){
            if(String(new_value) === String(old_value)){
                return null
            }else{
                return true
            }
        }else{
            return false
        }
    }else{
        return null
    }
}

export default function validate_changes(state,setbuttonstatus,setbuttonresetstatus,originalState){

    const validate_email = validate_field(state.email,originalState.email)

    const validate_user = validate_field(state.user,originalState.user)

    const validate_number = validate_field(state.number,originalState.number)

    const validate_name = validate_field(state.name,originalState.name)

    const validate_modalidade = validate_field(state.modalidade,originalState.modalidade)

    const validate_picture = validate_field(state.picture,originalState.picture)
    
    if(validate_user === null && validate_email === null && validate_number === null && validate_name === null && validate_modalidade === null && validate_picture === null){
        setbuttonstatus(false)
        setbuttonresetstatus(false)
    }else if(validate_user === false || validate_email  === false || validate_number  === false || validate_name  === false || validate_modalidade  === false || validate_picture === false){
        setbuttonstatus(false)
        setbuttonresetstatus(true)
    }else{
        setbuttonstatus(true)
        setbuttonresetstatus(true)
    }

}