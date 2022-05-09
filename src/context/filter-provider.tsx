import { DataFilter } from '@model/types/filter';
import { useReducer } from 'react';
import RememberFilterContenxt from './filter-context';

const initialState = {
    location: '',
    startDate: '',
    endDate: ''
}

const filterReducer = (state: any, action: any) => {
    switch(action.type) {
        case 'ADD_DATA':
            return {
                ...action.payload
            }
        case 'CLEAR':
            return initialState;
        default: 
            return state;
    }
}

const FilterProvider: React.FC<{ children: any }> = ({ children }) => {
    
    const [filterData, dispatch] = useReducer(filterReducer, initialState);

  
    function rememberDataHandler(data: DataFilter) {
        dispatch({
            type: 'ADD_DATA',
            payload: { ...data }
        });
    }

    function clearHandler() {
        dispatch({
            type: 'CLEAR'
        });
    }

    const initialContext = {
        location: filterData.location,
        startDate: filterData.startDate,
        endDate: filterData.endDate,
        rememberData: rememberDataHandler,
        clear: clearHandler
    }

    return(
        <RememberFilterContenxt.Provider value={initialContext}>
            {children}
        </RememberFilterContenxt.Provider>
    );
}

export default FilterProvider;