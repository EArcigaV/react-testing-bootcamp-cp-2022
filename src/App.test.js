import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header element", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: "My testing-React Project 2022",
  });
  expect(heading).toBeInTheDocument();
});

test("renders header text", () => {
  render(<App />);
  const headerElement = screen.getByText(/My testing-React Project 2022/i);

  expect(headerElement).toBeInTheDocument();
});

test("renders content", () => {
  render(<App />);
  const contentElement = screen.getByText("Content Here");
  expect(contentElement).toBeInTheDocument();
});

test.todo("renders DayPicker");

test("renders footer", () => {
  render(<App />);
  const footerElement = screen.getByText(
    /Project created during Wizeline Academy React Testing Bootcamp/i
  );
  expect(footerElement).toBeInTheDocument();
});
