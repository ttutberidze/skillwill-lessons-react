import React from 'react';
import ListItem from './listItem';

const DoneList = ({list, moveToTodo, deleteFromDone}) => {

  const listJSX = list.map((item, index) => {
    return <ListItem key={index} title={item.title} actions={
      <>
        <button onClick={() => moveToTodo(index)}>Move to todo</button>
        <button onClick={() => deleteFromDone(index)}>Delete</button>
      </>
    } />
  })
  
  return (
    <div className='list-wrapper'>
      <p>Done List</p>
      <hr />
      {listJSX.length > 0 ? listJSX : 'No Data Found'}
    </div>
  )
}

export default DoneList;