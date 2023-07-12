import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DetailsPage from '../pages/DetailsPage';
import PageNotFound from '../pages/PageNotFound';
import AddPoke from '../pages/AddPoke';
import EditPoke from '../pages/EditPoke';

const RouterFile = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/details' element={<DetailsPage />} />
            <Route path='/add' element={<AddPoke />} />
            <Route path='/edit' element={<EditPoke />} />
            //This route is the default route
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
}

export default RouterFile;