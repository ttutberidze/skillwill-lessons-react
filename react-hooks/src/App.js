import {useState, useCallback, useEffect} from 'react';
import './App.css';
import User from './User';

function App() {
  const [users, setUsers] = useState([{name: 'User 1'}, {name: 'User 2'}]);

  useEffect(() => {
    document.title = `You have ${users.length} users`;
  }, [users.length])

  const addUser = useCallback(() => {
    setUsers((users) => {
      const userList = [...users];
      userList.push({name: 'Type user name'});
      return userList;
    })
  }, [])

  const onChange = useCallback((event, index) => {
    setUsers((users) => {
      const userList = [...users];
      userList[index] = {
        name: event.target.value
      }
      return userList;
    });
  }, [])

  const removeUser = useCallback((index) => {
    setUsers((users) => {
      const userList = [...users];
      userList.splice(index, 1);
      return userList;
    });
  }, [])

  return (
    <div className="users">
      {users.map((user, index) => {
        return (
          <User
            key={index}
            name={user.name}
            onChange={onChange}
            removeUser={removeUser}
            index={index}
          />
        )
      })}
      <button onClick={addUser}>Add new user</button>
    </div>
  );
}

export default App;
