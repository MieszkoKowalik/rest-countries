import { render } from "test-utils";
import ThemeToggler from "./ThemeToggler";
import { screen, fireEvent } from "@testing-library/react";
import { theme, darkTheme } from "assets/styles/themes";

describe("Theme toggler", () => {
  beforeEach(() => {
    localStorage.removeItem("darkMode");
  });

  it("Renders the component", () => {
    render(<ThemeToggler />);
  });
  it("Changes the theme", () => {
    render(<ThemeToggler />);
    const toggler = screen.getByText(/Dark Mode/);
    expect(toggler).toHaveStyle(`color:${theme.colors.primary}`);
    fireEvent.click(toggler);
    expect(toggler).not.toHaveStyle(`color:${theme.colors.primary}`);
    expect(toggler).toHaveStyle(`color:${darkTheme.colors.primary}`);
  });
  it("Saves theme to local storage", () => {
    render(<ThemeToggler />);
    expect(JSON.parse(localStorage.getItem("darkMode"))).toBe(null);
    const toggler = screen.getByText(/Dark Mode/);
    fireEvent.click(toggler);
    expect(JSON.parse(localStorage.getItem("darkMode"))).toBe(true);
  });
  it("Changes theme based on local storage", () => {
    localStorage.setItem("darkMode", true);
    render(<ThemeToggler />);
    const toggler = screen.getByText(/Dark Mode/);
    expect(toggler).toHaveStyle(`color:${darkTheme.colors.primary}`);
  });
});
