import { Link, useLocation } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
const NavLink = ({ pathName, name }) => {
    const location = useLocation().pathname.split("/");
    const act = (location[1] === pathName) ? " active" : "";
    return <Link className={"nav-item nav-link" + act} to={"/" + pathName}>{name}</Link>;
};
NavLink.propTypes = {
    pathName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default NavLink;