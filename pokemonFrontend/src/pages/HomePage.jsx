import { useEffect, useState } from "react";
import Cardbox from "../components/Cardbox";
import useGetData from "../hooks/useGetData";
import { useSelector } from "react-redux";
import BannerBox from "../components/Banner";
import Message from "../components/MessageBox";
import { Box, Typography } from "@mui/material";

const HomePage = () => {
    const [url, setUrl] = useState('http://localhost:3000/pokemon/getAll/0')
    const [page, setPage] = useState(0)
    useGetData(url);
    const { searchKey, isLoading, pokemonArray, error } = useSelector((state) => state.pokemon)

    useEffect(() => {
        if (searchKey == 'all') {
            setUrl(`http://localhost:3000/pokemon/getAll/` + page)
        } else {
            setUrl(`http://localhost:3000/pokemon/` + searchKey)
        }
    }, [page, searchKey])
    console.log("home")
    // console.log(pokemonArray.length)

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
                            {1 < pokemonArray.length ?
                                <Typography variant="h6">
                                    Showing Results for {searchKey}
                                </Typography>
                                :
                                <Typography variant="h6">
                                    No Results. Try diferent keyword
                                </Typography>
                            }
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