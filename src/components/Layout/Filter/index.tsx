import React, { useEffect, useRef, useState } from 'react';
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

const Filter: React.FC<{
    rememberData: DataFilter | null;
    onFilter: (data: DataFilter) => void;
}> = ({ rememberData, onFilter }) => {

    const theme = useTheme();
    const iconColor = theme.icon.primary;

    const { getLocations } = useFilter();
    const locations = getLocations();

    const [minDate, setMinDate] = useState<string>('');
    const [maxDate, setMaxDate] = useState('');

    const startDateRef = useRef<HTMLInputElement>(null);
    const endDateRef = useRef<HTMLInputElement>(null);
    const locationRef = useRef<HTMLSelectElement>(null);
    
    const iconStartDateHandler = () => startDateRef.current!.focus();
    const iconEndDateHandler = () => endDateRef.current!.focus();
    const iconLocationHandler = () => locationRef.current!.focus();

    function onConfirmFilter() {
        const location = locationRef.current!.value;
        const startDate = startDateRef.current!.value;
        const endDate = endDateRef.current!.value;

        if( location || (startDate && endDate) ) {
            onFilter({ location, startDate, endDate });
        }
    }

    function onChangeStartDate(event: React.ChangeEvent) {
        const element = event.currentTarget as HTMLInputElement;
        setMinDate(element.value);
    }

    function onChangeEndDate(event: React.ChangeEvent) {
        const element = event.currentTarget as HTMLInputElement;
        setMaxDate(element.value);
    }

    return(
        <Container>
            <ContainerInputs>
                <Option>
                    <ContainerIcon onClick={iconLocationHandler}>
                        <FaMapMarkerAlt color={iconColor}/>
                    </ContainerIcon>
                    <Select 
                        ref={locationRef} 
                        defaultValue={`${rememberData?.location}}`}
                    >
                        <option disabled value=''>Select the location</option>
                        {locations.map((location) => (
                            <option key={location} value={location}>{location}</option>
                        ))}
                        <option value='all'>All</option>
                    </Select>
                </Option>

                <Period>
                    <Option>
                        <ContainerIcon onClick={iconStartDateHandler}>
                            <IoCalendarSharp color={iconColor}/>
                        </ContainerIcon>
                        <Calendar 
                            type='date' 
                            max={maxDate} 
                            ref={startDateRef} 
                            onChange={onChangeStartDate}
                        />
                    </Option>

                    <Option>
                        <ContainerIcon onClick={iconEndDateHandler}>
                            <IoCalendarSharp color={iconColor}/>
                        </ContainerIcon>
                        <Calendar 
                            type='date' 
                            min={minDate} 
                            ref={endDateRef}
                            onChange={onChangeEndDate}
                        />
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