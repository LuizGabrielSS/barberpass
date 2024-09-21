function validate_field(value){

    if(value === null){
        return false
    }else{
        if(value.replace(" ","").length > 0){
            return true
        }else{
            return false
        }
    }
}

export default function validate_fields(state,screen,setbuttonstatus){

    if(screen === 'password'){
        if(validate_field(state.email)){
            setbuttonstatus(true)
        }else{
            setbuttonstatus(false)
        }
    }else if(screen === 'login'){
        if(validate_field(state.email)){
            if(validate_field(state.password)){
                setbuttonstatus(true)
            }else{
                setbuttonstatus(false)
            }
        }else{
            setbuttonstatus(false)
        }
    }else if(screen === 'signup'){
        if(validate_field(state.name)){
            if(validate_field(state.number)){
                if(validate_field(state.email)){
                    if(validate_field(state.modalidade)){
                        if(validate_field(state.password)){
                            if(validate_field(state.repeat_password)){
                                if(state.password === state.repeat_password){
                                    setbuttonstatus(true)
                                }else{
                                    setbuttonstatus(false)
                                }
                            }else{
                                setbuttonstatus(false)
                            }
                        }else{
                            setbuttonstatus(false)
                        }
                    }else{
                    setbuttonstatus(false)
                }
                }else{
                    setbuttonstatus(false)
                }
            }else{
                setbuttonstatus(false)
            }
        }else{
            setbuttonstatus(false)
        }
    }
    
}