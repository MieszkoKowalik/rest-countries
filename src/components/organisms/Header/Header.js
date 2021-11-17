import React from "react";
import Logo from "components/atoms/Logo/Logo";
import { StyledHeader, ViewWrapper } from "./Header.styles";
import ThemeToggler from "components/molecules/ThemeToggler/ThemeToggler";
const Header = () => {
  return (
    <StyledHeader>
      <ViewWrapper>
        <Logo />
        <ThemeToggler />
      </ViewWrapper>
    </StyledHeader>
  );
};

export default Header;
