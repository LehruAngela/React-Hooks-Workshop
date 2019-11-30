import React, {Component} from 'react';
import Item from './Item';

class Todo extends Component {
  state = {
    showTodos: false,
    todos: [
      {text: 'Learn about React'}, 
      {text: 'Meet friend for lunch'}, 
      {text: 'Build really cool todo app'}
    ], 
    title: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => this.setState({title: json.title}))
  };

  handleShowTodos = () => {
    const { showTodos } = this.state;
    this.setState({ showTodos: !showTodos });
  };

  render(){
    const { showTodos, todos, title } = this.state;
    return(
      <div className='app'>
        <div className='todo-list'>
          <button onClick={this.handleShowTodos}>Show Todos</button>
          {showTodos && todos.map((todo, index)=>(
            <Item key={index} index={index} todo={todo} />
          ))}
        </div>
        <p>{title}</p>
      </div>
    )
  }
}

export default Todo;
