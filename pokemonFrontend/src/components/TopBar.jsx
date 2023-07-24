import { Box, Button, Stack } from "@mui/material";
import image from '../assets/pl.png'
import { useNavigate } from "react-router-dom";
import { Auth } from 'aws-amplify';

const TopBar = () => {
    async function signOut() {
        try {
            await Auth.signOut();
            navigate(0)
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    const navigate = useNavigate();
    const goHome = () => {
        navigate('/')
    }

    const addPoke = () => {
        navigate('/add')
    }

    return (
        <>
            <Box
                height={100}
                display='flex'
                alignItems='center'
                justifyContent='center'
                sx={{
                    background: 'linear-gradient(to right, #1F1F1F, #1F1F1F)'
                }}
            >
                <Box sx={{ width: '90%' }}>
                    <Stack direction="row" justifyContent="space-between" gap="40px">
                        <img src={image} width={150} alt="logo" />
                        <Stack direction="row" gap={4}>
                            <Button
                                onClick={goHome}
                                sx={{
                                    color: "#e3e3e3",
                                    '&:hover': {
                                        backgroundColor: "#525252",
                                        color: "white",
                                        transition: 'transform 0.2s',
                                        transform: 'scale(1.1)'
                                    }
                                }} > Go Home</Button>
                            <Button
                            variant="outlined"
                                onClick={addPoke}
                                sx={{
                                    borderColor :'#FFC123',
                                    color: "#e3e3e3",
                                    '&:hover': {
                                        backgroundColor: "#525252",
                                        borderColor :'#FFC123',
                                        color: "white",
                                        transition: 'transform 0.2s',
                                        transform: 'scale(1.1)'
                                    }
                                }}  >Add Poke</Button>
                                <Button
                    
                                onClick={signOut}
                                sx={{
                                    borderColor :'#FFC123',
                                    color: "#e3e3e3",
                                    '&:hover': {
                                        backgroundColor: "#525252",
                                        borderColor :'#FFC123',
                                        color: "white",
                                        transition: 'transform 0.2s',
                                        transform: 'scale(1.1)'
                                    }
                                }}  >Sign Out</Button>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </>
    );
}

export default TopBar;