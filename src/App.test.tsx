import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

const double = (x: number): number => x * 2;

test("double", () => {
  expect(double(3)).toBe(6);
});

test("App", () => {
  render(<App />);

  expect(screen.getByText("Vite + React")).toBeInTheDocument();
});
