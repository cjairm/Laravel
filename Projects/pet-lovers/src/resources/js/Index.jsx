import React from "react";

import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { AppProvider } from "./context/Pets/main";

export default function Index(props) {
    return <Routes />;
}

const app = (
    <BrowserRouter>
        <AppProvider>
            <Index />
        </AppProvider>
    </BrowserRouter>
);

if (document.getElementById("app")) {
    ReactDOM.render(app, document.getElementById("app"));
}
