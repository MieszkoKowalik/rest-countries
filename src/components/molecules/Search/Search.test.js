import { render } from "test-utils";
import Search from "./Search";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Search", () => {
  it("Renders the component", () => {
    render(<Search filterCountries={jest.fn()} />);
    expect(
      screen.getByPlaceholderText(/Search for a country/)
    ).toBeInTheDocument();
  });
  it("Diplays inputed string", () => {
    render(<Search filterCountries={jest.fn()} />);
    const input = screen.getByPlaceholderText(/Search for a country/);
    userEvent.type(input, "Hello, World");
    expect(input).toHaveValue("Hello, World");
  });
});
