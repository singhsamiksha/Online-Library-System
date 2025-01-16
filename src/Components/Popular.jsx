import { connect } from 'react-redux';
import Globals from '../constants';
import PropTypes from 'prop-types';
import './Popular.css';
import BookCard from './BookCard';

function Popular(props) {
  const { books = [] } = props;
  const popular = books.filter((book) => book?.rating >= Globals.BOOK.POPULAR_THRESHOLD);

  return (
    <div className="popular_box">
      <h2>Popular Books</h2>
      <div className="popular_book">
        {(popular || []).map((book) => (
          <BookCard key={book.id} book={book} />
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
