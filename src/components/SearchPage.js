import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book.js";

const SearchPage = ({ books }) => {

  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    setQuery(query);
  };

  const clearQuery = () => {
    updateQuery("");
  };

  const showingBooks =
    query === ""
      ? books
      : books.filter((b) =>
        b.title.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>

      <div className="search-books-results">
        <ol className="books-grid">
          {showingBooks.map((book) => (
            <li key={book.id}>
              <Book bookTitle={book.title} bookAuthors={book.authors} ImageUrl={book.imageLinks.thumbnail} Link={book.previewLink} />
            </li>
          ))}
        </ol>
      </div>

      {(showingBooks.length !== books.length && showingBooks.length !== 0) && (
        <center>
          <p>Now showing {showingBooks.length} of {books.length} books in the library</p>
          <button onClick={clearQuery}>Show All</button>
        </center>
      )}

      {showingBooks.length === 0 && (
        <center>
          <p>No results found</p>
          <button onClick={clearQuery}>Show all books</button>
        </center>
      )}
    </div>
  )
}

export default SearchPage;