import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "assets/styles/themes";
import { useState } from "react";
import { createContext, useEffect } from "react";

export const ThemesContext = createContext();

const ThemesProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", !isDarkMode);
  };

  const setOSPreferedTheme = () => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const isDarkModeInLS = JSON.parse(localStorage.getItem("darkMode"));
    if (isDarkModeInLS === null) {
      setOSPreferedTheme();
    } else if (isDarkModeInLS) {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <ThemesContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
        {children}
      </ThemeProvider>
    </ThemesContext.Provider>
  );
};

export default ThemesProvider;
