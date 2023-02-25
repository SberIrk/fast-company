import React from "react";

import NavLink from "./navLink";
import NavListLinks from "./navListLinks";

const NavBar = () => {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="navbar-nav">
                {NavListLinks.map(link => <NavLink key={link.name}
                    {...link}
                />)}
            </div>
        </nav>
    </>);
};

export default NavBar;
