import { ButtonHighlighted } from '@components/UI';
import { Filter } from '@components/Layout';
import { Container, ContainerLogo, ContainerOptions, TextPrimary, TextSecundary } from './styles';

const Header = () => {
    return(
        <Container>
            <ContainerLogo>
                <TextPrimary>exotic</TextPrimary>
                <TextSecundary>cars</TextSecundary>
            </ContainerLogo>

            <Filter/>

            <ContainerOptions>
                <ButtonHighlighted>
                    Sign Up
                </ButtonHighlighted>

                <ButtonHighlighted primary>
                    Sign In
                </ButtonHighlighted>
            </ContainerOptions>
        </Container>
    );
}

export default Header;