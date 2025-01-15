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
import { fetchBooks } from '../services/api';

function Home(props) {
  const {
    addBooks = () => { },
    setTab = () => { },
  } = props;

  useEffect(() => {
    setTab();
    fetchBooks().then((books) => {
      addBooks(books);
    });
  }, [addBooks, setTab]);

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
};

const mapDispatchToProps = (dispatch) => ({
  addBooks: (data) => dispatch(addBooks(data)),
  setTab: () => dispatch(changeTab(Globals.TABS.HOME)),
});

export default connect(null, mapDispatchToProps)(Home);
