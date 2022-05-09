import { Container, Nav } from './styles';
import { Filter } from '@components/Layout';
import { DataFilter } from '@model/types/filter';
import { Logo, NavButton } from '@components/UI';
import { useDimensios } from '@hooks/useDimensios';

const Header: React.FC<{
    rememberFilter: DataFilter | null;
    onFilter: (data: DataFilter) => void;
}> = ({ rememberFilter, onFilter }) => {

    const { width } = useDimensios();

    return(
        <Container>
            <Logo horizontal={width <= 760 ? true : false}/>
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