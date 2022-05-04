import { Car } from '@shared/model/types/car';
import { 
    Container,
    ContainerIcon, 
    ContainerImage,
    ContainerPrice,
    Header,
    Footer, 
    ImageCar, 
    TextBold,
    TextModel, 
    TextPrice, 
    Label, 
    Currency, 
    LabelBook,
    Circle,
} from './styles';

const Card: React.FC<{ data: Car, onClick: () => void }> = ({ data, onClick }) => {
    return(
        <Container onClick={onClick}>
            <Header>
                    <div>
                        <TextBold>{data.brand}</TextBold>
                        <TextModel>{data.model}</TextModel>
                    </div>
                    <ContainerIcon>
                        <Circle/>
                        <Circle/>
                        <Circle/>
                    </ContainerIcon>
            </Header>
            <ContainerImage>
                    <ImageCar 
                        alt={`Image of car ${data.brand} ${data.model}`}
                        src={require(`../../../assets/images/cars/${data.image}`)}
                    />
            </ContainerImage>

                <Footer>
                    <div>
                        <LabelBook>Book Now</LabelBook>
                    </div>
                    <ContainerPrice>
                        <Currency><sup>$</sup></Currency>
                        <TextPrice>{data.rent_price}</TextPrice>
                        <Label>/day</Label>
                    </ContainerPrice>
                </Footer>
        </Container>
    );
}

export default Card;