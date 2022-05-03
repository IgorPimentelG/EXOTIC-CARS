import { Routes, Route } from 'react-router-dom';
import { Home, CarDetails, NotFound } from '@pages/index';

const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/car-details' element={<CarDetails/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
}

export default Router;