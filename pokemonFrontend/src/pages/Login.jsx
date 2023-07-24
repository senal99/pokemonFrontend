import { useState } from 'react';
import LoginImage from '../assets/login.jpg'
import Logo from '../assets/pl.png'
import { Box, Grid, Stack, Typography, Button, TextField } from "@mui/material";

const Login = () => {
  

    return (
        <>
            <Stack direction={'row'} height={'100vh'}>
                <Box width={'50%'}
                    sx={{
                        // backgroundSize: "cover",
                        // backgroundImage: `url(${LoginImage})`
                    }} >

                </Box>
                <Box
                    bgcolor={'white'}
                    width={'50%'}
                    display='flex'
                    flexDirection="column"
                    alignItems='center'
                    justifyContent='center'
                >
                    <Box width={'50%'} bgcolor={'gray'} padding={2}>
                        
                        <Typography variant="h6" fontSize={'20px'} >Username</Typography>
                        <TextField id="userNameInput" label="Search" variant="outlined" onChange={(e) => { setUsername(e.target.value) }} sx={{
                            width: '100%',
                            bgcolor: "white",
                        }} />

                        <Typography variant="h6" fontSize={'20px'} >Password</Typography>
                        <TextField type='password' id="passwordInput" label="Search" variant="outlined" onChange={(e) => { setPassword(e.target.value) }} sx={{
                            width: '100%',
                            bgcolor: "white",
                        }} />
                        <Box display='flex' justifyContent='right' paddingTop='15px'>
                            <Button variant="contained">Login</Button>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </>
    );
}

export default Login;