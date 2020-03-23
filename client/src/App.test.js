import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "./App";

test("App renders without crashing", () => {
  render(<App />);
});

test("player list renders", () => {
  // Arrange
  const { getByTestId } = render(<App />);

  // Act
  const playerList = getByTestId("player-list");

  // Assert
  expect(playerList).toBeInTheDocument();
});
