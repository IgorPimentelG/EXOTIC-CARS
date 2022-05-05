import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Slider } from '@components/Layout';
import { Head, HighlightedButton } from '@components/UI';

import squire from '../../assets/images/cars/ferrari_california/squire.png';
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
    ContainerBookNow,
    ContainerNav
} from './styles';

const CarDetails = () => {

    const navigate = useNavigate();
    const [imageCar, setImageCar] = useState(car1);
    const [sequenceSlider, setSequenceSlider] = useState<string[]>([car3, car1, car2]);
    
    useEffect(() => {
        setImageCar(sequenceSlider[1]);
    }, [sequenceSlider]);

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

    function goBackHandler() {
        navigate('/home');
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
                    <ContainerNav>
                        <HighlightedButton arrowLeft label='Back to catalog' onClick={goBackHandler}/>
                    </ContainerNav>
                    
                    {sequenceSlider.map((image, index) => (
                        <ImageMain index={index} src={image}/>
                    ))}
                    
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