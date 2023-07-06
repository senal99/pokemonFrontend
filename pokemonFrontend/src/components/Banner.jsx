import SearchBar from "./Search";
import { Box } from "@mui/material";
import image from '../assets/pl.png'

const BannerBox = () => {
    return (
        <>
            <Box
                height={300}
                bgcolor={'gray'}
                display='flex'
                alignItems='center'
                justifyContent='center'
                sx={{
                    background: 'linear-gradient(to right, #f2ab11, #f28d11)'
                }}
            >
                <Box sx={{ width: '50%' }}>
                    <img src={image} alt="logo" />
                    <SearchBar />
                </Box>
            </Box>
        </>
    );
}

export default BannerBox;