import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import "@fontsource/quicksand";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import DeleteModal from "../modals/DeleteModal";

const DetailsPage = () => {
    const navigate = useNavigate();
    const { detailPokemon } = useSelector((state) => state.pokemon)

    useEffect(() => {
        if (!detailPokemon) {
            navigate('/');
        }
    }, [detailPokemon])

    const [deleteBox, setDeleteBox] = useState(false)

    const editPage = () => {
        navigate('/edit')
    }

    const deletePage = () => {
        setDeleteBox(true)
    }

    return (
        <div className="detailspage" style={{ fontFamily: 'Quicksand' }}>
            <TopBar />
            <Box
                display='flex'
                flexDirection="column"
                alignItems='center'
                justifyContent='center'
            >
                {detailPokemon &&
                    <Box sx={{
                        background: '#3D3D3D',
                        width: {
                            xs: '300px',
                            sm: '400px',
                            md: '700px',
                            lg: '700px',
                            xl: '900px'
                        },
                        border: 1,
                        borderWidth: '3px',
                        borderRadius: '35px',
                        padding: "40px",
                        marginBottom: '40px',
                        marginTop: '60px'
                    }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: "bold" }} component='div' paddingLeft={3} paddingTop={1} >
                            {detailPokemon.name}
                        </Typography>
                        <Stack direction={{
                            md: "row"
                        }}
                            sx={{
                                height: '100%',
                                padding: '4px',
                                margin: '10px'
                            }}
                            gap={2}>
                            <Box bgcolor={'#212121'}
                                sx={{
                                    borderRadius: '30px',
                                    padding: '30px',
                                    width: {
                                        md: "50%"
                                    },
                                }}>
                                <Typography variant="p" component='div' textAlign={'justify'} >
                                    {detailPokemon.description}
                                </Typography>
                            </Box>
                            <Box sx={{
                                width: {
                                    md: "50%"
                                }
                            }}>
                                <Stack direction={"column"} gap={2}>
                                    <Stack bgcolor={'#212121'}
                                        borderRadius={6}
                                        padding={'20px'}
                                        paddingLeft={'50px'}
                                        paddingRight={'50px'}
                                    >
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            spacing={2}
                                        >
                                            <Stack>HEALTH</Stack>
                                            <Stack fontWeight={'bold'}> {detailPokemon.health}</Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        bgcolor={'#212121'}
                                        borderRadius={6}
                                        padding={'20px'}
                                        paddingLeft={'50px'}
                                        paddingRight={'50px'}
                                    >
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            spacing={2}
                                        >
                                            <Stack>ATTACK</Stack>
                                            <Stack fontWeight={'bold'}> {detailPokemon.attack}</Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        bgcolor={'#212121'}
                                        borderRadius={6}
                                        padding={'20px'}
                                        paddingLeft={'50px'}
                                        paddingRight={'50px'}
                                    >
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            spacing={2}
                                        >
                                            <Stack>DEFENSE</Stack>
                                            <Stack fontWeight={'bold'}> {detailPokemon.defense} </Stack>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Box>

                        </Stack>
                        <Box
                            width="100%"
                            display='flex'
                            justifyContent='right'
                        >
                            <Button onClick={editPage} variant="contained" sx={{ marginRight: '17px', borderRadius: '14px', bgcolor: 'orange' }}>Edit</Button>
                            <Button onClick={deletePage} variant="contained" sx={{ marginRight: '17px', borderRadius: '14px', bgcolor: 'orange' }}>Delete</Button>
                        </Box>
                    </Box>
                }
            </Box>
            {deleteBox && <DeleteModal turnOff={setDeleteBox} />}
        </div>
    );
}

export default DetailsPage;