import React from "react";

const Bookmark  = (props) => {
    const {handleBookmark,user} = props;
    const classButton = (user.bookmark) ? "bi bi-toggle-on" : "bi bi-toggle-off";
    return (
        <button className={classButton} onClick = { () => handleBookmark(user._id) }> </button> )
}

export default Bookmark;