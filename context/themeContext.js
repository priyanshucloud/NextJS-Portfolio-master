"use client";
import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    // Toggle Theme
    const setThemeFun = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("myPortfolioProfileTheme", newTheme);
    };

    // Get Theme Value From LocalStorage
    useEffect(() => {
        const getTheme = localStorage.getItem("myPortfolioProfileTheme") || "light";
        setTheme(getTheme);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setThemeFun }}>
            <div className={theme}>
                <div className='dark:text-white dark:bg-black'>{children}</div>
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;