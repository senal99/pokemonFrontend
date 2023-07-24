import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setAllPokemon } from '../redux/pokemon';
import useGetToken from "./useGetToken";

const useGetData = (url) => {
    const tokens = useGetToken()
    const [token, setToken] = useState('')
    const dispatch = useDispatch();
    const { searchKey, isLoading, pokemonArray, error } = useSelector((state) => state.pokemon)
    
    const allData = async () => {
        const res = await axios.get(url, {
            headers: {
                "Authorization" : `Bearer ${token} `
            }
        })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // setError("Something went wrong!")
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
        dispatch(setAllPokemon(res?.data))
        console.log(res?.data)
    }

    useEffect(() => {
        if(token)
            allData();
    }, [url, token])

    useEffect(()=>{
        setToken(tokens.token)
    },[tokens])


    return { isLoading, error, searchKey, pokemonArray }
}

export default useGetData;