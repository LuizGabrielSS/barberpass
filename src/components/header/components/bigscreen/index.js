import { Box } from '@mui/material'
import ButtonComponent from '../../../button'
import {Translator} from '../../../translate';

export default function BigScreen({localizacao,navegacao}){

    return(
        <Box
        mx={2}
        sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
        }}
        >
            <ButtonComponent
            action={()=> navegacao('/plans')}
            text={
                <Translator
                path="header.price"
                />
            }
            variant="outlined"
            />
            <ButtonComponent
            action={()=> navegacao('/contact')}
            text={
                <Translator
                path="header.contact"
                />
            }
            variant="outlined"
            />
            <ButtonComponent
            action={()=> navegacao('/map')}
            text={
                <Translator
                path="header.map"
                />
            }
            variant="outlined"
            />
        </Box> 
    )

}