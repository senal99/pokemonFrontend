import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AlertBox from '../components/AlertBox';
import { useNavigate } from 'react-router-dom';

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

export default function MessageModal({ message }) {
    const navigate = useNavigate();
    const handleClose = () => setOpen(false);
    const buttonClick =() =>{
        console.log("button clicked")
        navigate('/')
    }
    
    return (
        <div>
            <Modal
                open={true}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AlertBox message={message} />
                    <Box
                        display='flex'
                        justifyContent='center'
                    >
                        <Button
                            variant='contained'
                            onClick={buttonClick}
                            sx={{ bgcolor: 'orange', marginTop: '10px' }}>Continue
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}