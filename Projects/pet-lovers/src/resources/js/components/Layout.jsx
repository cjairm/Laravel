import React, { Fragment } from "react";

import Nav from "../components/Nav";

/* 
    children: ReactNode
    tabTitle: string
*/

const Search = ({ children, tabTitle }) => {
    document.title = tabTitle;

    return (
        <Fragment>
            <Nav />
            {children}
        </Fragment>
    );
};

export default Search;
