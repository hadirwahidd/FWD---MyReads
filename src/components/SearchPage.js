import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book.js";
import * as BooksAPI from "../utils/BooksAPI.js";

const SearchPage = ({ books, updateShelf }) => {

  console.log(books);

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
          console.log("Search Error");
          setResults([]);
        }
        else {
          console.log(res);
          const result = res.map((b) => {
            books.find((book) => {
              if (b.id === book.id) {
                b.shelf = book.shelf;
              }
              else {
                b.shelf = "none";
              };
            });
          });
          console.log(result);
          /*const bookshelf = books.find(b => b.id === book.id);
            if (bookshelf) {
              book.shelf = bookshelf.shelf;
            }
            else {
              book.shelf = "none";
            };*/
            
          /*for (let i = 0; i < res.length; i++) {
            console.log(res[i].id);
            console.log(books[i].id);
            if (res[i].id === books[i].id) {
              console.log(res[i].id);
              res[i].shelf = books[i].shelf;
            }
            else {
              res[i].shelf = "none";
            };
          };*/
          setResults(res);
        }
      }
      else {
        setResults([]);
      }
    }
    catch (err) {
      console.log("Error:", err);
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
          {showingResults.map((book) => {
            /*const bookshelf = books.find(b => b.id === book.id);
            if (bookshelf) {
              book.shelf = bookshelf.shelf;
            }
            else {
              book.shelf = "none";
            };*/
            return (
              <li key={book.id}>
                <Book shelf={book.shelf} updateShelf={(shelf) => updateShelf(book, shelf)}
                  bookTitle={book.title} bookAuthors={book.authors}
                  ImageUrl={book?.imageLinks?.thumbnail} Link={book.previewLink}
                />
              </li>);
          })}
        </ol>
      </div>
    </div>
  )
}

export default SearchPage;