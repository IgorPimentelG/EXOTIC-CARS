import { CardCatalog } from '@components/Layout';
import catalog from '@data/cars.json';
import { Catalog, RootContainer } from './styles';

const Home = () => {

    const { cars } = catalog;

    return(
        <RootContainer>
            <Catalog>
                {cars.map((item, index) => (
                    <CardCatalog key={index} data={item}/>
                ))}
            </Catalog>
        </RootContainer>
    );
}

export default Home;