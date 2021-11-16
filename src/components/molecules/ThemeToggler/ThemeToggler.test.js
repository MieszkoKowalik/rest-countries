import { render } from "test-utils";
import ThemeToggler from "./ThemeToggler";
import { screen, fireEvent } from "@testing-library/react";
import { theme, darkTheme } from "assets/styles/themes";

describe("Theme toggler", () => {
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
});
