import { Box, Typography, Button } from '@mui/material'

export default function ButtonComponent({text,active,action,variant="outlined"}){

    return(
        <Box
        m={1}
        >
            <Button
            size="large"
            variant={variant}
            onClick={() => action}
            color="secondary"
            >
                    {text}
            </Button>
        </Box>
    )
}
