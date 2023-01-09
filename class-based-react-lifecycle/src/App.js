import React, {Component} from 'react';
import './App.css';
import User from './User';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('constructor -> App');
    this.state = {
      users: [{name: 'User 1'}, {name: 'User 2'}],
      show: true
    }
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log('getDerivedStateFromProps -> App', props, state);
    return {
      myName: 'James Bond'
    }
  }

  componentDidMount = () => {
    console.log('componentDidMount -> App')
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('shouldComponentUpdate -> App', nextProps, nextState)
    return !(this.state.show === nextState.show && this.state.users === nextState.users);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('getSnapshotBeforeUpdate -> App', prevProps, prevState)
    return 'Hello World';
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log('componentDidUpdate -> App', prevProps, prevState, snapshot)
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
    this.setState({users});
  }

  removeUser = (index) => {
    const users = [...this.state.users];
    users.splice(index, 1);
    this.setState({users});
  }

  toggle = () => {
    // this.setState({show: !this.state.show});
    this.setState((state) => {
      return {
        show: !state.show
      }
    })
  }

  show = () => {
    this.setState({show: true})
  }

  render() {
    console.log('Render -> App', this.state);
    if(this.state.users.length === 0) {
      throw new Error('List can\'t be empty')
    }
    const users =  (
      <div className="users">
        <div>
          <button onClick={this.toggle}>Toggle</button>
          <button onClick={this.show}>Show</button>
        </div>
        {this.state.show && this.state.users.map((user, index) => {
          return <User 
            key={index} 
            name={user.name} 
            onChange={this.onChange} 
            removeUser={this.removeUser}
            index={index}
          />
        })}
      <button onClick={this.addUser}>Add User</button>
      </div>
    )
    console.log(users)
    return users;
    // return React.createElement('div', {className: 'App'}, React.createElement('p', {}, 'Hello'))
  }
}
export default App;

// JSX            