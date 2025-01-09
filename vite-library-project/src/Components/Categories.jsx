import React, { useState, useEffect } from 'react';


function Categories({ data }) {
    const [genres, setGenres] = useState(new Set()); // State to store unique genres

    useEffect(() => {
        const genresSet = new Set();
        data.forEach((book) => {
            book.genre.forEach((g) => {
                genresSet.add(g); // Collect all unique genres
            });
        });
        setGenres(genresSet); // Update state with the unique genres
    }, [data]);

    return (
        <div className='Category_box'>
            <h2>Categories</h2>
            <ul className='book_category'>
                {[...genres].map((genre, index) => (
                    <li key={index}><button>{genre}</button></li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
