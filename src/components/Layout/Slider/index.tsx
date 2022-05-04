import { Card, Container, ImageCar } from './styles';
import { HighlightedButton } from '@components/UI';
import car1 from '../../../assets/images/cars/ferrari_california/02.png';

const Slider = () => {
    return(
        <Container>
            <div>
                <HighlightedButton reversed arrowLeft />
            </div>
            <div>
                <Card>
                    <ImageCar src={car1}/>
                </Card>
            </div>

            <div>
                <Card isIndex={true}>
                    <ImageCar src={car1}/>
                </Card>
            </div>

            <div>
                <Card>
                    <ImageCar src={car1}/>
                </Card>
            </div>
            <div>
                <HighlightedButton reversed arrowRight />
            </div>
        </Container>
    );
}

export default Slider;