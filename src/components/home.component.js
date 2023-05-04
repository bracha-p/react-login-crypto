
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.log(error));
  }, []);

  const handleSelectChange = event => {
    setSelectedTodoId(parseInt(event.target.value));
  };

  const selectedTodo = todos.find(todo => todo.id === selectedTodoId);

  return (
    <div>
      <h3>crypto-web</h3>
      <div className="mb-5">
        <h1>this is my home</h1>
        <p>welcome</p>
        < select className="form-select"onChange={handleSelectChange}>
          <option classN value="">Choose a todo</option>
          {todos.map(todo => (
            <option key={todo.id} value={todo.id}>
              {todo.title}
            </option>
          ))}
        </select>
        {selectedTodo ? (
          <div>
            <p>Selected todo: {selectedTodo.title}</p>
            <p>Completed: {selectedTodo.completed ? 'Yes' : 'No'}</p>
          </div>
        ) : (
          <p>Please select a todo</p>
        )}
      </div>
    </div>
  );
}