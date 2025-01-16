import './Navbar.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Globals from '../constants';

function Navbar({ currentTab = null }) {

  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
              margin: 'auto',
            }}
          >
            <h1>BookHub</h1>
          </Link>
        </div>
        <div className="right">
          <ul>
            <Link to={'/'} className={`nav_button ${currentTab === Globals.TABS.HOME ? 'active' : ''}`}>Home</Link>
            <Link to={'/books'} className={`nav_button ${currentTab === Globals.TABS.BOOKS_LIST ? 'active' : ''}`}>Browse Books</Link>
            <Link to={'/addbook'} className={`nav_button ${currentTab === Globals.TABS.ADD_BOOK ? 'active' : ''}`}>Add Book</Link>
          </ul>
        </div>
      </div>
    </>
  );
}

Navbar.propTypes = {
  currentTab: PropTypes.string,
};

const mapStateToProps = (state) => ({
  currentTab: state.tabStore.currentTab,
});

export default connect(mapStateToProps)(Navbar);