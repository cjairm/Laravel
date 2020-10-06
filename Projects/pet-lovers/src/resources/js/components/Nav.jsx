import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <Link to="/" role="button" className="navbar-brand">
                <img
                    srcSet="/img/logo-.5x.png 300w, img/logo.png 1000w"
                    sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                    alt="Logo"
                    width="30"
                    height="30"
                    src="img/logo.png"
                    loading="lazy"
                />
                <span className="ml-2">P-Lovs</span>
            </Link>
            <div>
                <ul className="navbar-nav mr-auto">
                    <NavLink active to="#">
                        Login
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

/* 
    children: ReactNode
    to: string (URL)
    active: boolean
*/
const NavLink = ({ children, to, active }) => {
    return (
        <li className={active ? "nav-item active" : "nav-item"}>
            <a className="nav-link" href={to}>
                {children}
                {active && <span className="sr-only">(current)</span>}
            </a>
        </li>
    );
};

export default Nav;
