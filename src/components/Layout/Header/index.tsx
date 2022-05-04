import { Logo, NavButton } from '@components/UI';
import { Filter } from '@components/Layout';
import { Container, Nav } from './styles';

const Header = () => {
    return(
        <Container>
            <Logo/>
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