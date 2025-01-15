import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Error.css';

function Error() {
  return (
    <>
      <Navbar />
      <div className="errorBox">
        <img src="https://static-00.iconduck.com/assets.00/emoji-sad-icon-512x512-vomssqlr.png" alt="error" width="200px" height="200px"></img>
        <h1>404 Not Found!</h1>
        <Link to="/"><p>Back to Home</p></Link>
      </div>
    </>
  );

}

export default Error;