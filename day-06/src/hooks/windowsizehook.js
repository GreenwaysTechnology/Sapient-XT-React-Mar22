import { useEffect, useState } from 'react';

//Hooks are not components but you can use component life cycle methods 

const useWindowInnerWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    //logic
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        //imperative dom listner
        window.addEventListener('resize', handleResize)
        //clean up code
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });
    return width;

};

export { useWindowInnerWidth };