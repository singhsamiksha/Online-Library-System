import './App.css';
import Navbar from './Components/Navbar';
import { useEffect } from 'react';
import Categories from './Components/Categories';
import Popular from './Components/Popular';
import { connect } from 'react-redux';
import { addBooks } from './redux/reducers/bookReducer';
import PropTypes from 'prop-types';

function App(props) {
    const { addBooks = () => { } } = props;

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await fetch('https://677f87360476123f76a6df69.mockapi.io/bookhubapi/bookdata');
            const data = await response.json();
            addBooks(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <>
            <Navbar />
            <div className="Image">
                <img src=".\src\assets\banner3.jpg" width="100%" />
            </div>
            <Categories />
            <Popular />
        </>
    );
}

App.propTypes = {
    addBooks: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBooks: (data) => dispatch(addBooks(data)),
    }
}

export default connect(null, mapDispatchToProps)(App);
