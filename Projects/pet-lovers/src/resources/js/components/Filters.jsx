import React, { Fragment, useState } from "react";

const Filters = () => {
    const [showBox, setShowBox] = useState(false);

    const onClickHandler = () => {
        setShowBox(prevState => !prevState);
    };

    return (
        <Fragment>
            <div className="d-block">
                <div
                    className="btn-group mr-2"
                    role="group-search"
                    aria-label="Search group buttons"
                >
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={onClickHandler}
                    >
                        {showBox ? "Close filters" : "Filters"}
                    </button>
                    {showBox && (
                        <div>
                            <button
                                type="button"
                                className="btn btn-outline-primary"
                            >
                                Search now!
                            </button>
                            <button type="button" className="btn btn-secondary">
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div
                className={`shadow p-3 mb-5 bg-white rounded d-block w-100 ${
                    showBox ? "filter--show" : "filter--hide"
                }`}
            >
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="ageState">Select age</label>
                        <select
                            id="ageState"
                            className="form-control"
                            defaultValue=""
                        >
                            <option value="">Choose...</option>
                            <option>1 month - 1 year</option>
                            <option>1 year - 2 years</option>
                            <option>2 years - 3 years</option>
                            <option>3 years - 4 years</option>
                            <option>4 years - 5 years</option>
                            <option>+5 years</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="petName">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="petName"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="temperamentState">Temperament</label>
                        <select
                            id="temperamentState"
                            className="form-control"
                            defaultValue=""
                        >
                            <option value="">Choose...</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="breedState">Breed</label>
                        <select
                            id="breedState"
                            className="form-control"
                            defaultValue=""
                        >
                            <option value="">Choose...</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="locationState">Location</label>
                        <select
                            id="locationState"
                            className="form-control"
                            defaultValue=""
                        >
                            <option value="">Choose...</option>
                        </select>
                    </div>

                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="rangeMilesState">
                            Or Range in miles
                        </label>
                        <select
                            id="rangeMilesState"
                            className="form-control"
                            defaultValue=""
                        >
                            <option value="">Choose...</option>
                        </select>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Filters;
