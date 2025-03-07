import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { customItemColor, customLinearGradient, customPrimaryColor, customWhiteColor } from '../constants/color';

export const AppContext = createContext();


export const AppContextProvider = ({children}) =>{
    const [historyTitles,setHistoryTitles]=useState([]);
    const [historyContents,setHistoryContents]=useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const value = {
        navigate,
        colors:{
            customPrimaryColor,
            customWhiteColor,
            customLinearGradient,
            customItemColor,
        },            
        historyTitles,
        setHistoryTitles,
        historyContents,
        setHistoryContents,
        loading,
        setLoading
    }
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}