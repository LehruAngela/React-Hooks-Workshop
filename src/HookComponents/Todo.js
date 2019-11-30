import React, { useState, useEffect } from 'react';
import Item from './Item';

const Todo = props => {
  const [todos, setTodos] = useState([
    {text: 'Learn about React'}, 
    {text: 'Meet friend for lunch'}, 
    {text: 'Build really cool todo app'}
  ]);

  const [showTodos, setShowTodos] = useState(false);

  const [title, setTitle] = useState('');

  const handleShowTodos = () => {
    setShowTodos(!showTodos);
  };

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => setTitle(json.title))
  }, []);

  return (
    <div className="app">
      <div className="todo-list">
        <button onClick={handleShowTodos}>Show Todos</button>
        {showTodos && todos.map((todo, index)=>(
          <Item key={index} index={index} todo={todo} />
        ))}
      </div>
      <p>{title}</p>
    </div>
  )
}

export default Todo;
