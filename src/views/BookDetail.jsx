import './BookDetail.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchBookById } from '../services/api';
import Navbar from '../Components/Navbar';
import { connect } from 'react-redux';
import { changeTab } from '../redux/reducers/tabReducer';
import Globals from '../constants';
import PropTypes from 'prop-types';

function BookDetail(props) {
  const {
    setTab = () => { },
  } = props;

  // Get book ID from URL
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    setTab();
    fetchBookById(id).then((book) => {
      setBook(book);
    }).catch((error) => console.error(error));
  }, [id]);

  if (!book) {
    return (
      <div className="loading_class">
        <div className="loading"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="detailBookHeader">
        <button onClick={() => navigate(-1)}> {'<'} Back</button>
      </div>
      <div className="detail_box">
        <div className="book_cover">
          <img src={book.cover_image} alt={book.title} width="300px" height="400px" />
        </div>
        <div className="book_text">
          <h2>{book.title}</h2>
          <p>By {book.author}</p>
          <hr></hr>
          <p><b>Description:</b> </p>
          <p>{book.description}</p>
          <p><b>Rating:</b> {book.rating}</p>
          <p><b>Genres:</b> {book.genre.join(', ')}</p>
        </div>
      </div>
    </>
  );
}

BookDetail.propTypes = {
  setTab: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  setTab: () => dispatch(changeTab(Globals.TABS.BOOKS_LIST)),
});

export default connect(null, mapDispatchToProps)(BookDetail);
