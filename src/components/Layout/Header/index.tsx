import { Container, Nav } from './styles';
import { Filter } from '@components/Layout';
import { DataFilter } from '@model/types/filter';
import { Logo, NavButton } from '@components/UI';

const Header: React.FC<{
    rememberFilter: DataFilter | null;
    onFilter: (data: DataFilter) => void;
}> = ({ rememberFilter, onFilter }) => {
    return(
        <Container>
            <Logo/>
            <Filter onFilter={onFilter} rememberData={rememberFilter}/>
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