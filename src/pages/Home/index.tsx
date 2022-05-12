import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFilter } from '@hooks/useFilter';
import { DataFilter } from '@model/types/filter';
import { Catalog, RootContainer } from './styles';
import { Head, ScrollButton } from '@components/UI';
import { CardCatalog, Header } from '@components/Layout';
import RememberFilterContenxt from '@context/filter-context';

const Home = () => {

    const navigate = useNavigate();
    const ctxFilter = useContext(RememberFilterContenxt);

    const { filterLocation, filterPeriod, getCatalog } = useFilter();

    const rootContainerRef = useRef<HTMLDivElement>(null);

    const [catalog, setCatalog] = useState(getCatalog());
    const [showIconScroll, setShowIconSroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll',scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);   
        }
    }, []);

    useEffect(() => {
        if( ctxFilter.location || ctxFilter.startDate || ctxFilter.endDate ) {
            filterHandler({
                location: ctxFilter.location,
                startDate: ctxFilter.startDate,
                endDate: ctxFilter.endDate 
            });
            ctxFilter.clear();
        }
    }, [ctxFilter]);

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