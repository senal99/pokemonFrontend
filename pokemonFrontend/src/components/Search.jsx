import { TextField, Stack, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { setSearchKey } from '../redux/pokemon';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState(null);

    const customStyles = {
        height: 40,
        width: 400,
        outline: 'none',
        borderStyle: 'none',
        borderRadius: '15px',
        backgroundColor: '#4D4D4D',
        '& input':
        {
            padding: '5px 12px',
            outline: 'none'
        },
    };

    const pattern = /^[A-Za-z]+$/;
    const handleSearch = () => {
        // check if input does not have numbers or other special characters
        if (pattern.test(search) || search == null || search == "") {
            if (search == "" || search == null) {
                dispatch(setSearchKey("all"));
            } else {
                dispatch(setSearchKey(search));
            }
        } else {
            alert("Only type names")
        }
    }

    return (
        <div className="search">
            <Stack spacing={2}  >
                <TextField onChange={(e) => { setSearch(e.target.value) }} style={customStyles} variant="outlined" size="small" />
                <Button variant="contained" onClick={handleSearch}
                    sx={{
                        backgroundColor: "#FFC123",
                        color: "black",
                        width: "100px",
                        borderRadius: '10px'
                    }}>Search
                </Button>
            </Stack>
        </div>
    );
}

export default SearchBar;