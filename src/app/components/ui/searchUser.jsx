// Header users
import React from "react";
import PropTypes from "prop-types";

const SearchUser = ({ searchUser, onChangeSearchInput }) => {
    return (<div>
        <form className="form-inline">
            <input
                type="text"
                className= "form-control"
                placeholder="Поиск..."
                onChange={onChangeSearchInput}
                value={searchUser}
            />
        </form>
    </div>);
};

SearchUser.propTypes = {
    searchUser: PropTypes.string,
    onChangeSearchInput: PropTypes.func
};

export default SearchUser;