import { render, screen } from "@testing-library/react";

import Content from "./Content";

test("renders content", () => {
  render(<Content />);
  const contentElement = screen.getByRole("heading", /Content Here/i);
  expect(contentElement).toBeInTheDocument();
});

test.todo("renders DayPicker");

test.todo("correctly renders date of the photo");

test.todo("correctly renders description of the photo");

test.todo("correctly renders Author(copyright) of the photo");

test.todo("correctly renders Photo of the day");
