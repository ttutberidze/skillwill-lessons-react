import { PureComponent } from "react";

class User extends PureComponent {

  handleResize = () => {
    console.log('handleResize', this.props.name)
  }
  
  componentDidMount = () => {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    const {name, onChange, removeUser, index} = this.props;
    console.log('Render -> User', name)
    return (
        <div className='user-item'>
          <input type='text' value={name} onChange={(event) => onChange(event, index)} />
          <p>Name: {name}</p>
          <button onClick={() => removeUser(index)}>Remove</button>
        </div>
    )
  }
}

export default User;