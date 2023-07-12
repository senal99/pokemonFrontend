import { useEffect, useState } from "react";
import Cardbox from "../components/Cardbox";
import useGetData from "../hooks/useGetData";
import { useSelector } from "react-redux";
import BannerBox from "../components/Banner";
import Message from "../components/MessageBox";
import { Box, Button, Stack, Typography } from "@mui/material";

const HomePage = () => {
    const [url, setUrl] = useState('http://localhost:3000/pokemon/getAll/0')
    const [page, setPage] = useState(0)
    const { searchKey, isLoading, pokemonArray, error } = useGetData(url);

    const frontPage = () => {
        setPage(page + 1)
        console.log("page back")
    }
    const backPage = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }

    useEffect(() => {
        if (searchKey == 'all') {
            setUrl(`http://localhost:3000/pokemon/getAll/` + page)
        } else {
            setUrl(`http://localhost:3000/pokemon/` + searchKey)
        }
    }, [page, searchKey])


    return (
        <div className="homepage">
            <BannerBox />
            <Box>
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
                            paddingTop={1}
                        >
                            {0 < pokemonArray.length ?
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
                    paddingTop={2}
                >
                </Box>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    paddingBottom={4}

                >
                    {pokemonArray &&
                        <Stack direction={"row"} gap={10}>
                            {page > 0 && <Button variant="contained" onClick={backPage}>Previous Page</Button>}
                            {1 < pokemonArray.length && <Button variant="contained" onClick={frontPage}>Next Page</Button>}
                        </Stack>
                    }

                </Box>
            </Box>
        </div>
    );
}

export default HomePage;