import { useEffect, useState } from "react"

const useWindowResize = () => {
    const [width, setWidth] = useState(document.documentElement.getBoundingClientRect().width);
    const [height, setHeight] = useState(document.documentElement.getBoundingClientRect().height);

    useEffect(() => {
        const handleResize = () => {
            setWidth(document.documentElement.getBoundingClientRect().width);
            setHeight(document.documentElement.getBoundingClientRect().height);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return {width, height};
}

export default useWindowResize;