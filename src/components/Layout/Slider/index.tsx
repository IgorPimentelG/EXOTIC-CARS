import { Card, Container, ImageCar, RootContainer } from './styles';
import { HighlightedButton } from '@components/UI';

const Slider: React.FC<{
    sequence: string[];
    onNext: () => void;
    onPrevius: () => void;
}> = ({ sequence, onNext, onPrevius }) => {

    return(
        <RootContainer>
            <Container>
                <div>
                    <HighlightedButton reversed arrowLeft onClick={onPrevius}/>
                </div>
                {sequence.map((path, index) => {
                    let handler = () => {};

                    switch(index) {
                        case 0:
                            handler = onPrevius;
                            break;
                        case 2:
                            handler = onNext;
                            break;
                    }

                    return(
                        <div key={index}>
                            <Card index={index} onClick={handler}>
                                <ImageCar 
                                    alt={`Car slide image ${index + 1}`} 
                                    src={require(`../../../assets/images/cars${path}`)}
                                />
                            </Card>
                        </div>
                    )
                })}
                <div>
                    <HighlightedButton reversed arrowRight onClick={onNext} />
                </div>
            </Container>
        </RootContainer>
    );
}

export default Slider;