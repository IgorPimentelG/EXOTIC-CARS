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
    Calendar, 
    Select
} from './styles';
import { useFilter } from '@hooks/useFilter';
import { DataFilter } from '@model/types/filter';

const Filter: React.FC<{ onFilter: (data: DataFilter) => void }> = ({ onFilter }) => {

    const theme = useTheme();
    const iconColor = theme.icon.primary;
    const { getLocations } = useFilter();

    const startDateRef = useRef<HTMLInputElement>(null);
    const endDateRef = useRef<HTMLInputElement>(null);
    const locationRef = useRef<HTMLSelectElement>(null);
    
    const locations = getLocations();
    
    const iconStartDateHandler = () => startDateRef.current!.focus();
    const iconEndDateHandler = () => endDateRef.current!.focus();
    const iconLocationHandler = () => locationRef.current!.focus();

    function onConfirmFilter() {
        const location = locationRef.current!.value;
        const startDate = startDateRef.current!.value;
        const endDate = endDateRef.current!.value;
        onFilter({ location, startDate, endDate });
    }

    return(
        <Container>
            <ContainerInputs>
                <Option>
                    <ContainerIcon onClick={iconLocationHandler}>
                        <FaMapMarkerAlt color={iconColor}/>
                    </ContainerIcon>
                    <Select ref={locationRef}>
                        <option selected disabled value='all'>Select the location</option>
                        {locations.map((location) => (
                            <option value={location}>{location}</option>
                        ))}
                        <option value='all'>All</option>
                    </Select>
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

            <Search onClick={onConfirmFilter}>
                <IoSearchSharp color={theme.main.primary}/>
            </Search>
        </Container>
    );
}

export default Filter;