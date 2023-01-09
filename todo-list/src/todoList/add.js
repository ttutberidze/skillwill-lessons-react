import {Component} from 'react';

class AddTodo extends Component {
  state = {
    input: ''
  }
  add = () => {
    this.props.addToList(this.state.input);
    this.setState({input: ''});
  }

  render() {
    return (
      <div className='wrapper'>
        <input 
          className='input' 
          type="text" 
          value={this.state.input} 
          onChange={e => this.setState({input: e.target.value})} 
          placeholder='Enter Task Description'
        />
        <button onClick={this.add}>Add New</button>
      </div>
    )
  }
}

export default AddTodo;