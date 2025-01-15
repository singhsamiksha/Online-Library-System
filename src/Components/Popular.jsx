import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Globals from '../constants';
import PropTypes from 'prop-types';
import './Popular.css';

function Popular(props) {
  const { books = [] } = props;
  const popular = books.filter((book) => book?.rating >= Globals.BOOK.POPULAR_THRESHOLD);
  const navigate = useNavigate();

  return (
    <div className="popular_box">
      <h2>Popular Books</h2>
      <div className="popular_book">
        {(popular || []).map((book) => (
          <div key={book.id - 1} className="book">
            <img
              src={book.coverImage}
              alt={book.title}
              width="180px"
              height="200px"
            />
            <h3>{book.title}</h3>
            <p className="book_author">{book.author}</p>
            <button
              className="view_button"
              onClick={() => navigate(`/book/${book.id}`)}
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

Popular.propTypes = {
  books: PropTypes.array,
};

const mapStateToProps = (state) => ({
  books: state.bookStore.books,
});

export default connect(mapStateToProps)(Popular);
