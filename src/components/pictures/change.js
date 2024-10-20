import React from 'react'
import { Box, Modal, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {Translator} from '../../components/translate'

export default function ChangePicture({dispatch,open,setopen}){

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const filePath = URL.createObjectURL(file);
            // console.log(filePath)
            dispatch({ label: 'picture', value: filePath });
            setopen(false);
        }
        setopen(false);
    };

    // const handleChange = async (e) => {
    //     const file = e.target.files[0];
    //     if (file && file.type.startsWith('image/')) {
    //         const formData = new FormData();
    //         formData.append('file', file);

    //         try {
    //             const response = await fetch('https://your-backend-api/upload', {
    //                 method: 'POST',
    //                 body: formData,
    //             });

    //             if (response.ok) {
    //                 const data = await response.json();
    //                 const filePath = data.filePath; // Assuming the backend returns the file path
    //                 dispatch({ label: 'picture', value: filePath });
    //             } else {
    //                 console.error('Failed to upload file');
    //             }
    //         } catch (error) {
    //             console.error('Error uploading file:', error);
    //         }
    //     }
    //     setopen(false);
    // };

    return (
        <Box>
            <Modal
                open={open}
                onClose={() => setopen(false)}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography id="modal-title" variant="h6" component="h2">
                            {/* Alterar imagem */}
                        </Typography>
                        <IconButton onClick={() => setopen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box
                        component="label"
                        sx={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            borderColor: '#b87333',
                            borderStyle:"dashed",
                            borderWidth: 1, // Add this line to set the border width
                            borderRadius: '9px',
                            cursor: 'pointer',
                            padding: 2, // Add padding for better appearance
                        }}
                    >
                        <Box>
                            <CameraAltIcon
                            sx={{
                                fontSize:window.innerWidth> 420 ?"990%" :"100%",
                                color:'#b87333'
                            }}
                            />
                            <Box
                            sx={{
                                display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            }}
                            >
                                <Typography
                                variant={
                                    window.innerWidth> 420 
                                    ? "h6"
                                    : "body1"
                                }
                                >
                                <Translator
                                path="perfil.title"
                                />
                            </Typography>
                            </Box>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleChange}
                                style={{ display: 'none' }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}