import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Catalog, RootContainer } from './styles';
import { Head, ScrollButton } from '@components/UI';
import { CardCatalog, Header } from '@components/Layout';
import { useFilter } from '@hooks/useFilter';
import { DataFilter } from '@model/types/filter';

const Home = () => {

    const navigate = useNavigate();
    const { filterLocation, filterPeriod, getCatalog } = useFilter();
    const rootContainerRef = useRef<HTMLDivElement>(null);
    const [showIconScroll, setShowIconSroll] = useState(false);
    const [catalog, setCatalog] = useState(getCatalog());

    useEffect(() => {
        window.addEventListener('scroll',scrollListener);
        return () => window.removeEventListener('scroll', scrollListener);
    }, []);

    function carDetailsHandler(id: number) {
        navigate(`/car-details/${id}`);
    }

    function scrollListener() {
        const positionScroll = window.scrollY;

        if( positionScroll > 50 ) {
            setShowIconSroll(true);
        } else {
            setShowIconSroll(false);
        }
    }

    function filterHandler(data: DataFilter) {
        if( !data.startDate && !data.endDate) {
            setCatalog(() => filterLocation(data.location));
        } else {
            setCatalog(() => filterPeriod(data));
        }
    }

    return(
        <React.Fragment>
            <Header onFilter={filterHandler}/>
            <Head page='Home'/>
            {showIconScroll && <ScrollButton containerRef={rootContainerRef}/>}
            <RootContainer ref={rootContainerRef}>
                <Catalog>
                    {catalog.map((item, index) => (
                        <CardCatalog 
                            key={index}
                            data={item} 
                            onClick={carDetailsHandler.bind(null, item.id)}
                        />
                    ))}
                </Catalog>
            </RootContainer>
        </React.Fragment>
    );
}

export default Home;