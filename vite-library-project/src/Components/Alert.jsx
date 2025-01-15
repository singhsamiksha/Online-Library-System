import PropTypes from "prop-types";
import './Alert.css';

const Alert = ({ showPopup, closePopup, popupType, message }) => {
    if (!showPopup) return '';

    return (
        <div className={`alert ${popupType}`}>
            <div className={`alert-container`}>
                <p>{message}</p>
                <button className={`alert-button ${popupType}`} onClick={() => closePopup(false)}>Close</button>
            </div>
        </div>
    )
}

Alert.propTypes = {
    showPopup: PropTypes.bool,
    closePopup: PropTypes.func,
    popupType: PropTypes.string,
    message: PropTypes.string,
}

export default Alert;