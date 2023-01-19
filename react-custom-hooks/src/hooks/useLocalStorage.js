import {useEffect, useState} from 'react';

const useLocalStorage = (storageKey, fallback) => {
    const [value, setValue] = useState(localStorage.getItem(storageKey) || fallback);

    useEffect(() => {
        localStorage.setItem(storageKey, value)
    }, [storageKey, value])

    return [value, setValue]
}

export default useLocalStorage;