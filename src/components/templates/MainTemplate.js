import React from "react";
import { Wrapper } from "./MainTemplate.styles";
import Header from "components/organisms/Header/Header";

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
