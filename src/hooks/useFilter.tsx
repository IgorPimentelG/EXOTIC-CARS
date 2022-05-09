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
        if( name === 'all' || name === '' ) {
            return cars;
        }

        return cars.filter((item) => {
            if( item.availability.regions.includes(name) ) {
                return item;
            }
        });
    }

    function filterPeriod(data: DataFilter) {
        if( data.startDate && data.endDate ) {
            if( data.startDate <= data.endDate ) {
                const locationFilter = filterLocation(data.location);
                const dateFilter = locationFilter.filter((item) => {
                    const [startDate, endDate] = item.availability.date;
                    console.log(data.startDate, startDate);
                    if( data.startDate >= startDate && data.endDate <= endDate) {
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
        } else {
            toast.warn('Inform all dates');
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