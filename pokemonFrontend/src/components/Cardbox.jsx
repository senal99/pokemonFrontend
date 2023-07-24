import { Box, Typography, Stack, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDetailPokemon } from '../redux/pokemon';
import image from '../assets/pika.png'
import { Flex } from "@aws-amplify/ui-react";
import { BorderColor } from "@mui/icons-material";

const Cardbox = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = (data) => {
        dispatch(setDetailPokemon(data))
        navigate(`/details`)
    }

    const { pokemonArray } = useSelector((state) => state.pokemon)

    return (
        <>
            <Box
                padding={2}
                display='flex'
                flexDirection="column"
                alignItems='center'
                justifyContent='center'
            >
                <Grid container spacing={4} justifyContent="center" width={'800px'}>
                    {pokemonArray.map((dataOne, index) => (
                        <Grid
                            item xs={12}
                            sm={12}
                            md={6}
                            display={'flex'}
                            justifyContent={'center'}>
                            <Box
                                key={index}

                                sx={{
                                    backgroundColor: '#343434',
                                    padding: '10px',
                                    textAlign: 'left',
                                    marginTop: '25px',
                                    transition: 'background-color 0.2s',
                                    transition: 'transform 0.3s',
                                    borderRadius: '20px',
                                    '&:hover': {
                                        backgroundColor: "#513500",
                                        color: "#F2A000",
                                        transform: 'scale(1.1)',
                                        borderStyle: 'solid',
                                        borderWidth: '1',
                                    }
                                }}
                                onClick={() => handleClick(dataOne)}
                            >
                                <Stack direction={'row'} sx={{ padding: '10px' }}>
                                    <Box
                                        width="100%"
                                        display='flex'
                                        justifyContent='center'>
                                        <img src={image} width={100} alt="logo" />
                                    </Box>
                                    <Box
                                        width="100%"
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='left'>
                                        <Box>
                                            <Typography
                                                color={'#F2A000'}
                                                variant="h5"
                                                fontSize={35}
                                                component='div'
                                            >
                                                {dataOne.name}
                                            </Typography>
                                            <Typography variant="h5" fontSize={15} component='div'>
                                                Click this to view more infomation
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}

export default Cardbox;