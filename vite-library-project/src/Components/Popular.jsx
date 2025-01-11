import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Popular({ data }) {
  const [popular, setPopular] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Filter books with a rating >= 4.5
    const filteredBooks = data.filter((book) => book.Rating >= 4.9);
    setPopular(filteredBooks); // Update the popular state
  }, [data]);

  return (
    <div className="popular_box">
      <h2>Popular Books</h2>
      <div className="popular_book">
        {popular.map((book) => (
          <div key={book.id-1} className="book">
            <img
              src={book.cover_image}
              alt={book.title}
              width="180px"
              height="200px"
            />
            <h3>{book.title}</h3>
            <p className="book_author">{book.author}</p>
            <button
              className="view_button"
              onClick={() => navigate(`/book/${book.id-1}`)}
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
