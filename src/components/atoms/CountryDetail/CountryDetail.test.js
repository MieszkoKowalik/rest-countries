import React from "react";
import { render, screen } from "test-utils";
import CountryDetail from "./CountryDetail";
jest.mock("../SkeletonLine/SkeletonLine", () => () => (
  <span data-testid="skeleton"></span>
));

describe("Country Detail", () => {
  it("renders the component", () => {
    render(<CountryDetail />);
  });
  it("Displays text if all info is present", () => {
    render(<CountryDetail label="Capital" info="London" />);
    expect(screen.queryByText(/Capital/)).toBeInTheDocument();
    expect(screen.queryByText(/London/)).toBeInTheDocument();
  });
  it("Displays skeleton line if prop isLoading is true", () => {
    render(<CountryDetail label="Capital" isLoading />);
    expect(screen.queryByText(/Capital/)).not.toBeInTheDocument();
    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });
  it("Displays N/A text if no info value provided", () => {
    render(<CountryDetail label="Capital" />);
    expect(screen.queryByText(/N\/A/)).toBeInTheDocument();
  });
  it("Displays N/A text if info value is empty array", () => {
    render(<CountryDetail label="Capital" info={[]} />);
    expect(screen.queryByText(/N\/A/)).toBeInTheDocument();
  });
});
