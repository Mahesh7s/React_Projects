import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../bookslice";

const BookForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: "", author: "", genre: "" });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    if (formData.title && formData.author && formData.genre) {
      dispatch(addBook(formData));
      setFormData({ title: "", author: "", genre: "" });
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
      <input name="author" placeholder="Author" value={formData.author} onChange={handleChange} />
      <input name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default BookForm;