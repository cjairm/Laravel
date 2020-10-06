import React from "react";

const Loader = () => {
    return (
        <div className="myspinner">
            <div className="d-flex justify-content-center align-items-center h-100">
                <div
                    className="spinner-border text-primary myspinner--size"
                    role="status"
                >
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
}

export default Loader;
