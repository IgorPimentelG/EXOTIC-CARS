import { useEffect, useState } from 'react';
import catalog from '@data/cars.json';
import { DataFilter } from '@model/types/filter';
import { toast } from 'react-toastify';

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

        if( name === 'all' ) {
            return cars;
        }

        return cars.filter((item) => {
            if( item.availability.regions.includes(name) ) {
                return item;
            }
        });
    }

    function filterPeriod(startDate: string, endDate: string) {
        if( startDate <= endDate ) {
            const dateFilter = cars.filter((item) => {
                
                const [startDate, endDate] = item.availability.date;
    
                if( startDate >= startDate && endDate <= endDate ) {
                    console.log(item);
                    return item;
                }
            });
    
            if( dateFilter.length > 0 ) {
                return dateFilter;
            } else {
                toast.warn('No cars found');
            }
        } else {
            toast.error('The start date cannot be longer than the end date');
        }
        return cars;
    }

    function filterAll(data: DataFilter) {
        const locations = filterLocation(data.location);
        const period = filterPeriod(data.startDate, data.endDate);

        return period.filter((item) => {
            return locations.filter((local) => local.id === item.id);
        });
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
        filterAll,
        getLocations,
        getCatalog
    };
}

export { useFilter };