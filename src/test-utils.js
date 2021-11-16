import React from "react";
import { render } from "@testing-library/react";
import ThemesProvider from "providers/ThemesProvider";

const AllTheProviders = ({ children }) => {
  return <ThemesProvider>{children}</ThemesProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
