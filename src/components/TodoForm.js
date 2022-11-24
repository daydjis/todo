import React, { useState } from 'react'

function TodoForm(props) {
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
        placeholder="Add a Todo"
        name="text"
        type="text"
        value={input}
        onChange={handleChange}
      />
      <button className="todo-button">Add Todo</button>
    </form>
  )
}

export default TodoForm
