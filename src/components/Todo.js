import React, { useState } from 'react'
import { TbEdit } from 'react-icons/tb'
import { AiFillCloseCircle } from 'react-icons/ai'
import EditTodo from './EditTodo'

function Todo({ todos, completeTodo, removeTodo, updatesTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })
  const submitUpdate = (value) => {
    updatesTodo(edit.id, value)
    setEdit({
      id: null,
      value: '',
    })
  }

  if (edit.id) {
    return <EditTodo edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <AiFillCloseCircle
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TbEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ))
}

export default Todo
