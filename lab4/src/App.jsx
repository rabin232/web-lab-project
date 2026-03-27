import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  
  function handleSubmit(e) {
    e.preventDefault()

    const value = input.trim()
    if (!value) return

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: value,
        completed: false,
      },
    ])

    setInput('')
  }

  
  function toggleTodo(id) {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  
  function clearCompleted() {
    setTodos(todos.filter(todo => !todo.completed))
  }

  
  function editTodo(id, currentText) {
    const updatedText = window.prompt('Edit todo', currentText)

    if (!updatedText || !updatedText.trim()) return

    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, text: updatedText.trim() }
          : todo
      )
    )
  }

  const remaining = todos.filter(todo => !todo.completed).length

  return (
    <div className="page">
      <div className="app">
        <header className="app-header">
          <h1>Lab 4 Todos</h1>
          <p>Simple list with basic colors.</p>
        </header>

        <main>
          <form className="todo-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add a task and press Enter"
              autoComplete="off"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>

          <div className="todo-section">
            <ul className="todo-list">
              {todos.map(todo => (
                <li
                  key={todo.id}
                  className={`todo-item${todo.completed ? ' completed' : ''}`}
                >
                  <button
                    type="button"
                    className="todo-checkbox"
                    aria-label="Toggle done"
                    onClick={() => toggleTodo(todo.id)}
                  />
                  <span className="todo-text">{todo.text}</span>

                  <div className="todo-actions">
                    <button
                      type="button"
                      className="edit-btn"
                      onClick={() => editTodo(todo.id, todo.text)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => removeTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="card-footer">
              <span>
                {remaining === 1
                  ? '1 item left'
                  : `${remaining} items left`}
              </span>

              <button
                className="link-btn"
                type="button"
                onClick={clearCompleted}
              >
                Clear completed
              </button>
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App