import { Box, Button } from '@mui/material'
import { useSelector } from 'react-redux';

export default function ButtonComponent({text,action,variant="outlined",color="secondary",status=false}){

    const theme = useSelector((state) => state.mode.darkmode);

    return(
        <Box m={1}>
            <Button
                size="large"
                variant={variant}
                onClick={action}
                color={color}
                disabled={status}
                sx={{
                    '&.Mui-disabled': {
                        color:theme.mode === "dark" ? '#rgb(181, 174, 164)' : 'gray', // Altere 'gray' para a cor desejada
                        borderColor: theme.mode === "dark" ? '#rgb(181, 174, 164)' : 'gray' // Altere 'gray' para a cor desejada
                    }
                }}
            >
                {text}
            </Button>
        </Box>
    )
}
