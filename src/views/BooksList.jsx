import './BookList.css';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { changeTab } from '../redux/reducers/tabReducer';
import Globals from '../constants';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBooks } from '../services/api';
import BookCard from '../Components/BookCard';

function BooksList(props) {
  const {
    setTab = () => { },
  } = props;

  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const [genres, setGenres] = useState(new Set());
  const [searchKeyword, setSearchKeyword] = useState('');

  const [selectedGenre, setSelectedGenre] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => { setTab(); }, [setTab]);

  useEffect(() => {
    const genreFromParams = searchParams.get('genre') || '';
    setSelectedGenre(genreFromParams);
    fetchBooks()
      .then((books) => setAllBooks(books))
      .catch(() => console.error);
  }, [searchParams]);

  useEffect(() => {
    const genresSet = new Set();
    allBooks.forEach((book) => {
      if (Array.isArray(book?.genre)) {
        book.genre.forEach((g) => genresSet.add(g));
      }
    });
    setGenres(genresSet);
  }, [allBooks]);

  useEffect(() => {
    setFilteredBooks(allBooks.filter((book) => {
      const { title, genre } = book;
      const matchesKeyword = title.toLowerCase().trim().includes(searchKeyword.toLowerCase().trim());
      const matchesGenre = selectedGenre ? genre.includes(selectedGenre) : true;

      return matchesGenre && matchesKeyword;
    }));
  }, [searchKeyword, selectedGenre, allBooks]);

  return (
    <>
      <Navbar />
      <div className="Browse_books">
        <div className="category_flex">
          <div className="search">
            <p>Search Book</p>
            <input
              type="text"
              placeholder="Search"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </div>
          <div className="select">
            <p>Categories</p>
            <select
              value={selectedGenre}
              onChange={(e) =>
                navigate(`/books?genre=${e.target.value}`)
              }
            >
              <option value="">All</option>
              {[...genres].map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="list-box">
          <h2>{selectedGenre ? `${selectedGenre} Books` : 'All Books'}</h2>
          <div className="book-list">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

BooksList.propTypes = {
  addBooks: PropTypes.func,
  setTab: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  setTab: () => dispatch(changeTab(Globals.TABS.BOOKS_LIST)),
});

export default connect(null, mapDispatchToProps)(BooksList);
