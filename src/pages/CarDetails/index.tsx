import React, { useState } from 'react';
import { Head, HighlightedButton } from '@components/UI';
import { Header, Slider } from '@components/Layout';
import squire from '../../assets/images/cars/ferrari_california/squire.png';
import car from '../../assets/images/cars/ferrari_california/02.png';

import car1 from '../../assets/images/cars/ferrari_california/02.png';
import car2 from '../../assets/images/cars/ferrari_california/03.png';
import car3 from '../../assets/images/cars/ferrari_california/04.png';

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

    const [sequenceSlider, setSequenceSlider] = useState<string[]>([car3, car1, car2]);

    function nextCarHandler() {
        setSequenceSlider([
            sequenceSlider[sequenceSlider.length - 1],
            ...sequenceSlider.slice(0, sequenceSlider.length - 1)
        ]);
    }

    function previousCarHandler() {
        setSequenceSlider([
            ...sequenceSlider.slice(1, sequenceSlider.length),
            sequenceSlider[0],
        ]);
    }

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
                    <HighlightedButton arrowLeft label='Back to catalog' onClick={() => {}}/>
                    <ImageMain src={car}/>
                    <ContainerInfo>
                        <Text size={32}>01</Text>
                        <Label size={25}>Red</Label>
                    </ContainerInfo>
                </ContainerMain>

                <ContainerBookNow>
                    <HighlightedButton reversed arrowRight label='Book now' onClick={() => {}}/>
                </ContainerBookNow>

                <Slider
                    sequence={sequenceSlider}
                    onNext={nextCarHandler}
                    onPrevius={previousCarHandler}
                />
            </RootContainer>
       </React.Fragment>
    );
}

export default CarDetails;