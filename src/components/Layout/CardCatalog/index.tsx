import { Container, Footer, ImageCar, TextModel, TextPrice, Currency, Label, Header, TextBold, Circle, ContainerIcon } from './styles';
import { Car } from '@shared/model/types/car';

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
                <Currency><sup>$</sup></Currency>
                <TextPrice>{data.rent_price}</TextPrice>
                <Label>/day</Label>
            </Footer>
       </Container>
   );
}

export default Card;