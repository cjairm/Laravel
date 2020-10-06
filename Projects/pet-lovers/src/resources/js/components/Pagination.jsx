import React, { useCallback, useContext, useEffect } from "react";
import PetsContext from "../context/Pets/main";
import { Link } from "react-router-dom";

const Pagination = () => {
    const [data, setData] = useContext(PetsContext);
    const { links } = data;

    const getData = useCallback(async url => {
        const res = await fetch("/pets"+url);
        const resJson = await res.json();
        setData(prevState => {
            return {
                ...prevState,
                pets: resJson.data,
                links: resJson.links
            };
        });
    });

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                {links.map((link, i) => {
                    const url = link.url
                        ? "?" + link.url.split("/pets?")[1]
                        : "#";
                    return (
                        <PaginationLink
                            key={i + link.label}
                            disabled={link.url === null ? true : false}
                            active={link.active}
                            to={link.url === null ? "#" : url}
                            onClick={() => getData(url)}
                        >
                            {link.label}
                        </PaginationLink>
                    );
                })}
            </ul>
        </nav>
    );
};

/* 
    children: ReactNode | string;
    to: string (URL);
    disabled: boolean
    active: boolean
    onClick: function
*/

const PaginationLink = ({ children, to, disabled, active, onClick }) => {
    return (
        <li
            className={`page-item ${disabled ? "disabled" : ""} ${
                active ? "active" : ""
            }`}
        >
            {disabled ? (
                <Link
                    className="page-link"
                    to={to}
                    tabIndex="-1"
                    aria-disabled="true"
                >
                    {children}
                </Link>
            ) : (
                <Link onClick={onClick} className="page-link" to={to}>
                    {children}
                </Link>
            )}
        </li>
    );
};

export default Pagination;
