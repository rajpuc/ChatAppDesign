import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();


export const AppContextProvider = ({children}) =>{
    const navigate = useNavigate();
    const value = {
        navigate,
        test:"RajeshPal"
    }
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
