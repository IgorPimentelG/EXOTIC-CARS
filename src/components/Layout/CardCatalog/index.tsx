import { Car } from '@shared/model/types/car';
import { 
    Container,
    ContainerIcon, 
    Footer, 
    Header,
    ImageCar, 
    TextBold,
    TextModel, 
    TextPrice, 
    Label, 
    Currency, 
    Circle
} from './styles';

const Card: React.FC<{ data: Car }> = ({ data }) => {

   return(
       <Container>
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
           <ImageCar 
                alt={`Image of car ${data.brand} ${data.model}`}
                src={require(`../../../assets/images/cars/${data.image}`)}
            />
            <Footer>
                <div>
                    
                </div>
                <Currency><sup>$</sup></Currency>
                <TextPrice>{data.rent_price}</TextPrice>
                <Label>/day</Label>
            </Footer>
       </Container>
   );
}

export default Card;