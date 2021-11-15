import React from "react";

import { ReactComponent as MoonIcon } from "assets/images/moon-icon.svg";
import { ThemesContext } from "providers/ThemesProvider";
import { useContext } from "react";
import { StyledLabel } from "./ThemeToggler.styles";

const ThemeToggler = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemesContext);
  return (
    <StyledLabel htmlFor="darkMode">
      <input
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
        type="checkbox"
        name="darkMode"
        id="darkMode"
      />
      <MoonIcon />
      Dark Mode
    </StyledLabel>
  );
};

export default ThemeToggler;
