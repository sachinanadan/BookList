import React, { useState } from "react";

const BookSearch = ({ addBook }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
    );
    const data = await response.json();
    setSearchResults(data.items || []);
  };

  return (
    <div className="book-search">
      <input
        type="text"
        placeholder="Search for a book..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="search-results">
        {searchResults.map((item) => (
          <div key={item.id} className="book-item">
            <p>{item.volumeInfo.title}</p>
            <button onClick={() => addBook(item.volumeInfo)}>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
