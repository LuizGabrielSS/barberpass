import { Box, Button } from '@mui/material'

export default function ButtonComponent({text,action,variant="outlined",color="secondary"}){

    return(
        <Box
        m={1}
        >
            <Button
            size="large"
            variant={variant}
            onClick={action}
            color={color}
            >
                    {text}
            </Button>
        </Box>
    )
}
