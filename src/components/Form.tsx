import React, { useState } from 'react';
import { addTask } from '../store/slices/taskManager';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

const Form = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask(text)); 
    setText('');
  }

  return (
    <form onSubmit={handleFormSubmission}>
      <input type="text" value={text} onChange={handleInputChange} />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default Form