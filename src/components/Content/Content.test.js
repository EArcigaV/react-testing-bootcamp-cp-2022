import { render, screen } from "@testing-library/react";

import Content from "./Content";

describe("testing useFetch", () => {
  test("correctly renders Author(copyright) of the photo", async () => {
    render(<Content />);
    const findCopyright = await screen.findByRole("heading", {
      name: "by: Jason Dain",
    });
    expect(findCopyright).toBeVisible();
  });

  test("correctly renders date of the photo", async () => {
    render(<Content />);
    const findDate = await screen.findByRole("heading", {
      name: "Photo of the Day ( 2022-04-02 )",
    });
    expect(findDate).toBeVisible();
  });

  test("correctly renders Photo of the day", async () => {
    render(<Content />);
    const findImage = await screen.findByRole("img");
    expect(findImage).toBeVisible();
  });

  test("correctly renders description of the Photo of the day", async () => {
    render(<Content />);
    const findImage = await screen.findByTitle("description");
    expect(findImage).toBeVisible();
  });
});

test("renders content", () => {
  render(<Content />);
  const contentElement = screen.getByRole("heading", /Content Here/i);
  expect(contentElement).toBeInTheDocument();
});

test.todo("renders DayPicker");
