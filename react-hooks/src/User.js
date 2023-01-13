import { memo, useCallback, useEffect } from "react";

const User = ({name, onChange, removeUser, index}) => {

    const handleResize = useCallback(() => {
      console.log('RESIZING', name)
    }, [name]);

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, [handleResize])

    return (
        <div className='user-item'>
          <input type='text' value={name} onChange={(event) => onChange(event, index)} />
          <p>Name: {name}</p>
          <button onClick={() => removeUser(index)}>Remove</button>
        </div>
    )
}

export default memo(User);