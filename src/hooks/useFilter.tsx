import { useEffect, useState } from 'react';
import catalog from '@data/cars.json';
import { DataFilter } from '@model/types/filter';

const useFilter = () => {

    const { cars } = catalog;
    const [locations, setLocations] = useState<string[]>([]);

    useEffect(() => {
        const regions = cars.map((item) => item.availability.regions);
        const filter: string[] = [];
        
        regions.forEach((item) => {
           item.forEach((location) => {
            if( !filter.includes(location) ) {
                filter.push(location);
            }
           });
        });

        setLocations(filter);
    }, [cars]);

    function filterLocation(name: string) {

        if(name === 'all') {
            return cars;
        }

        return cars.filter((item) => {
            if( item.availability.regions.includes(name) ) {
                return item;
            }
        });
    }

    function filterPeriod(data: DataFilter) {
        const locationFilter = filterLocation(data.location);
        const dateFilter = locationFilter.filter((item) => {
            const [startDate, endDate] = item.availability.date;

            if( startDate >= data.startDate && endDate <= data.endDate ) {
                return item;
            }
        });

        if( dateFilter.length > 0 ) {
            return dateFilter;
        }

        return cars;
    }

    function getLocations() {
        return locations;
    }

    function getCatalog() {
        return cars;
    }

    return {
        filterLocation,
        filterPeriod,
        getLocations,
        getCatalog
    };
}

export { useFilter };