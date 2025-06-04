import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../bookslice";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter({ [e.target.name]: e.target.value }));
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <select name="author" onChange={handleChange}>
        <option value="">Filter by Author</option>
        <option value="Author A">Author A</option>
        <option value="Author B">Author B</option>
      </select>
      <select name="genre" onChange={handleChange}>
        <option value="">Filter by Genre</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
      </select>
      <select name="status" onChange={handleChange}>
        <option value="all">All</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>
    </div>
  );
};

export default Filter;
