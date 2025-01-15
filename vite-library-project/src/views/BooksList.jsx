import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { changeTab } from "../redux/reducers/tabReducer";
import Globals from "../constants";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function BooksList(props) {
    const {
        setTab = () => { },
    } = props;

    const [books, setBooks] = useState([]);
    const [genres, setGenres] = useState(new Set());
    const [searchKeyword, setSearchKeyword] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        setTab();
        const genreFromParams = searchParams.get("genre") || "";
        setSelectedGenre(genreFromParams);
        fetchData();
    }, [searchParams]);

    useEffect(() => {
        const genresSet = new Set();
        books.forEach((book) => {
            if (Array.isArray(book.genre)) {
                book.genre.forEach((g) => genresSet.add(g));
            }
            if (Array.isArray(book.genre)) {
                book.genre.forEach((g) => genresSet.add(g));
            }
        });
        setGenres(genresSet);
    }, [books]);

    async function fetchData() {
        try {
            const response = await fetch(
                "https://677f87360476123f76a6df69.mockapi.io/bookhubapi/bookdata"
            );
            const data = await response.json();

            setBooks(data.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const filteredBooks = books.filter((book) => {
        const matchesKeyword = book.title
            .toLowerCase()
            .includes(searchKeyword.toLowerCase());
        const matchesGenre = selectedGenre
            ? book.genre.includes(selectedGenre)
            : true;
        return matchesKeyword && matchesGenre;
    });

    return (
        <>
            <Navbar />
            <div className="Browse_books">
                <div className="category_flex">
                    <div className="search">
                        <p>Search Book Keywords</p>
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
                    <h2>{selectedGenre ? `${selectedGenre} Books` : "All Books"}</h2>
                    <div className="book-list">
                        {filteredBooks.map((book) => (
                            <div key={book.id - 1} className="book">
                                <img
                                    src={book.cover_image}
                                    width="180px"
                                    height="200px"
                                    alt={book.title}
                                />
                                <h3>{book.title}</h3>
                                <p className="book_author">{book.author}</p>
                                <button onClick={() => navigate(`/book/${book.id}`)}>
                                    View
                                </button>
                            </div>
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
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTab: () => dispatch(changeTab(Globals.TABS.BOOKS_LIST)),
    }
}

export default connect(null, mapDispatchToProps)(BooksList);
