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
            const response = await fetch('https://www.freetestapi.com/api/v1/books');
            const data = await response.json();
            setBooks(data); // Store the fetched data in state
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <>
            <Navbar />
            <Categories data={books} /> 
            <Popular data={books}></Popular>
        </>
    );
}

export default App;
