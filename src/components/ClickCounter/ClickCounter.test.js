import { render, screen } from "@testing-library/react";
import ClickCounter from "./ClickCounter";
import userEvent from "@testing-library/user-event";

describe("ClickCounter", () => {
  it("checks if the title exists", () => {
    render(<ClickCounter />);

    const title = screen.queryByText("Click counter");
    expect(title).not.toBeNull();
  });

  it("renders the click counter number", () => {
    render(<ClickCounter />);

    const counter = screen.queryByText("Clicked 0 times");
    expect(counter).not.toBeNull();
  });

  it("renders the click button", () => {
    render(<ClickCounter />);

    const clickButton = screen.queryByText("Click");
    expect(clickButton).not.toBeNull();
  });

  it("increments click counter if user clicks button", async () => {
    const user = userEvent.setup();

    render(<ClickCounter />);
    const clickButton = screen.queryByText("Click");
    await user.click(clickButton);

    const counter = screen.queryByText("Clicked 1 times");
    expect(counter).not.toBeNull();
  });
});
