import React from "react";
import { render, fireEvent, getByLabelText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import NavBar from "./NavBar";

test("renders NavBar", () => {
  render(<NavBar />);
});

test("darkModeBtn renders", () => {
  // Arrange
  const { getByTestId } = render(<NavBar />);

  // Act
  const darkModeBtn = getByTestId("darkModeBtn");

  // Assert
  expect(darkModeBtn).toBeInTheDocument();
});

test("darkModeBtn changes background color", () => {
  // Arrange
  const { getByTestId } = render(<NavBar />);

  // Act
  // const mode = getByTestId("mode");
  const darkModeBtn = getByTestId("darkModeBtn");

  // Assert
  fireEvent.click(darkModeBtn);

  expect(darkModeBtn).toHaveTextContent("Dark Mode ON");
});
