import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './BookCard.css';

const BookCard = (props) => {
  const { book } = props;

  const navigate = useNavigate();

  return (
    <div key={book.id} className="book">
      <img
        src={book.cover_image || book.coverImage}
        width="180px"
        height="200px"
        alt={book.title}
      />
      <h3>{book.title}</h3>
      <p className="book_author">{book.author}</p>
      <button className="view_button" onClick={() => navigate(`/book/${book.id}`)}>
                    View Details
      </button>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object,
};

export default BookCard;