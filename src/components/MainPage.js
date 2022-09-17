import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const MainPage = ({ books, updateShelf }) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf shelf="currentlyReading" title="Currently Reading" books={books} updateShelf={updateShelf}/>
                <BookShelf shelf="wantToRead" title="Want to Read" books={books} updateShelf={updateShelf}/>
                <BookShelf shelf="read" title="Read" books={books} updateShelf={updateShelf}/>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}

export default MainPage;