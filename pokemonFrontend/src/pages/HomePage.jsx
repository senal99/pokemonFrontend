import { useEffect, useState } from "react";
import Cardbox from "../components/Cardbox";
import useGetData from "../hooks/useGetData";
import { useSelector } from "react-redux";
import BannerBox from "../components/Banner";
import Message from "../components/MessageBox";
import { Box, Typography } from "@mui/material";

const HomePage = () => {
    const originalUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
    const [url, setUrl] = useState(originalUrl)
    const { searchKey, isLoading, pokemonArray, error} = useSelector((state) => state.pokemon)

    useEffect(() => {
        if (searchKey == 'all') {
            setUrl(originalUrl)
        } else {
            setUrl(`https://pokeapi.co/api/v2/pokemon/` + searchKey)
            console.log(url)
        }
    }, [])
    console.log("home")

    return (
        <div className="homepage">
            <BannerBox />
            <Box
                bgcolor="#ffe7a3"
            >
                <Message error={error} loading={isLoading} />
                {pokemonArray &&
                    <>
                        <Box
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            paddingTop={4}
                        >
                        </Box>
                        <Box
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            paddingTop={4}
                        >
                            <Typography variant="h6">
                                Showing Results for {searchKey}
                            </Typography>
                        </Box>
                    </>
                }
                {pokemonArray && <Cardbox data={pokemonArray} />}
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    paddingTop={4}
                    paddingBottom={8}
                >
                </Box>
            </Box>
        </div>
    );
}

export default HomePage;