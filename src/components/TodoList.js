import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id)

    setTodos(removeArr)
  }

  const updatesTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    )
  }

  const completeTodo = (id) => {
    let updatesTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatesTodos)
  }

  return (
    <div>
      <h1>Whats the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        updatesTodo={updatesTodo}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
    </div>
  )
}

export default TodoList
