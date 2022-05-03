import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders footer", () => {
  render(<Footer />);
  const headerElement = screen.getByText(
    /Project created during Wizeline Academy React Testing Bootcamp/i
  );
  expect(headerElement).toBeInTheDocument();
});
