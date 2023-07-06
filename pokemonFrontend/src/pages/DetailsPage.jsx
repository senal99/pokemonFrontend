import { Box, Grid, Stack, Typography, ButtonBase } from "@mui/material";
import { useSelector } from "react-redux";
import "@fontsource/quicksand";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";

const DetailsPage = () => {
    const navigate = useNavigate();
    const { detailPokemon } = useSelector((state) => state.pokemon)
    console.log(detailPokemon)
    useEffect(() => {
        if (!detailPokemon) {

            console.log("test")
            navigate('/');
        }
    }, [detailPokemon])

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
                        background: '#ffffff',
                        width: {
                            xs: '300px',
                            sm: '500px',
                            md: '700px',
                            lg: '900px',
                            xl: '1000px'
                        },
                        borderRadius: '20px',
                        marginTop: '20px',
                        padding: "30px",
                    }}
                    >
                        <Typography variant="h5" component='div' paddingLeft={3} paddingTop={1} >
                            Semora
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
                            <Box bgcolor={'#ffebc4'} sx={{
                                borderRadius: '20px',
                                padding: '20px',
                                width: {
                                    md: "50%"
                                }
                            }}>
                                <Typography variant="p" component='div' textAlign={'justify'} >
                                    FREE Twenty years after a fungal outbreak ravages the planet, survivors Joel and Tess are tasked with a mission that could change everything. Ends 03/30. Don't have Max? Go to Channel 2495 and upgrade instantly.with a mission that could change everything. Ends 03/30. Don't have Max? Go to Channel 2495 and upgrade instantly.
                                </Typography>
                            </Box>
                            <Box sx={{
                                width: {
                                    md: "50%"
                                }
                            }}>
                                <Stack direction={"column"} gap={2}>
                                    <Stack bgcolor={'#b8ffce'}
                                        borderRadius={5}
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
                                            <Stack fontWeight={'bold'}>68</Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        bgcolor={'#b5d8ff'}
                                        borderRadius={5}
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
                                            <Stack fontWeight={'bold'}>68</Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        bgcolor={'#ffc7d8'}
                                        borderRadius={5}
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
                                            <Stack fontWeight={'bold'}>68</Stack>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                }
            </Box>
        </div>
    );
}

export default DetailsPage;