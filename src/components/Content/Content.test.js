import { render, screen } from "@testing-library/react";

import Content from "./Content";

const setup = () => {
  render(<Content />);
};

test("renders  Loading...", () => {
  setup();
  const loadingElement = screen.getByRole("heading", { name: /Loading.../i });
  expect(loadingElement).toBeInTheDocument();
});

describe("testing useFetch", () => {
  test("correctly renders Author(copyright) of the photo", async () => {
    setup();
    const findCopyright = await screen.findByRole("heading", {
      name: "by: Jason Dain",
    });
    expect(findCopyright).toBeVisible();
  });

  test("correctly renders date of the photo", async () => {
    setup();
    const findDate = await screen.findByRole("heading", {
      name: "Photo of the Day ( 2022-04-02 )",
    });
    expect(findDate).toBeVisible();
  });

  test("correctly renders Photo of the day", async () => {
    setup();
    const findImage = await screen.findByRole("img");
    expect(findImage).toBeVisible();
  });

  test("correctly renders description of the Photo of the day", async () => {
    setup();
    const findImage = await screen.findByTitle("description");
    expect(findImage).toBeVisible();
  });
});

describe("date Picker", () => {
  test("Should render a calendar picker", async () => {
    setup();
    const pickerEl = await screen.findByLabelText(/Please select a Day/i);
    expect(pickerEl).toBeInTheDocument();
  });
});
