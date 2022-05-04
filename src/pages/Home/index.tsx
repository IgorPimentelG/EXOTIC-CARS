import React, { useEffect, useRef, useState } from 'react';
import catalog from '@data/cars.json';
import { Catalog, RootContainer } from './styles';
import { Head, ScrollButton } from '@components/UI';
import { CardCatalog, Header } from '@components/Layout';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const { cars } = catalog;
    const rootContainerRef = useRef<HTMLDivElement>(null);
    const [showIconScroll, setShowIconSroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll',scrollListener);
        return () => window.removeEventListener('scroll', scrollListener);
    }, []);

    function carDetailsHandler() {
        navigate('/car-details');
    }

    function scrollListener() {
        const positionScroll = window.scrollY;

        if( positionScroll > 50 ) {
            setShowIconSroll(true);
        } else {
            setShowIconSroll(false);
        }
    }

    return(
        <React.Fragment>
            <Header/>
            <Head page='Home'/>
            {showIconScroll && <ScrollButton containerRef={rootContainerRef}/>}
            <RootContainer ref={rootContainerRef}>
                <Catalog>
                    {cars.map((item, index) => (
                        <CardCatalog key={index} data={item} onClick={carDetailsHandler}/>
                    ))}
                </Catalog>
            </RootContainer>
        </React.Fragment>
    );
}

export default Home;