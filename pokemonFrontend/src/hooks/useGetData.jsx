import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setAllPokemon } from '../redux/pokemon';


const useGetData = (url) => {
    const dispatch = useDispatch();

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { searchKey } = useSelector((state) => state.pokemon)

    const allData = async () => {
        setError(false)
        const res = await axios.get(url)
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    setError("Something went wrong!")
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

        // if (res) {
            // dispatch(setBackUrlink(res.data.previous));
            // dispatch(setFrontUrlink(res.data.next));
        // }
        if (searchKey == 'all') {
            firstFilterData(res.data.results)
            console.log("search key " + searchKey)
        } else {
            dispatch(setAllPokemon(res.data));
            console.log("search key " + searchKey)
        }
    }

    const firstFilterData = async (items) => {
        items.map(async (item) => {
            const results = await axios.get(item.url)
            if (results.status != 200) {
                setError("Something went wrong!")
            }

            dispatch(setAllPokemon(results.data));
            setIsLoading(false)
            // use normal variable to get all data then assign to dispatch
        })
    }

    useEffect(() => {
        // dispatch(resetAllPokemon());
        allData();
    }, [url])
    return { data, isLoading, error }
}

export default useGetData;