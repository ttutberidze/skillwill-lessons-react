import React from 'react';
import ListItem from './listItem';

const TodoList = ({list, moveToDone}) => {

  const listJSX = list.map((item, index) => {
    return <ListItem key={index} title={item.title} actions={
      <button onClick={() => moveToDone(index)}>Move to done</button>
    } />
  })
  
  return (
    <div className='list-wrapper'>
      <p>Todo List</p>
      <hr />
      {listJSX.length > 0 ? listJSX : 'No Data Found'}
    </div>
  )
}

export default TodoList;