function Navbar(){
    return(
    <div className="navbar">
        <div className="left">
            
            <img src="https://www.clipartqueen.com/image-files/book-blue.png" alt="logo" width="70px" height="70px"></img>
            <h1>BookHub</h1>
        </div>
        <div className="right">
            <ul>
                <li>Home</li>
                <li>Browse Books</li>
                <li>Add Book</li>
            </ul>
        </div>
        
    </div>
    );
}

export default Navbar;