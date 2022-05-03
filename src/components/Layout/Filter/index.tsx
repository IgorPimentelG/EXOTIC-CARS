import { Container, ContainerIcon, Option, Period, Search } from './styles';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoCalendarSharp, IoSearchSharp } from 'react-icons/io5';
import { useTheme } from 'styled-components';

const Filter = () => {

    const theme = useTheme();
    const iconColor = theme.icon.primary;

    return(
        <Container>
            <Option>
                <ContainerIcon>
                    <FaMapMarkerAlt color={iconColor}/>
                </ContainerIcon>
                North Carolina, NC 90025
            </Option>

            <Period>
                <Option>
                    <ContainerIcon>
                        <IoCalendarSharp color={iconColor}/>
                    </ContainerIcon>
                    11/03/2021
                </Option>

                <Option>
                    <ContainerIcon>
                        <IoCalendarSharp color={iconColor}/>
                    </ContainerIcon>
                    12/12/2021
                </Option>
            </Period>

            <Search>
                <IoSearchSharp color={theme.main.primary}/>
            </Search>
        </Container>
    );
}

export default Filter;