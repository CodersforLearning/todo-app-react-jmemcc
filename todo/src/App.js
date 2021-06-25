/**
 * Tick - Minimal Todo List App
 * @author Jamie McCullough
 * @version 0.1
 * 
 * Warning: This is the most spaghetti code you will undoubtably read.
 * Apologies for anyone reading this that is not me.
 * 
 * This was made in a day, and was an exercise in me learning:
 *    - JavaScript      - React
 *    - HTML            - CSS 
 * from almost scratch.
 * 
 * Majority of the work built from code found in below sites.
 * https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks
 * https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning
 * https://www.kirupa.com/react/simple_todo_app_react.htm 
 * https://stackoverflow.com/questions/489340/vertically-align-text-next-to-an-image
 * https://www.w3schools.com/html/html_forms.asp
 * https://reactjs.org/docs/handling-events.html
 * https://stackoverflow.com/questions/3576605/prevent-linebreak-after-div
 * 
 * Tick logo made with Canva.
 * 
 */

import logo from './tick.png';
import './App.css';
import React from 'react';

function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const handleComplete = index => {
    const newTodos = [...todos];
    const c = newTodos[index].isCompleted;
    if (!c) {
      newTodos[index].isCompleted = true;
    }
    else {
      newTodos[index].isCompleted = false;
    }
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{verticalAlign:'left'}}/>
      </header>
      
      <div className="App-entry">
        <h1 className="todoTitle" align="center">My Todo List</h1>
        <TodoForm addTodo={addTodo} className="TodoForm" />
        <div className="todo-list">
          {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            handleComplete={handleComplete}
            removeTodo={removeTodo}
          />))}
        </div>
      </div>

      <footer className="App-footer">
        <p>by&nbsp;<a  className="App-link"
            href="https://github.com/jmemcc"
            target="_blank"
            rel="noopener noreferrer">
          jmemcc
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Written in React.</p>
      </footer>

    </div>
  );
}


function TodoForm({ addTodo }) {
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  const [value, setValue] = React.useState("");
  
  return (
    <form onSubmit={handleSubmit} align="center">
      <br></br>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

        
function Todo({ todo, index, handleComplete, removeTodo }) {
  return (
    <div
      className="todo"
    >
      <span> 
        <div onClick={() => handleComplete(index)}
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
          className="todoText">
          {todo.text} 
        </div>
        <div className="todoText"> &nbsp; </div>
        <button onClick={() => handleComplete(index)} className="completeButton">
        Complete
        </button>
        <button onClick={() => removeTodo(index)} className="removeButton">
        Remove
        </button>
        <br className="break"></br>
      </span>
    </div>
  );
}



export default App;
