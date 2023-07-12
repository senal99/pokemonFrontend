import { Box, Button, Stack } from "@mui/material";
import image from '../assets/pl.png'
import { useNavigate } from "react-router-dom";

const TopBar = () => {
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
                height={75}
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
                                    color: "#FFC123", fontWeight: "bold",
                                    '&:hover': {
                                        backgroundColor: "#525252",
                                        color: "white",
                                        transition: 'transform 0.2s',
                                        transform: 'scale(1.1)'
                                    }
                                }} > Go Home</Button>
                            <Button
                                onClick={addPoke}
                                sx={{
                                    color: "#FFC123", fontWeight: "bold",
                                    '&:hover': {
                                        backgroundColor: "#525252",
                                        color: "white",
                                        transition: 'transform 0.2s',
                                        transform: 'scale(1.1)'
                                    }
                                }}  >Add Poke</Button>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </>
    );
}

export default TopBar;