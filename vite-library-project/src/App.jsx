import './App.css';
import Navbar from './Components/Navbar';
import { useState, useEffect } from 'react';
import Categories from './Components/Categories';
import Popular from './Components/Popular';

function App() {
    const [books, setBooks] = useState([]); // State to store the fetched data
    
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

    return (
        <>
            <Navbar />
            <div className="Image">
                <img src=".\src\assets\banner3.jpg" width="100%"/>
            </div>
            <Categories data={books} /> 
            <Popular data={books}></Popular>
        </>
    );
}

export default App;
