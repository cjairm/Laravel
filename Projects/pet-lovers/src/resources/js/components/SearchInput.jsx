import React from "react";

const SearchInput = () => {
    return (
        <div className="input-group input-group-lg">
            <div className="input-group-prepend">
                <span className="input-group-text" id="input-search">
                    Search
                </span>
            </div>
            <input
                type="text"
                className="form-control"
                aria-label="Search input"
                aria-describedby="input-search"
            />
        </div>
    );
}

export default SearchInput;
