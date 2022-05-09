import React from 'react';
import { DataFilter } from '@model/types/filter';

const RememberFilterContenxt = React.createContext({
    location: '',
    startDate: '',
    endDate: '',

    rememberData: (data: DataFilter) => {},
    clear: () => {}
});

export default RememberFilterContenxt;