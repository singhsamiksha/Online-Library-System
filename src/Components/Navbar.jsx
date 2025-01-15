import './Navbar.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Globals from '../constants';

function Navbar({ currentTab = null }) {

  // Button style (common)
  const buttonStyle = {
    padding: '10px 20px',
    color: 'rgb(32, 101, 206)',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    textDecoration: 'none',
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'white',
    color: 'rgb(32, 101, 206)',
  };

  const inactiveButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'rgb(32, 101, 206)',
    color: 'white',
  };

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
            <Link to={'/'} style={currentTab === Globals.TABS.HOME ? activeButtonStyle : inactiveButtonStyle}>Home</Link>
            <Link to={'/books'} style={currentTab === Globals.TABS.BOOKS_LIST ? activeButtonStyle : inactiveButtonStyle}>Browse Books</Link>
            <Link to={'/addbook'} style={currentTab === Globals.TABS.ADD_BOOK ? activeButtonStyle : inactiveButtonStyle}>Add Book</Link>
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