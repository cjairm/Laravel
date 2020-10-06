import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const FrontPage = () => {
    document.title = "P-Lovs";

    return (
        <Fragment>
            <header className="home">
                <div className="home__logo-box">
                    <img
                        srcSet="img/logo-.5x.png 300w, img/logo.png 1000w"
                        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                        alt="Logo"
                        className="home__logo"
                        src="img/logo.png"
                        loading="lazy"
                    />
                </div>

                <div className="home__text-box">
                    <h1 className="h1-p">
                        <span className="h1-p--main">P-Lovs</span>
                        <span className="h1-p--sub">from pet lovers!</span>
                    </h1>
                    <Link
                        to="/search"
                        role="button"
                        className="btn btn-primary btn-lg"
                    >
                        Find the perfect pet
                    </Link>
                </div>
            </header>
        </Fragment>
    );
}

export default FrontPage;
