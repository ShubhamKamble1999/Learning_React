import { createContext, useContext } from "react";

// creating context with default values of theme
export const ThemeContext = createContext(
    {
        themeMode: "lignt",
        darkTheme: ()=>{},
        lightTheme: ()=>{},
    }
)

// To wrapp
export const ThemeProvider = ThemeContext.Provider

// hook to have access of data -> theme
export default function useTheme() {
    return useContext(ThemeContext)
}