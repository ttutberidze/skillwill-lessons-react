import {useEffect, useRef, useState} from 'react';

const App = () =>  {
    const [name, setName] = useState('James Bond')
    const [age, setAge] = useState(20);
    const inputRef = useRef(null);
    
    const updateNameAndAge = () => {
        setAge(40);
        setName('Agent 007');
    }

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    useEffect(() => {
        console.log('useEffect', name);
        return () => {
            console.log('cleanup', name);
        }
    }, [name])

    const focusInput = () => {
        inputRef.current.focus()
    }

    console.log(name, age);
    return (
        <div>
            <button onClick={() => setName('007')}>Update Name</button>
            <button onClick={() => setAge(30)}>Update Age</button>
            <button onClick={updateNameAndAge}>Update Name and Age</button>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}

export default App;