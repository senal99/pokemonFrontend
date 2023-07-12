import { Box, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDetailPokemon } from '../redux/pokemon';
import image from '../assets/pl.png'

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
                            width: '35%',
                            padding: '40px',
                            textAlign: 'left',
                            marginTop: '25px',
                            transition: 'background-color 0.2s',
                            transition: 'transform 0.2s',
                            borderRadius: '30px',
                            border : 1,
                            borderWidth : '2px',
                            '&:hover': {
                                backgroundColor: "#1F1F1F",
                                color: "white",
                                transform: 'scale(1.1)'
                            }
                        }}
                        onClick={() => handleClick(dataOne)}
                    >
                        <Box sx={{
                            direction : 'column'
                        }}>
                            <Box
                                width="100%"
                                display='flex'
                                alignItems='center'
                                justifyContent='center'>
                                <Typography variant="h5" fontSize={35} component='div'>
                                    {dataOne.name}
                                </Typography>
                            </Box>
                            <Box 
                                width="100%"
                                display='flex'
                                alignItems='center'
                                justifyContent='center'>
                                 <img src={image} width={100} alt="logo" />
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </>
    );
}

export default Cardbox;