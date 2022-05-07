import { Logo, NavButton } from '@components/UI';
import { Filter } from '@components/Layout';
import { Container, Nav } from './styles';
import { DataFilter } from '@model/types/filter';

const Header: React.FC<{ onFilter: (data: DataFilter) => void }> = ({ onFilter }) => {
    return(
        <Container>
            <Logo/>
            <Filter onFilter={onFilter}/>
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