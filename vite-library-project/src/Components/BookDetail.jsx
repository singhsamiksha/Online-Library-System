import { useParams } from 'react-router-dom';

function BookDetail() {
  const { id } = useParams();  // Get the dynamic book ID from the URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await fetch(`https://677f87360476123f76a6df69.mockapi.io/bookhubapi/bookdata/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    }
    fetchBook();
  }, [id]); // Re-fetch when the ID changes

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="book-detail">
      <h1>{book.title}</h1>
      <img src={book.cover_image} alt={book.title} />
      <p>{book.description}</p>
      <p>Author: {book.author}</p>
      {/* Add more details as required */}
    </div>
  );
}

export default BookDetail;
