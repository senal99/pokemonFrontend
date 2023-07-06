import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDetailPokemon } from '../redux/pokemon';

const Cardbox = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = (data) => {
        dispatch(setDetailPokemon(data))
        navigate(`/details`)
    }

    const { pokemonArray} = useSelector((state) => state.pokemon)
    return (
        <>
            <Box
                padding={2}
                display='flex'
                flexDirection="column"
                alignItems='center'
                justifyContent='center'
            >
                {pokemonArray.map((dataOne, index) => (
                    <Box
                        key={index}
                        sx={{
                            backgroundColor: '#ffbc00',
                            width: '50%',
                            padding: '20px',
                            textAlign: 'left',
                            marginTop: '20px',
                            transition: 'background-color 0.2s',
                            transition: 'transform 0.2s',
                            borderRadius: '30px',
                            '&:hover': {
                                backgroundColor: "#525252",
                                color: "white",
                                transform: 'scale(1.1)'
                            }
                        }}
                        onClick={() => handleClick(dataOne)}
                    >
                        <Stack direction="row" >
                            <Box
                                width="100%"
                                display='flex'
                                alignItems='center'
                                justifyContent='center'>
                                <Typography variant="h5" fontSize={35} component='div'>
                                    Semora
                                </Typography>
                            </Box>
                            <Box
                                width="100%"
                                display='flex'
                                alignItems='center'
                                justifyContent='center'>
                                <Typography variant="body2" color='Text.secondary'>
                                    image goes here
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                ))}
            </Box>
        </>
    );
}

export default Cardbox;