import React from "react";
import { render, screen } from "@testing-library/react";
import { router } from "./App";
import { RouterProvider } from "react-router-dom";

test("renders Home title", () => {
  render(<RouterProvider router={router} />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
