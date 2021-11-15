import React from "react";
import Logo from "components/atoms/Logo/Logo";
import { Wrapper, ViewWrapper } from "./Header.styles";
import ThemeToggler from "components/molecules/ThemeToggler/ThemeToggler";
const Header = () => {
  return (
    <Wrapper>
      <ViewWrapper>
        <Logo />
        <ThemeToggler />
      </ViewWrapper>
    </Wrapper>
  );
};

export default Header;
