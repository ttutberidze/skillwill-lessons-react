import React from 'react';

const ListItem = ({title, actions}) => {
  return (
    <div className='list-item'>
      <div>{title}</div>
      <div>{actions}</div>
    </div>
  )
}

export default ListItem;