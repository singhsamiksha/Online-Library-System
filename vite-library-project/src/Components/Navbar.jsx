import { Link } from "react-router-dom";

function Navbar(){
    return(
    <div className="navbar">
        <div className="left">
            
            <img src="https://www.clipartqueen.com/image-files/book-blue.png" alt="logo" width="70px" height="70px"></img>
            <h1>BookHub</h1>
        </div>
        <div className="right">
            <ul>
                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/browserpage"}><li>Browse Books</li></Link>
                <Link to={"/addbook"}><li>Add Book</li></Link>
            </ul>
        </div>
        
    </div>
    );
}

export default Navbar;