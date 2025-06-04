import React from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Filter from "./components/Filter";

const App = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Book Library</h1>
      <BookForm />
      <Filter />
      <BookList />
    </div>
  );
};

export default App;