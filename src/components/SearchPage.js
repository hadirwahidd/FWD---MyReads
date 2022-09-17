import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book.js";
import * as BooksAPI from "../utils/BooksAPI.js";

const SearchPage = ({ shelf, updateShelf }) => {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const updateQuery = (query) => {
    setQuery(query);
  };

  const handleInput = async (event) => {
    try {
      const input = event.target.value;
      updateQuery(input);

      if (input !== "") {
        const res = await BooksAPI.search(query);
        if (res.error) {
          setResults([]);
        }
        else {
          setResults(res);
        }
      }
      else {
        setResults([]);
      }
    }
    catch (err) {
      console.log("error");
    }
  };

  const showingResults = results.filter((r) =>
    r.title.toLowerCase().includes(query.toLowerCase()));

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
            onChange={handleInput}
          />
        </div>
      </div>

      <div className="search-books-results">
        <ol className="books-grid">
          {showingResults.map((book) => (
            <li key={book.id}>
              <Book shelf={shelf} updateShelf={(shelf) => updateShelf(book, shelf)}
                bookTitle={book.title} bookAuthors={book.authors}
                ImageUrl={book?.imageLinks?.thumbnail} Link={book.previewLink}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default SearchPage;