import { useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();
  
  const [book, setBook] = useState({
    title: "",
    author: "",
    publication_year: "",
    genre: [],
    description: "",
    cover_image: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "genre") {
      // Split the genres by comma and trim any extra spaces
      setBook((prevBook) => ({
        ...prevBook,
        [name]: value.split(',').map((g) => g.trim()),
      }));
    } else {
      setBook((prevBook) => ({
        ...prevBook,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Data Submitted:", book);

    fetch("https://677f87360476123f76a6df69.mockapi.io/bookhubapi/bookdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
  };

  function handleClick() {
    navigate(`/browserpage`);
  }

  return (
    <>
      <Navbar />
      <div className="addBookForm">
        <h2>Add a New Book</h2>
        <form onSubmit={handleSubmit}>
          <label> Title: <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label> Author:
            <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label> Publication Year:
            <input
              type="number"
              name="publication_year"
              value={book.publication_year}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label> Genre:
            <input
              type="text"
              name="genre"
              value={book.genre.join(', ')} // To show genres as a comma-separated string
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label> Description:
            <input
              type="text"
              name="description"
              value={book.description}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label> Cover Image URL:
            <input
              type="text"
              name="cover_image"
              value={book.cover_image}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label> Rating:
            <input
              type="number"
              step="0.1"
              name="rating"
              value={book.rating}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit" onClick={handleClick}>Add Book</button>
        </form>
      </div>
    </>
  );
}

export default AddBook;
