import React, { useState } from "react";
import BookSearch from "./components/BookSearch";
import BookList from "./components/BookList";
// import BookItem  from "./Components/BookItems";
import "./index.css";

const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div className="app-container">
      <h1>Book Finder</h1>
      <BookSearch addBook={addBook} />
      <BookList books={books} />
    </div>
  );
};

export default App;
