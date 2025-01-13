import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Categories({ data }) {
    const [genres, setGenres] = useState(new Set());
    const navigate = useNavigate();

    useEffect(() => {
        const genresSet = new Set();
        data.forEach((book) => {
            if (Array.isArray(book.genre)) {
                book.genre.forEach((g) => genresSet.add(g));
            }
        });
        setGenres(genresSet);
    }, [data]);
    

    function handleClick(genre) {
        navigate(`/browserpage?genre=${genre}`); // Navigate with query params
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

export default Categories;
