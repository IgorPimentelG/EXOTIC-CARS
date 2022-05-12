import React, { useContext, useEffect, useState } from 'react';
import dataCars from '@data/cars.json';
import cars_details from '@data/cars_details.json';
import { DataFilter } from '@model/types/filter';
import { useDimensios } from '@hooks/useDimensios';
import { Header, Slider } from '@components/Layout';
import { Car, CarDetail } from '@model/types/car';
import { Head, HighlightedButton } from '@components/UI';
import { useNavigate, useParams } from 'react-router-dom';
import RememberFilterContenxt from '@context/filter-context';
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
    ContainerNav,
    ContainerImage
} from './styles';

const CarDetails = () => {

    const params = useParams();
    const navigate = useNavigate();

    const ctxFilter = useContext(RememberFilterContenxt);

    const { width } = useDimensios();

    const [indexCarSelected, setIndexCarSelected] = useState(1);

    const [car] = useState<Car>(
        () => {
            const data = dataCars.cars.filter((item) => item.id === Number(params.id))[0];
            const details = cars_details.details.filter((item) => item.brand === data.brand)[0];
            return {...data, squeri: details.image_squire};
        }
    );

    const [sequenceImagesSlider, setSequenceImagesSlider] = useState<CarDetail[]>(
        () => {
            const details = cars_details.details.filter((item) => item.brand === car.brand)[0];
            const images = details.images_car.map((item) => item);
            return [images.splice(1, 1)[0], ...images];
        }
    );

    useEffect(() => {
        setIndexCarSelected(sequenceImagesSlider[1].id);
    }, [sequenceImagesSlider]);

    function nextCarHandler() {     
       setSequenceImagesSlider((currentState) => {
           return [...currentState.slice(1), currentState[0]];
       });
    }

    function previousCarHandler() {
        setSequenceImagesSlider((currentState) => {
            return [currentState[currentState.length - 1], ...currentState.slice(0, 2)];
        });
    }

    function goBackHandler() {
        navigate('/home');
    }

    function filterHandler(data: DataFilter) {
        ctxFilter.rememberData(data);
        navigate('/home');
    }

    return(
       <React.Fragment>
            <Head page='Details'/>
            <Header onFilter={filterHandler}/>
            <RootContainer>
                <ContainerHeader>
                    <ImageSqueri src={require(`../../assets/images/cars${car.squeri}`)}/>
                    <div>
                        <Text size={36}>{`${car?.brand} ${car?.model}`}</Text>
                        <Label size={26}>${car?.rent_price}/day</Label>
                    </div>
                </ContainerHeader>

                <ContainerMain>
                    { width > 780 && (
                        <ContainerNav>
                            <HighlightedButton 
                                arrowLeft 
                                label='Back to catalog' 
                                size={160}
                                onClick={goBackHandler}
                            />
                        </ContainerNav>
                    )}
                    
                    <ContainerImage>
                        {sequenceImagesSlider.map((item, index) => (
                            <ImageMain
                                key={index} 
                                index={index}
                                alt='Main car image'
                                src={require(`../../assets/images/cars${item.image}`)}
                            />
                        ))}
                    </ContainerImage>

                    <ContainerInfo>
                        <Text size={38}>{`${indexCarSelected < 10 ? '0' : ''}${indexCarSelected}`}</Text>
                        <Label capitalize size={25}>{sequenceImagesSlider[1].color}</Label>
                    </ContainerInfo>

                    { width <= 780 && (
                        <ContainerNav>
                            <HighlightedButton 
                                arrowLeft 
                                label='Back to catalog'
                                size={160}
                                onClick={goBackHandler}
                            />
                        </ContainerNav>
                    )}
                </ContainerMain>

                <ContainerBookNow>
                    <HighlightedButton reversed arrowRight size={160} label='Book now' onClick={() => {}}/>
                </ContainerBookNow>

                <Slider
                    sequence={sequenceImagesSlider.map((item) => item.image)}
                    onNext={nextCarHandler}
                    onPrevius={previousCarHandler}
                />
            </RootContainer>
       </React.Fragment>
    );
}

export default CarDetails;