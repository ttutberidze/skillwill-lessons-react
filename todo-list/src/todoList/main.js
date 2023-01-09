import {Component} from 'react';
import TodoList from './list/todoList';
import DoneList from './list/doneList';
import AddTodo from './add';

class Main extends Component {
  state = {
    todoList: [],
    doneList: []
  }

  addToList = v => {
    const todoList = [...this.state.todoList];
    todoList.push({title: v});
    this.setState({todoList});
  }

  moveToDone = (index) => {
    const doneList = [...this.state.doneList];
    const todoList = [...this.state.todoList];

    doneList.push(todoList[index]);
    todoList.splice(index, 1);
    this.setState({todoList, doneList});
  }

  moveToTodo = (index) => {
    const doneList = [...this.state.doneList];
    const todoList = [...this.state.todoList];

    todoList.push(doneList[index]);
    doneList.splice(index, 1);

    this.setState({todoList, doneList});
  }

  deleteFromDone = (index) => {
    const doneList = [...this.state.doneList];
    doneList.splice(index, 1);
    this.setState({doneList});
  }

  render() {
    return (
      <>
        <div className='main'>
          <TodoList list={this.state.todoList} moveToDone={this.moveToDone} />
          <DoneList list={this.state.doneList} moveToTodo={this.moveToTodo} deleteFromDone={this.deleteFromDone} />
        </div>
        <AddTodo addToList={this.addToList} />
      </>
    )
  }
}

export default Main;