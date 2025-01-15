import './AddBook.css';
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { changeTab } from "../redux/reducers/tabReducer";
import Globals from "../constants";
import { connect } from "react-redux";
import { createBook, isImageURL } from "../services/api";
import Alert from '../Components/Alert';

const initialForm = {
  title: "",
  author: "",
  publication_year: "",
  genre: "",
  description: "",
  cover_image: "",
  rating: "",
};


function AddBook(props) {
  const {
    setTab = () => { },
  } = props;

  useEffect(() => { setTab() }, [setTab]);

  const navigate = useNavigate();

  const [book, setBook] = useState({ ...initialForm });
  const [errors, setErrors] = useState({ ...initialForm });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const apiData = {
        ...book,
        genre: book.genre.split(',').map(g => g.trim()).filter(Boolean),
      };

      createBook(apiData)
        .then((response) => {
          setSuccessMessage('✔ Created book succesfully');
          navigate(`/book/${response.id}`);
        })
        .catch(() => setErrorMessage('!! Error in creating book'));
    }
  };

  const validateForm = async () => {
    let tempErrors = { ...initialForm };

    Object.keys(tempErrors).forEach(key => {
      if (!book[key] || !book[key].length) {
        tempErrors[key] = 'Please enter the value.';
      };
    })

    if (isNaN(book.publication_year) || book.publication_year.length !== 4) {
      tempErrors.publication_year = "Please enter a valid 4-digit publication year.";
    }

    if (book.genre?.split(',').map(g => g.trim()).filter(Boolean).length === 0) {
      tempErrors.genre = "At least one genre must be selected.";
    }

    // Cover image URL validation
    const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;
    if (!urlPattern.test(book.cover_image)) {
      tempErrors.cover_image = "Please enter a valid URL for the cover image.";
    } else {
      const isImageValid = await isImageURL(book.cover_image);
      if (!isImageValid) {
        tempErrors.cover_image = "The cover image URL is not a valid image.";
      }
    }

    if (
      !Number.isInteger(Number(book.rating))
      || book.rating < Globals.RATING.LOWEST
      || book.rating > Globals.RATING.HIGHEST
    ) {
      tempErrors.rating = "Rating must be a integer between 1 and 5.";
    }

    setErrors(tempErrors);

    return !Object.values(tempErrors).join('').length;
  };

  return (
    <>
      <Navbar />
      <div className="addBookForm">
        <h2 style={{ marginBottom: 16 }}>Add a New Book</h2>
        <form onSubmit={handleSubmit}>
          <label> Title: <input type="text" name="title" value={book.title} onChange={handleChange} />
            {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
          </label>
          <label> Author:
            <input type="text" name="author" value={book.author} onChange={handleChange} />
            {errors.author && <p style={{ color: 'red' }}>{errors.author}</p>}
          </label>
          <label> Publication Year:
            <input type="number" name="publication_year" value={book.publication_year} onChange={handleChange} />
            {errors.publication_year && <p style={{ color: 'red' }}>{errors.publication_year}</p>}
          </label>
          <label> Genre:
            <input type="text" name="genre" value={book.genre} onChange={handleChange} />
            {errors.genre && <p style={{ color: 'red' }}>{errors.genre}</p>}
          </label>
          <label> Description:
            <input type="text" name="description" value={book.description} onChange={handleChange} />
            {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
          </label>
          <label> Cover Image URL:
            <input type="text" name="cover_image" value={book.cover_image} onChange={handleChange} />
            {errors.cover_image && <p style={{ color: 'red' }}>{errors.cover_image}</p>}
          </label>
          <label> Rating:
            <input type="number" step="0.1" name="rating" value={book.rating} onChange={handleChange} />
            {errors.rating && <p style={{ color: 'red' }}>{errors.rating}</p>}
          </label>
          <button className='submit-button' type="submit">Add Book</button>
        </form>

        <Alert
          showPopup={successMessage}
          closePopup={() => {
            setSuccessMessage('');
            navigate('/books');
          }}
          popupType='success'
          message={successMessage}
        />

        <Alert showPopup={errorMessage} closePopup={setErrorMessage} popupType='error' message={errorMessage} />
      </div>
    </>
  );
}

AddBook.propTypes = {
  addBooks: PropTypes.func,
  setTab: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTab: () => dispatch(changeTab(Globals.TABS.ADD_BOOK)),
  }
}

export default connect(null, mapDispatchToProps)(AddBook);
