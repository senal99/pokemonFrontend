import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material/';
import Modal from '@mui/material/Modal';
import AlertBox from '../components/AlertBox';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState } from 'react';
import useGetToken from '../hooks/useGetToken';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
};

export default function DeleteModal({turnOff}) {
    const { detailPokemon } = useSelector((state) => state.pokemon)
    const navigate = useNavigate();
    const handleClose = () => turnOff(false);
    const [message, setMessage] = useState({ message: 'Pokemon Updated!', type: 'delete' });
    const [showButton, setShowButton] = useState(true)
    const token = useGetToken();

    const handleCancel = () => {
        navigate('/')
    }

    const deleteTheData = async () => {
        const res = await axios.delete(`http://localhost:3000/pokemon/${detailPokemon._id}`,{
            headers: {
                "Authorization" :  `Bearer ${token.token}`
            }
        })
            .then(function (res) {
                if (res.status == '200') {
                    setMessage({ message: 'Pokemon Deleted!', type: 'success' });
                    setShowButton(false)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <Modal
                open={true}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <AlertBox message={message} />
                    <Box
                        display='flex'
                        justifyContent='center'
                    >
                        <Stack direction={'row'} gap={2}>
                            <Button
                                variant='outlined'
                                onClick={handleCancel}
                                sx={{ borderColor: 'orange', color: 'orange', marginTop: '10px' }}>Go Home
                            </Button>
                            {showButton &&
                                <Button
                                    variant='contained'
                                    onClick={deleteTheData}
                                    sx={{ bgcolor: 'red', marginTop: '10px' }}>Delete
                                </Button>
                            }
                        </Stack>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}