import React from "react";

const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>{book.authors ? book.authors.join(", ") : "Unknown Author"}</p>
    </div>
  );
};

export default BookItem;
