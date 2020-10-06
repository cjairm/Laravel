import React, { createContext, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    // useReducer is better practice
    const [state, setState] = useState({
        pets: [],
        links: [],
    });

    return (
        <AppContext.Provider value={[state, setState]}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;