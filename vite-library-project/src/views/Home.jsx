import './Home.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { addBooks } from '../redux/reducers/bookReducer';
import { changeTab } from '../redux/reducers/tabReducer';
import Navbar from '../Components/Navbar';
import Categories from '../Components/Categories';
import Popular from '../Components/Popular';
import Globals from '../constants';

function Home(props) {
    const {
        addBooks = () => { },
        setTab = () => { },
    } = props;

    useEffect(() => {
        setTab();
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

Home.propTypes = {
    addBooks: PropTypes.func,
    setTab: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBooks: (data) => dispatch(addBooks(data)),
        setTab: () => dispatch(changeTab(Globals.TABS.HOME)),
    }
}

export default connect(null, mapDispatchToProps)(Home);
