import {
  render,
  screen,
  fireEvent,
  getByText,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("sum", () => {
  render(<App />);
  // expect(screen.getByText("App")).toBeInTheDocument();
});

describe("App component", () => {
  test("should render list items", () => {
    render(<App />);

    expect(screen.getByText("rodz")).toBeInTheDocument();
    expect(screen.getByText("diego")).toBeInTheDocument();
  });
  test("should render list", async () => {
    const { debug, findByText } = render(<App />);

    const button = screen.getByText("Adicionar");
    const input = screen.getByPlaceholderText("novo item");
    const removeButton = screen.getAllByText("remover");
    debug();
    const text = "Antonio";
    userEvent.type(input, text);
    userEvent.click(removeButton[0]);
    debug();
    await waitFor(() => {
      expect(screen.queryByText("diego")).not.toBeInTheDocument();
    });
  });
});
