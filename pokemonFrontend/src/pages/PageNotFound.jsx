import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const PageNotFound = () => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }

    return (
        <>
            <Box
                width="100%"
                bgcolor='#ffe7a3'
                sx={{
                    height: '100vh'
                }}
                display='flex'
                flexDirection="column"
                alignItems='center'
                justifyContent='center'
            >
                <Box
                    sx={{
                        backgroundColor: '#ffbc00',
                        width: '50%',

                        textAlign: 'left',
                    }}
                >
                    <Typography variant="h3" component='div' paddingBottom={4} padding={8}>
                        :(       Page is not found!
                    </Typography>
                    <Button onClick={goHome} variant="contained">Wanna go home?</Button>
                </Box>
            </Box>
        </>
    );
}

export default PageNotFound;