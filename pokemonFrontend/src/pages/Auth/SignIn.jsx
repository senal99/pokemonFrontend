import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws/aws.exports';
import { useNavigate } from 'react-router-dom';
import { Box, Stack, Grid, TextField, Button, Typography } from "@mui/material";
import AlertBox from '../../components/AlertBox';
import Image from '../../assets/loginBack.jpg'
import CircularProgress from '@mui/material/CircularProgress';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [update, setUpdate] = useState(true)
  const [errors, setError] = useState('')
  const message = { message: errors, type: 'user' }
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  Amplify.configure({
    Auth: {
      region: awsExports.REGION,
      userPoolId: awsExports.USER_POOL_ID,
      userPoolWebClientId: awsExports.USER_POOL_CLIENT_ID
    }
  })

  async function signIn() {
    try {
      setLoading(true)
      const user = await Auth.signIn(email, password);
      console.log(user)
      console.log(user.signInUserSession)
      fetchJwtToken()

      setUpdate(!update);
    } catch (error) {
      console.log('error signing in', error);
      setError(error.message)
      setLoading(false)
    }
  }

  const fetchJwtToken = async () => {
    try {
      const session = await Auth.currentSession();
      const token = session.getIdToken().getJwtToken();
      console.log("printint token " + token)
      while (true)
        if (token) {
          navigate('/')
          console.log("checking...")
          navigate(0)
          console.log("refreshing...")
          break;
        }
    } catch (error) {
      console.log('Error fetching JWT token:', error);
    }
  };

  return (
    <>
      <Grid container direction={'row'} sx={{ height: '100vh' }}>
        {/* <CssBaseline /> */}
        <Grid item
          bgcolor={'#FDCE44'}
          display='flex'
          alignItems='center'
          justifyContent='center'
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item
          xs={12} sm={8} md={6}
          bgcolor={'#1B191A'}
          display='flex'
          alignItems='center'
          justifyContent='center'
          padding={4}
          paddingTop={12}
        >
          <Box
            width={'350px'}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Stack width={'80%'}>
              <Box
                display='flex'
                flexDirection={'column'}
                justifyContent='center'
                gap={4}
                width={'100%'}
                paddingBottom={2}
              >
                <Typography
                  variant="h5"
                  fontSize={25}
                  component='div'
                >
                  HEY, <br /> LETS <br /> LOGIN
                </Typography>
                <TextField
                  label="Email"
                  variant="outlined"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    borderRadius: '15px',
                    bgcolor: 'white'
                  }}
                  onChange={e => { setEmail(event.target.value) }}
                  value={email}
                  size='small'
                />
                <TextField
                  label="Password"
                  type='password'
                  variant="outlined"
                  sx={{ bgcolor: 'white', borderRadius: '15px' }}
                  onChange={e => { setPassword(event.target.value) }}
                  value={password}
                  size='small'
                />
              </Box>
              {errors ? <AlertBox message={message} /> : ""}
              <Box
                paddingTop={1}
                display='flex'
                justifyContent='left'
              >
                <Button
                  onClick={signIn}
                  sx={{
                    bgcolor: '#FDCE44',
                    borderRadius: '15px',
                    color: 'black'
                  }}
                  variant="contained"
                >
                  Login
                </Button>
                {loading && <CircularProgress />}
              </Box>
              <Box
                paddingTop={1}
                paddingBottom={4}
                display='flex'
                justifyContent='right'
              >
                <Typography
                  variant="h5"
                  onClick={() => { navigate('/signup') }}
                  fontSize={25}
                  component='div'
                  sx={{
                    textAlign: 'right'
                  }}
                >
                  OR, YOU<br />WANNA  <br /> REGISTER?
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>

      </Grid>
    </>
  );
}
export default SignIn;







