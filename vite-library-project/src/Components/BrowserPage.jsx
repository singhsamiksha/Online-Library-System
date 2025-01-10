import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function BrowserPage() {
    const [books, setBooks] = useState([]); // State to store the fetched data
    const [genres, setGenres] = useState(new Set()); // State to store unique genres
    const [searchKeyword, setSearchKeyword] = useState(""); // State for search input
    const [selectedGenre, setSelectedGenre] = useState(""); // State for selected genre

    useEffect(() => {
        const genresSet = new Set();
        books.forEach((book) => {
            book.genre.forEach((g) => {
                genresSet.add(g); // Collect all unique genres
            });
        });
        setGenres(genresSet); // Update state with the unique genres
    }, [books]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await fetch('https://677f87360476123f76a6df69.mockapi.io/bookhubapi/bookdata');
            const data = await response.json();
            setBooks(data); // Store the fetched data in state
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // Filter books based on search and selected genre
    const filteredBooks = books.filter((book) => {
        const matchesKeyword = book.title.toLowerCase().includes(searchKeyword.toLowerCase());
        const matchesGenre = selectedGenre ? book.genre.includes(selectedGenre) : true;
        return matchesKeyword && matchesGenre;
    });

    return (
        <>
            <Navbar />
            <Outlet />
            <div className="Browse_books">
                <div className="category_flex">
                    <div className="search">
                        <p>Search Book Keywords</p>
                        <input
                            type="text"
                            placeholder="search"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)} // Update search state
                        />
                    </div>
                    <div className="select">
                        <p>Categories</p>
                        <select
                            value={selectedGenre}
                            onChange={(e) => setSelectedGenre(e.target.value)} // Update genre state
                        >
                            <option value={''}>All</option>
                            {[...genres].map((genre, index) => (
                                <option key={index} value={genre}>
                                    {genre}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="list-box">
                    <h2>{selectedGenre + " " + "Books"}</h2>
                    <div className="book-list">
                    {filteredBooks.map((book) => (
                        <div key={book.id} className="book">
                            <img src={book.cover_image} width="180px" height="200px" alt={book.title} />
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <button onClick={() => navigate(`/book/${book.id}`)}>View</button>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BrowserPage;
