import React, { useEffect, useState } from 'react';
import FilterTodo from './Components/FilterTodo';
import InputTodoList from './Components/InputTodoList';
import TodoDisplay1 from './Components/TodoDisplay1';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [view, setView] = useState('All');
  const [FilteredTodos, SetFilterTodos] = useState([]);

  const addTodoData = (newTitle, newDescription) => {
    const newTodo = {
      id: todos.length + 1,
      title: newTitle,
      description: newDescription,
      completed: false, // Use boolean instead of string
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoData = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeview = (e) => {
    setView(e.target.value);
  };

  useEffect(() => {
    if (view === 'All') {
      SetFilterTodos(todos);
    } else if (view === 'Completed') {
      SetFilterTodos(todos.filter((todo) => todo.completed === true));
    } else if (view === 'Not Completed') {
      SetFilterTodos(todos.filter((todo) => todo.completed === false));
    }
  }, [view, todos]);

  return (
    <div className="main-container" style={{ marginBottom: '20px' }}>
      <InputTodoList addTodoData={addTodoData} />
      <hr />
      <FilterTodo view={view} setView={setView} changeview={changeview} />
      <div className="card-container">
        <div className="row gx-4 gx-lg-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          {FilteredTodos.map((item, index) => (
            <div className="col h-100 mt-3" key={index}>
              <TodoDisplay1
                todos={todos}
                item={item}
                index={index}
                deleteTodoData={deleteTodoData}
                setTodos={setTodos}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
