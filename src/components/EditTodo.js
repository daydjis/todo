import React, { useState } from 'react'

function EditTodo(props) {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    })

    setInput('')
  }

  return (
    <form className="form-todo" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        placeholder="Update todo"
        name="text"
        type="text"
        value={input}
        onChange={handleChange}
      />
      <button className="todo-button edit">Update</button>
    </form>
  )
}

export default EditTodo
