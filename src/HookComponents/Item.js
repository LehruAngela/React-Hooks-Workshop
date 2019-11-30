import React from 'react';

const Item = props => {
  const {todo} = props;
  return(
    <div className="todo">
      {todo.text}
    </div>   
  )
}

export default Item;
