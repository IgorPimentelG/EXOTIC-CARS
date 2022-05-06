import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, CarDetails, NotFound } from '@pages/index';

const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/car-details/:id' element={<CarDetails/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
}

export default Router;