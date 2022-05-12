import React, { useContext, useEffect, useRef, useState } from 'react';
import RememberFilterContenxt from '@context/filter-context';
import { toast } from 'react-toastify';
import { useTheme } from 'styled-components';
import { useFilter } from '@hooks/useFilter';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { DataFilter } from '@model/types/filter';
import { IoCalendarSharp, IoSearchSharp } from 'react-icons/io5';
import { 
    Container,
    ContainerIcon, 
    ContainerInputs, 
    Option,
    Period, 
    Search, 
    Calendar,
    CustomSelect
} from './styles';

const Filter: React.FC<{
    onFilter: (data: DataFilter) => void;
}> = ({ onFilter }) => {

    type options = {
        value: string;
        label: string;
    }

    const theme = useTheme();
    const iconColor = theme.icon.primary;
    const ctxFilter = useContext(RememberFilterContenxt);

    const { getLocations } = useFilter();
    const locations = getLocations();

    const [minDate, setMinDate] = useState<string>('');
    const [maxDate, setMaxDate] = useState(''); 
    const [location, setLocation] = useState<options>();
    const [optionsLocations, setOptionsLocations] = useState<options[]>([]);

    const startDateRef = useRef<HTMLInputElement>(null);
    const endDateRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const options = locations.map((item) => ({value: item, label: item}));
        setOptionsLocations(() => [{value: 'all', label: 'All'}, ...options]);
    }, [locations]);

    function filterHandler() {
        const startDate = startDateRef.current!.value;
        const endDate = endDateRef.current!.value;

        if( location || (startDate && endDate) ) {
            onFilter({ 
                location: location?.value ? location.value : '', 
                startDate, 
                endDate 
            });
        } else {
            toast.warn('Define filter');
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
                    <ContainerIcon>
                        <FaMapMarkerAlt color={iconColor}/>
                    </ContainerIcon>
                    <CustomSelect
                        classNamePrefix='Select' 
                        placeholder='Select the location'
                        value={location}
                        onChange={(value) => setLocation(value as options)}
                        options={optionsLocations}
                        defaultValue={ctxFilter.location && 
                            { value: ctxFilter.location, label: ctxFilter.location }
                        }                        
                    />
                </Option>

                <Period>
                    <Option>
                        <ContainerIcon>
                            <IoCalendarSharp color={iconColor}/>
                        </ContainerIcon>
                        <Calendar 
                            type='date' 
                            max={maxDate} 
                            ref={startDateRef} 
                            onChange={onChangeStartDate}
                            defaultValue={ctxFilter.startDate}
                        />
                    </Option>

                    <Option>
                        <ContainerIcon>
                            <IoCalendarSharp color={iconColor}/>
                        </ContainerIcon>
                        <Calendar 
                            type='date' 
                            min={minDate} 
                            ref={endDateRef}
                            onChange={onChangeEndDate}
                            defaultValue={ctxFilter.endDate}
                        />
                    </Option>
                </Period>
            </ContainerInputs>

            <Search onClick={filterHandler}>
                <IoSearchSharp color={theme.main.primary}/>
            </Search>
        </Container>
    );
}

export default Filter;