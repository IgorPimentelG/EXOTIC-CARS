import React from 'react';
import { Head, HighlightedButton } from '@components/UI';
import { Header, Slider } from '@components/Layout';
import squire from '../../assets/images/cars/ferrari_california/squire.png';
import car from '../../assets/images/cars/ferrari_california/02.png';
import { 
    RootContainer, 
    ContainerInfo,
    ContainerMain, 
    ContainerHeader, 
    ImageSqueri,
    ImageMain, 
    Text, 
    Label,
    ContainerBookNow
} from './styles';

const CarDetails = () => {
    return(
       <React.Fragment>
            <Head page='Details'/>
            <Header/>
            <RootContainer>
                <ContainerHeader>
                    <ImageSqueri src={squire}/>
                    <div>
                        <Text size={36}>Ferrari California</Text>
                        <Label size={26}>$725/day</Label>
                    </div>
                </ContainerHeader>

                <ContainerMain>
                    <HighlightedButton arrowLeft label='Back to catalog'/>
                    <ImageMain src={car}/>
                    <ContainerInfo>
                        <Text size={32}>01</Text>
                        <Label size={25}>Red</Label>
                    </ContainerInfo>
                </ContainerMain>

                <ContainerBookNow>
                    <HighlightedButton reversed arrowRight label='Book now'/>
                </ContainerBookNow>

                <Slider/>
            </RootContainer>
       </React.Fragment>
    );
}

export default CarDetails;