import SearchBar from "./Search";
import { Box, Button, Divider, Stack } from "@mui/material";
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
                height={100}
                display='flex'
                alignItems='center'
                justifyContent='center'
                sx={{
                    background: 'linear-gradient(to right, #f2ab11, #f28d11)'
                }}
            >
                <Box sx={{ width: '90%' }}>
                    <Stack direction="row" gap="40px" divider={<Divider orientation="vertical" flexItem />}>
                        <img src={image} width={150} alt="logo" />
                        <Button onClick={goHome} variant="contained">Go Home</Button>
                        <Button onClick={addPoke} variant="contained">Add Poke</Button>
                    </Stack>
                </Box>
            </Box>
        </>
    );
}

export default TopBar;