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
            {sequence.map((path, index) => (
                <div key={index}>
                    <Card isSelected={index === 1 ? true : false}>
                        <ImageCar src={require(`../../../assets/images/cars${path}`)}/>
                    </Card>
                </div>

            ))}
            <div>
                <HighlightedButton reversed arrowRight onClick={onNext} />
            </div>
        </Container>
    );
}

export default Slider;