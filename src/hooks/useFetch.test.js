import { screen, render } from "@testing-library/react";

import Content from "../components/Content/Content";

test("it should have the correct  item Jason Dain", async () => {
  render(<Content />);
  const findItem = await screen.findByRole("heading", {
    name: "by: Jason Dain",
  });
  expect(findItem).toBeVisible();
});

test("it should have the correct  item 'Photo of the Day ( 2022-04-02 )'", async () => {
  render(<Content />);
  const findItem2 = await screen.findByRole("heading", {
    name: "Photo of the Day ( 2022-04-02 )",
  });
  expect(findItem2).toBeVisible();
});

test.todo("should fetch correctly");
