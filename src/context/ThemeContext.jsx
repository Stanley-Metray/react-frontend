import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light-theme');

    const toggleTheme = () => {
        setTheme(prevThem => prevThem === 'light-theme' ? 'dark-theme' : 'light-theme');
    }

    return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
}
