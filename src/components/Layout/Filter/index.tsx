import { useRef } from 'react';
import { useTheme } from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoCalendarSharp, IoSearchSharp } from 'react-icons/io5';
import { 
    Container,
    ContainerIcon, 
    ContainerInputs, 
    Option,
    Period, 
    Search, 
    Input, 
    Calendar 
} from './styles';

const Filter = () => {

    const theme = useTheme();
    const iconColor = theme.icon.primary;

    const startDateRef = useRef<HTMLInputElement>(null);
    const endDateRef = useRef<HTMLInputElement>(null);
    const locationRef = useRef<HTMLInputElement>(null);

    const iconStartDateHandler = () => startDateRef.current!.focus();
    const iconEndDateHandler = () => endDateRef.current!.focus();
    const iconLocationHandler = () => locationRef.current!.focus();

    return(
        <Container>
            <ContainerInputs>
                <Option>
                    <ContainerIcon onClick={iconLocationHandler}>
                        <FaMapMarkerAlt color={iconColor}/>
                    </ContainerIcon>
                    <Input placeholder='Select the location' ref={locationRef}/>
                </Option>

                <Period>
                    <Option>
                        <ContainerIcon onClick={iconStartDateHandler}>
                            <IoCalendarSharp color={iconColor}/>
                        </ContainerIcon>
                        <Calendar type='date' ref={startDateRef}/>
                    </Option>

                    <Option>
                        <ContainerIcon onClick={iconEndDateHandler}>
                            <IoCalendarSharp color={iconColor}/>
                        </ContainerIcon>
                        <Calendar type='date' ref={endDateRef}/>
                    </Option>
                </Period>
            </ContainerInputs>

            <Search>
                <IoSearchSharp color={theme.main.primary}/>
            </Search>
        </Container>
    );
}

export default Filter;