import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import Footer from "../components/Footer";

test("Home Component", () => {
  render(<Home />);
  expect(screen.getByText("Welcome to the Home Page")).toBeInTheDocument();
});

test("Footer Component", () => {
  // Arrange
  const currentYear = new Date().getFullYear();

  // Act
  render(<Footer />);

  // Assert
  expect(
    screen.getByText(`© ${currentYear} MyApp. All rights reserved.`)
  ).toBeInTheDocument();
});
