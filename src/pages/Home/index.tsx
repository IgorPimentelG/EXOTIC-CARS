import catalog from '@data/cars.json';
import { Head } from '@components/UI';
import { CardCatalog, Header } from '@components/Layout';
import { Catalog, RootContainer } from './styles';
import React from 'react';

const Home = () => {

    const { cars } = catalog;

    return(
        <React.Fragment>
            <Header/>
            <Head page='Home'/>
            <RootContainer>
                <Catalog>
                    {cars.map((item, index) => (
                        <CardCatalog key={index} data={item}/>
                    ))}
                </Catalog>
            </RootContainer>
        </React.Fragment>
    );
}

export default Home;