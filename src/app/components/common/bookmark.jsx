import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
    const classButton = (status) ? "bi bi-toggle-on" : "bi bi-toggle-off";
    return (
        <button {...rest}>
            <i className={classButton}></i>
        </button>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool
};

export default BookMark;
