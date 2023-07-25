import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DetailsPage from '../pages/DetailsPage';
import PageNotFound from '../pages/PageNotFound';
import AddPoke from '../pages/AddPoke';
import EditPoke from '../pages/EditPoke';

import SignInUser from '../pages/Auth/SignIn';
import SignUpUser from '../pages/Auth/SignUp'
import '@aws-amplify/ui-react/styles.css'
import { Authenticator } from '@aws-amplify/ui-react';
import { useState, useEffect } from 'react';
//Amplify stuff
import { Amplify } from 'aws-amplify';
import awsExports from '../aws/aws.exports';
import useGetToken from '../hooks/useGetToken';



const RouterFile = () => {
    const token = useGetToken();
    const [saveToken, setSaveToken] = useState('true')

    useEffect(() => {
        setSaveToken(token.token)
    }, [token])

    return (
        <>
            <Routes>
                <Route path='/' element={saveToken ? <HomePage /> : <SignInUser />} />
                <Route path='/details' element={token.token ? <DetailsPage /> : <SignInUser />} />
                <Route path='/add' element={token.token ? <AddPoke /> : <SignInUser />} />
                <Route path='/edit' element={token.token ? <EditPoke /> : <SignInUser />} />
                <Route path='/login' element={<SignInUser />} />
                <Route path='/signup' element={<SignUpUser />} />
                        //This route is the default route
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default RouterFile;
// export default withAuthenticator(RouterFile);