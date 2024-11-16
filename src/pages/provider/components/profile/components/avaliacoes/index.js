import React, {useEffect, useState} from 'react'
import { Box, Typography,Rating,Avatar } from '@mui/material'
import { styled } from '@mui/material/styles';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

import ButtonComponent from '../../../../../../components/button'

const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error" />,
      label: 'Muito decepcionado',
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" />,
      label: 'Decepcionado',
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" />,
      label: 'Neutro',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" />,
      label: 'Satisfeito',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" />,
      label: 'Feliz',
    },
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
      color: theme.palette.action.disabled,
      fontSize: '3rem', // Increase the size of empty icons
    },
    '& .MuiRating-icon .MuiSvgIcon-root': {
      fontSize: '3rem', // Increase the size of empty icons
    },
}));

function stringToColor(string){

    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for( i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xFF;
        color += `00${value.toString(16)}`.substr(-2);
    }

    return color;

}

function stringAvatar(name) {

    try{
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        }
    }
    catch{
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}`,
        }
    }

}

function ItemComponent({item}){

    return(
        <Box
        m={1}
        >
            <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            m={1}
            >
                <Box
                m={1}
                >
                    <Avatar
                    {...stringAvatar(item.nome)}
                    />
                </Box>
                <Box>
                    <Typography
                    variant={
                        window.innerWidth> 420 
                        ? "h6"
                        : "body1"
                    }
                    >
                        <strong>{item.nome}</strong>
                    </Typography>
                </Box>
            </Box>
            <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            m={1}
            >
                <Typography
                    variant={
                        window.innerWidth> 420 
                        ? "h6"
                        : "body1"
                    }
                    >
                        {item.comentario}
                    </Typography>
            </Box>
            <Box
                m={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexGrow={1}
                >
                    <StyledRating
                    name="customized-icons"
                    defaultValue={item.nota}
                    getLabelText={(value) => customIcons[value].label}
                    IconContainerComponent={IconContainer}
                    highlightSelectedOnly
                    readOnly
                    />
            </Box>
        </Box>
    )
}

export default function AvalicoesComponent({avaliacoes}){

    const[rate,setrate] = useState(1)

    const[open,setopen] = useState(false)

    useEffect(() => {
        let sum = 0
        avaliacoes.map((item) => {
            sum += item.nota
        })
        setrate(Math.floor(sum/avaliacoes.length))
    },[rate,avaliacoes])

    return(
        <Box>
            <Box
                m={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexGrow={1}
                >
                    <Typography
                    variant={
                        window.innerWidth> 420 
                        ? "h4"
                        : "h6"
                    }
                    >
                        Avaliações
                    </Typography>
                </Box>
                <Box
                m={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexGrow={1}
                >
                    <StyledRating
                    name="customized-icons"
                    value={rate}
                    IconContainerComponent={IconContainer}
                    highlightSelectedOnly
                    readOnly
                    getLabelText={(value) => customIcons[value].label}
                    sx={{ fontSize: '2rem' }} // Increase the size of the icons
                    />
                </Box>
                <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexGrow={1}
                m={1}
                >
                    <ButtonComponent
                    action={() => setopen(!open)}
                    text={
                        open
                        ? "Fechar"
                        : "Ver Avaliações"
                    }
                    color='primary.main'
                    />
                </Box>
                {
                    open
                    ?   <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        m={1}
                        >
                            {
                                avaliacoes.map((item) => (
                                    <ItemComponent
                                    item={item}
                                    />
                                ))
                            }
                        </Box>
                    : null
            }
        </Box>
    )

}