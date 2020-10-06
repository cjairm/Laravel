import React, { Suspense, lazy, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Loader from "./components/Loader";

const FrontPage = lazy(() => {
    return import("./pages/FrontPage");
});

const SearchPage = lazy(() => {
    return import("./pages/Search");
});

const PetOverviewPage = lazy(() => {
    return import("./pages/PetOverview");
});

const NotFoundPage = lazy(() => {
    return import("./pages/Errors/404");
});

function Routes() {
    return (
        <Fragment>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route path="/pet/:id" exact component={PetOverviewPage} />
                    <Route path="/search" exact component={SearchPage} />
                    <Route path="/" exact component={FrontPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Suspense>
        </Fragment>
    );
}

export default Routes;
