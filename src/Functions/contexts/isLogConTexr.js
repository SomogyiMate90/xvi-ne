import { createContext, useState, useContext } from "react";

const IsLogContext = createContext(null);

export const IsLogProvider = ({ children }) => {
    const [isLog, setIsLog] = useState(true); // Itt kezeljük az állapotot

    return (
        <IsLogContext.Provider value={{ isLog, setIsLog }}>
            {children}
        </IsLogContext.Provider>
    );
};

// Egyéni hook a könnyebb használat érdekében
export const useIsLog = () => useContext(IsLogContext);