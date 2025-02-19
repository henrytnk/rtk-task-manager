import React, { useState } from "react";
import { addTask } from "../store/slices/taskManager";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

const Form = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch(addTask(text));
    setText("");
  };

  return (
    <form onSubmit={handleFormSubmission} className="flex gap-3">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter a task..."
        className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
      >
        Add
      </button>
    </form>
  );
};

export default Form;
