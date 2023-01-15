// Header users
import React from "react";
import { declOfNum } from "../utilits/utils";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    if (!length) {
        return (<h2><span className="badge bg-danger m-2">Никто с тобой не тусанет</span></h2>);
    }

    const msg = `${length} ${declOfNum(length, ["человек", "человека", "человек"])} тусанут с тобой сегодня.`;
    return (<h2><span className="badge bg-primary m-2">{msg}</span></h2>);
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
