import { createContext, useState, useContext } from "react";

const IsLogContext = createContext(null);

export const IsLogProvider = ({ children }) => {
    const [isLog, setIsLog] = useState(false); // Itt kezeljük az állapotot

    return (
        <IsLogContext.Provider value={{ isLog, setIsLog }}>
            {children}
        </IsLogContext.Provider>
    );
};

export const useIsLog = () => useContext(IsLogContext);