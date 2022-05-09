import { useState, useEffect } from 'react';

const useDimensios = () =>  {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', updateDimensionsHandler);
    }, [width]);

    function updateDimensionsHandler() {
        setWidth(window.innerWidth);
    }

    return { width };
}

export { useDimensios };