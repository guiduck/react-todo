import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodo] = useState(['todo 1', 'todo 2']);

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button> add </button>
      <button> clear </button>
      <div> 0 left to do </div>
    </>
  );
}

export default App;
