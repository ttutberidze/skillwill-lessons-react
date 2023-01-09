import React, {Component} from 'react';
import './App.css';
import User from './User';

class App extends Component {

  state = {
    users: [{name: 'User 1'}, {name: 'User 2'}]
  }

  onChange = (event, index) => {
    const users = [...this.state.users];
    users[index] = {
      name: event.target.value
    }
    this.setState({users});
  }

  addUser = () => {
    const users = [...this.state.users];
    users.push({name: 'Type your name'});
    this.setState({users}, () => console.log('setState Finished'));
    console.log('After setState', this.state);
  }

  removeUser = (index) => {
    const users = [...this.state.users];
    users.splice(index, 1);
    this.setState({users});
  }

  render() {
    console.log('Render', this.state);
    return (
      <div className="users">
        {this.state.users.map((user, index) => {
          return <User 
            key={index} 
            name={user.name} 
            onChange={(event) => this.onChange(event, index)} 
            removeUser={() => this.removeUser(index)}
          />
        })}
        <button onClick={this.addUser}>Add User</button>
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('p', {}, 'Hello'))
  }
}
export default App;

// JSX