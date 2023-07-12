import SearchBar from "./Search";
import { Box, Stack, Divider, Button, Typography } from "@mui/material";
import image from '../assets/pl.png'
import { useNavigate } from "react-router-dom";

const BannerBox = () => {
    const navigate = useNavigate();
    const addPoke = () => {
        navigate('/add')
    }

    return (
        <>
            <Box
                height={270}
                display='flex'
                alignItems='center'
                justifyContent='center'
                bgcolor='teal'
                sx={{
                    background: 'linear-gradient(to right, #1F1F1F, #1F1F1F)'
                }}
            >
                <Stack
                    width={'100%'}
                    direction={'row'}
                    divider={<Divider orientation="vertical" color='white' flexItem />}
                    gap={10}
                    padding={17}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >

                    <Stack width={'65%'}>
                        <Box>
                            <img src={image} width={200} alt="logo" />
                            <SearchBar />
                        </Box>
                    </Stack>
                    <Stack width={'35%'}>
                        <Box>
                            <Stack>
                                <Stack>
                                    <Typography variant="h6" component='div' color={'white'} paddingTop={1} >
                                        Wanna Add a Pokemon?
                                    </Typography>
                                </Stack>
                                <Stack>
                                    <Button variant="contained" sx={{
                                        backgroundColor: "#e8d500",
                                        color: "black",
                                        width: "150px"
                                    }}
                                    onClick={addPoke}
                                    >Add Pokemon</Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}

export default BannerBox;