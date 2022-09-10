import PropTypes from "prop-types";

const Book = ({ bookTitle, bookAuthors, ImageUrl, Link }) => {
  return (
    <div className="book">
      <div className="book-top">
        <a href={`${Link}`} target="_blank" rel="noreferrer">
          <div
            className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url(${ImageUrl})` }}>
          </div>
        </a>

        <div className="book-shelf-changer">
          <select>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{bookTitle}</div>
      <div className="book-authors">{bookAuthors}</div>
    </div>
  )
}

Book.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  bookAuthors: PropTypes.array.isRequired,
  ImageUrl: PropTypes.string.isRequired,
};

export default Book;