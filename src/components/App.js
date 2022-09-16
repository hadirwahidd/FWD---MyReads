import "../css/App.css";
import MainPage from "./MainPage.js";
import SearchPage from "./SearchPage.js";
import NotFound from "./NotFound.js";
import * as BooksAPI from "../utils/BooksAPI.js";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  /*const updateBooks = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
  };

  const updateShelf = async (book, shelf) => {
    updateBooks(book, shelf);
  };*/

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<MainPage books={books} />} />
        <Route path="/search" element={<SearchPage books={books} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;