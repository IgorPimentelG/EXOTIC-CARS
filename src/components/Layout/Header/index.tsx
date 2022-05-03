import { NavButton } from '@components/UI';
import { Filter } from '@components/Layout';
import { Container, ContainerLogo, Nav, TextPrimary, TextSecundary } from './styles';

const Header = () => {
    return(
        <Container>
            <ContainerLogo>
                <TextPrimary>exotic</TextPrimary>
                <TextSecundary>cars</TextSecundary>
            </ContainerLogo>

            <Filter/>

            <Nav>
                <NavButton>
                    Sign Up
                </NavButton>

                <NavButton primary>
                    Sign In
                </NavButton>
            </Nav>
        </Container>
    );
}

export default Header;