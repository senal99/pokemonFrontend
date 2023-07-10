import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemonArray: null,
        detailPokemon: null,
        postData: null,
        isLoading: false,
        error: null,
        searchKey: "all",
    },
    reducers:{
        setAllPokemon:(state, action)=>{
            state.pokemonArray = (action.payload)
        },
        setDetailPokemon: (state, action) => {
            state.detailPokemon = action.payload
        },
        setSearchKey: (state, action) => {
            state.searchKey = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setPostData: (state, action) => {
            state.postData = action.payload
        },
    }
})

export const { setAllPokemon , setDetailPokemon, setSearchKey, setIsLoading, setPostData } = pokemonSlice.actions;
export default pokemonSlice.reducer;