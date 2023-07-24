import SearchBar from "./Search";
import { Box, Stack, Divider, Button, Typography } from "@mui/material";
import image from '../assets/pika.png'
import { useNavigate } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify';


const BannerBox = () => {
    const navigate = useNavigate();
    const addPoke = () => {
        navigate('/add')
    }

    return (
        <>
            <Box
                height={450}
                display='flex'
                alignItems='center'
                justifyContent='center'
                bgcolor='teal'
                sx={{
                    backgroundColor: '#1F1F1F'
                }}
            >
                <Stack
                    width={'100%'}
                    direction={'row'}
                    gap={10}
                    padding={17}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Stack width={'50%'} paddingLeft={4} >
                        <Typography variant="h4" paddingBottom={2}>
                            One stop website to get all your poke Info
                        </Typography>
                        <SearchBar />
                    </Stack>
                    <Stack width={'50%'}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        paddingLeft={15}
                    >
                        <img src={image} alt="" width={'350px'} />
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}

export default BannerBox;