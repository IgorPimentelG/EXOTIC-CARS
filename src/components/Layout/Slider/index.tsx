import { Card, Container, ImageCar } from './styles';
import { HighlightedButton } from '@components/UI';

const Slider: React.FC<{
    sequence: string[];
    onNext: () => void;
    onPrevius: () => void;
}> = ({ sequence, onNext, onPrevius }) => {
    return(
        <Container>
            <div>
                <HighlightedButton reversed arrowLeft onClick={onPrevius}/>
            </div>
            <div>
                <Card>
                    <ImageCar src={sequence[0]}/>
                </Card>
            </div>

            <div>
                <Card check={true}>
                    <ImageCar src={sequence[1]}/>
                </Card>
            </div>

            <div>
                <Card>
                    <ImageCar src={sequence[2]}/>
                </Card>
            </div>
            <div>
                <HighlightedButton reversed arrowRight onClick={onNext} />
            </div>
        </Container>
    );
}

export default Slider;