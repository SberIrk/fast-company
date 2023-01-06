// Header users
import React from "react";
import { declOfNum } from "../utilits/utils";
import PropTypes from "prop-types";

const SearchStatus = (props) => {
    if (Array.isArray(props.users) && props.users.length < 1) {
        return (<h2><span className="badge bg-danger m-2">Никто с тобой не тусанет</span></h2>);
    }
    const count = props.users.length;
    const msg = `${count} ${declOfNum(count, ["человек", "человека", "человек"])} тусанут с тобой сегодня.`;
    return (<h2><span className="badge bg-primary m-2">{msg}</span></h2>);
};

SearchStatus.propTypes = {
    users: PropTypes.array.isRequired
};

export default SearchStatus;
