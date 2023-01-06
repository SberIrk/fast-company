import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ bookmark, handleBookmark, _id }) => {
    const classButton = (bookmark) ? "bi bi-toggle-on" : "bi bi-toggle-off";
    return (
        <button className={classButton} onClick = { () => handleBookmark(_id) }> </button>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.bool,
    handleBookmark: PropTypes.func.isRequired,
    _id: PropTypes.string.isRequired
};

export default Bookmark;
