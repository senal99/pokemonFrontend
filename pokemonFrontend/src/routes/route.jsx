import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DetailsPage from '../pages/DetailsPage';
import PageNotFound from '../pages/PageNotFound';
import AddPoke from '../pages/AddPoke';

const RouterFile = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/details' element={<DetailsPage />} />
            <Route path='/add' element={<AddPoke />} />
            //This route is the default route
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
}

export default RouterFile;