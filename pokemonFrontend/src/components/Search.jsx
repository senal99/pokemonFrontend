import {TextField , Stack , Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import {setSearchKey} from '../redux/pokemon';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState(null);
    
    const pattern = /^[A-Za-z]+$/;

    const handleSearch = () =>{
        // check if input does not have numbers or other special characters
        if(pattern.test(search) || search == null || search == ""){
            if(search == "" || search == null){ 
                dispatch(setSearchKey("all"));
                console.log("blacnk")
            } else {
                dispatch(setSearchKey(search));
            }
        }else {
            alert("Only type names")
        }
    }
    
    return ( 
        <div className="search">
            <Stack spacing={2} direction='row' >
                <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e) => {setSearch(e.target.value)}} sx={{
                    width: '100%'
                }}/>
                <Button variant="contained" startIcon={<SearchIcon/>} onClick={handleSearch} sx={{
                    backgroundColor:"#e8d500",
                    color: "black",
                    width: "150px"
                }}>Search</Button>
            </Stack>
        </div>
     );
}
 
export default SearchBar;