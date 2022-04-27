import { screen, render } from "@testing-library/react";

import Content from "../components/Content/Content";

test("it should have the correct  item Jason Dain", async () => {
  render(<Content />);
  const findItem = await screen.findByRole("heading", {
    name: "by: Jason Dain",
  });
  expect(findItem).toBeVisible();
});

test.todo("should fetch correctly");
