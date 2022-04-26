import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders header", () => {
  render(<Header />);
  const headerElement = screen.getByText(/My testing-React Project 2022/i);
  expect(headerElement).toBeInTheDocument();
});
