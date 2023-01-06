import React from "react";

const Bookmark  = ({bookmark,handleBookmark,_id}) => {
    const classButton = (bookmark) ? "bi bi-toggle-on" : "bi bi-toggle-off";
    return (
        <button className={classButton} onClick = { () => handleBookmark(_id) }> </button>
    );
}

export default Bookmark;