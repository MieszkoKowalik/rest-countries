import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "assets/styles/themes";
import { useState } from "react";
import { createContext } from "react";

export const ThemesContext = createContext();

const ThemesProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemesContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
        {children}
      </ThemeProvider>
    </ThemesContext.Provider>
  );
};

export default ThemesProvider;
