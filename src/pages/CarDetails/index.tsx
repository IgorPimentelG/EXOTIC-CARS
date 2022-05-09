import React, { useContext, useEffect, useState } from 'react';
import dataCars from '@data/cars.json';
import cars_details from '@data/cars_details.json';
import { DataFilter } from '@model/types/filter';
import { useDimensios } from '@hooks/useDimensios';
import { Header, Slider } from '@components/Layout';
import { Car, CarDetail } from 'src/model/types/car';
import { Head, HighlightedButton } from '@components/UI';
import { useNavigate, useParams } from 'react-router-dom';
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
import RememberFilterContenxt from 'src/context/filter-context';


const CarDetails = () => {

    const params = useParams();
    const navigate = useNavigate();

    const ctxFilter = useContext(RememberFilterContenxt);

    const { width } = useDimensios();

    const [indexSelected, setIndexSelected] = useState(1);
    const [car, setCar] = useState<Car>(
        () => {
            const data = dataCars.cars.filter((item) => item.id === Number(params.id))[0];
            const details = cars_details.details.filter((item) => item.brand === data.brand)[0];
            return {...data, squeri: details.image_squire};
        }
    );

    const [sequenceImagesSlider, setSequenceImagesSlider] = useState<CarDetail[]>(
        () => {
            const details = cars_details.details.filter((item) => item.brand === car.brand);
            return  details.map((item) => [...item.images_car])[0];
        }
    );

    function nextCarHandler() {
        setSequenceImagesSlider([
            sequenceImagesSlider[sequenceImagesSlider.length - 1],
            ...sequenceImagesSlider.slice(0, sequenceImagesSlider.length - 1)
        ]);
        
        setIndexSelected((currentState) => {
            if( currentState === sequenceImagesSlider.length ) {
                return 1;
            }
            return currentState + 1;
        });
    }

    function previousCarHandler() {
        setSequenceImagesSlider([
            ...sequenceImagesSlider.slice(1, sequenceImagesSlider.length),
            sequenceImagesSlider[0],
        ]);

        setIndexSelected((currentState) => {
            if( currentState === 1 ) {
                return sequenceImagesSlider.length;
            }
            return currentState - 1;
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
                                src={require(`../../assets/images/cars${item.image}`)}
                            />
                        ))}
                    </ContainerImage>

                    <ContainerInfo>
                        <Text size={38}>{`${indexSelected < 10 ? '0' : ''}${indexSelected}`}</Text>
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