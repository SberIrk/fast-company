import React from "react";
import PropTypes from "prop-types";

const IconSortTable = ({ selectedSort, item }) => {
    if (selectedSort.path === item) {
        return (selectedSort.order === "asc")
            ? <i className="bi bi-caret-up-fill"></i>
            : <i className="bi bi-caret-down-fill"></i>;
    };
};

IconSortTable.propTypes = {
    selectedSort: PropTypes.object.isRequired,
    item: PropTypes.string
};

export default IconSortTable;