import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function BookDetail(props) {
    const { books } = props;

    // Get book ID from URL
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [book, setBook] = useState(null);

    useEffect(() => {
        setBook(books[id+1]);
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
            <div className="detailBookHeader">
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
            <div className="detail_box">
                <div className="book_cover">
                    <img src={book.cover_image} alt={book.title} width="300px" height="400px"/>
                </div>
                <div className="book_text">
                    <h2>{book.title}</h2>
                    <p>By {book.author}</p>
                    <hr></hr>
                    <p><b>Description:</b> </p>
                    <p>{book.description}</p>
                    <p><b>Rating:</b> {book.Rating}</p>
                    <p><b>Genres:</b> {book.genre.join(", ")}</p>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    books: state.bookStore.books,
})

export default connect(mapStateToProps)(BookDetail);
