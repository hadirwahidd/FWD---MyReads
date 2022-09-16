import Book from "./Book";

const BookShelf = ({ shelf, title, books }) => {
    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter((book) => book.shelf === shelf).map((book) => (
                            <li key={book.id}>
                                <Book bookTitle={book.title} bookAuthors={book.authors}
                                    ImageUrl={book.imageLinks.thumbnail} Link={book.previewLink} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default BookShelf;