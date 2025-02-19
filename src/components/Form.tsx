import React, { useState } from 'react'

const Form = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleFormSubmission}>
      <input type="text" value={text} onChange={handleInputChange} />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default Form