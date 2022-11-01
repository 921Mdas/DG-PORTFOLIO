import { render, screen, cleanup } from "@testing-library/react";
import Home from "../src/Components/About/About";
import App from "./App";
import userEvents from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("testing portfolio", () => {
  test("test components", () => {
    render(<App />);
    screen.debug();
  });
});
