import React from "react";
import BookItem from "./BookItems";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      <h2>Your Books</h2>
      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        books.map((book, index) => <BookItem key={index} book={book} />)
      )}
    </div>
  );
};

export default BookList;
