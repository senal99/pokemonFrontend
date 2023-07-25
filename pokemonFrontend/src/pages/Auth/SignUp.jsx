import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws/aws.exports';
import { useNavigate } from 'react-router-dom';
import { Box, Stack, Grid, Button, TextField, Typography } from "@mui/material";
import Image from '../../assets/loginBack.jpg'
import CircularProgress from '@mui/material/CircularProgress';
import AlertBox from '../../components/AlertBox';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('')
  const [otp, setOTP] = useState('');
  const [errors, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const [switcher, setSwitch] = useState(true)
  const message = { message: errors, type: 'user' }
  const navigate = useNavigate()

  Amplify.configure({
    Auth: {
      region: awsExports.REGION,
      userPoolId: awsExports.USER_POOL_ID,
      userPoolWebClientId: awsExports.USER_POOL_CLIENT_ID
    }
  })

  const signUpUser = (e) => {
    setError(null)
    if (password == conPassword) {
      signUpUserP(e)
    } else {
      setError("Password does not match!")
    }
  }

  const signUpUserP = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const user = await Auth.signUp({
        username: email,
        password: password,
      });
      if (user) {
        console.log("user set")
        setSwitch(false)
        setLoading(false)
      }
      console.log(user)
      console.log('Sign up successful:', user);

    } catch (error) {
      console.log('Error signing up:', error);
      setError(error.message)
      setLoading(false)
    }
  };

  async function confirmSignUp() {
    setLoading(true)
    try {
      await Auth.confirmSignUp(email, otp);
      navigate('/login')
    } catch (error) {
      console.log('error confirming sign up', error);
      setError(error.message)
      setLoading(false)
    }
  }

  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(email);
      alert('code resent successfully');
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
    }
  }

  return (
    <>
      <Grid container direction={'row'} sx={{ height: '100vh' }}>
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
        <Grid
          item
          xs={12} sm={8} md={6}
          bgcolor={'#1B191A'}
          width={'100%'}
          display='flex'
          alignItems='center'
          justifyContent='center'
          padding={4}
        >
          <Grid
            item
            padding={2}
            borderRadius={'25px'}
            width={'450px'}
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
                {switcher ?
                  <>
                    <Typography
                      variant="h5"
                      fontSize={25}
                      component='div'
                    >
                      LETS GET <br /> YOU <br /> REGISTERED
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
                    <TextField
                      label="Confirm Password"
                      type='password'
                      variant="outlined"
                      sx={{ bgcolor: 'white', borderRadius: '15px' }}
                      onChange={e => { setConPassword(event.target.value) }}
                      value={conPassword}
                      size='small'
                    />
                  </>
                  :
                  <>
                    <TextField
                      label="Code"
                      variant="outlined"
                      sx={{ bgcolor: 'white', borderRadius: '15px' }}
                      onChange={e => { setOTP(event.target.value) }}
                      value={otp}
                      size='small'
                    />
                  </>
                }
              </Box>
              {errors ? <AlertBox message={message} /> : ""}
              {!switcher &&
                <Typography
                  variant="h6"
                  fontSize={20}
                >
                  Check your email for the OTP
                </Typography>
              }
              <Box
                paddingTop={1}
                paddingBottom={2}
                display='flex'
                justifyContent='left'
              >
                {switcher ?
                  <>
                    {loading && <CircularProgress />}
                    <Button onClick={signUpUser} sx={{ bgcolor: '#FDCE44', color: 'black' }} variant="contained">Register</Button>
                  </>
                  :
                  <>
                    <Stack direction={'row'} gap={2}>
                      <Button onClick={resendConfirmationCode} sx={{ borderColor: '#FDCE44', color: '#FDCE44' }} variant="outlined">Resend</Button>
                      <Button onClick={confirmSignUp} sx={{ bgcolor: '#FDCE44', color: 'black' }} variant="contained">Confirm</Button>
                    </Stack>
                  </>
                }
              </Box>
              {switcher ?
                <Typography
                  variant="h5"
                  onClick={() => { navigate('/login') }}
                  fontSize={25}
                  component='div'
                  sx={{
                    textAlign: 'right'
                  }}
                >
                  OR, JUST<br />LOGIN
                </Typography>
                : ""}

              <Box
                paddingBottom={4}
                display='flex'
                justifyContent='center'
              >
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default SignUp;







