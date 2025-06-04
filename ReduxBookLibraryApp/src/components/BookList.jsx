import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook, toggleReadStatus } from "../bookslice";

const BookList = () => {
  const dispatch = useDispatch();
  const { list, filter } = useSelector(state => state.books);

  const filteredBooks = list.filter(book => {
    const byAuthor = filter.author ? book.author === filter.author : true;
    const byGenre = filter.genre ? book.genre === filter.genre : true;
    const byStatus = filter.status === "all" ? true : filter.status === "read" ? book.read : !book.read;
    return byAuthor && byGenre && byStatus;
  });

  return (
    <div>
      {filteredBooks.map(book => (
        <div key={book.id} style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
          <div>
            <strong>{book.title}</strong>
            <p>Author: {book.author} | Genre: {book.genre}</p>
          </div>
          <div>
            <label>
              <input type="checkbox" checked={book.read} onChange={() => dispatch(toggleReadStatus(book.id))} /> Read
            </label>
            <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;