import './Categories.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Categories(props) {
  const { books = [] } = props;

  const [genres, setGenres] = useState(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    const genresSet = new Set();
    books.forEach((book) => {
      if (book?.genre?.length) {
        book.genre?.forEach((g) => genresSet.add(g));
      }
    });
    setGenres([...genresSet].sort());
  }, [books]);

  function handleClick(genre) {
    navigate(`/books?genre=${genre}`); // Navigate with query params
  }

  return (
    <div className="Category_box">
      <h2>Categories</h2>
      <ul className="book_category">
        {[...genres].map((genre, index) => (
          <li key={index}>
            <button
              className="genre_button"
              onClick={() => handleClick(genre)}
            >
              {genre}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
Categories.propTypes = {
  books: PropTypes.array,
};

const mapStateToProps = (state) => ({
  books: state.bookStore.books,
});

export default connect(mapStateToProps)(Categories);
