import { Link } from "react-router-dom";
import BookShelfs from "./BookShelfs";

const MainPage = () => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelfs bookshelfTitle1="Currently Reading" bookshelfTitle2="Want to Read" bookshelfTitle3="Read" />
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}

export default MainPage;