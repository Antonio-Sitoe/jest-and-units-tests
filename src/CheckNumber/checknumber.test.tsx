import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckNumber from ".";

const getInput = () => {
  return screen.getByPlaceholderText("Digite um numero");
};

// Describes if existe a number
describe("checknumber", () => {
  test("render a title", () => {
    render(<CheckNumber />);
    const title = screen.getByText("Check");
    expect(title).toBeInTheDocument();
  });

  test("render a input", () => {
    render(<CheckNumber />);
    const input = screen.getByPlaceholderText("Digite um numero");
    expect(input).toBeInTheDocument();
  });

  describe("quando nao haver error", () => {
    test("whan", () => {
      render(<CheckNumber />);

      const alert = screen.getByRole("alert");
      expect(alert).toHaveTextContent("");
    });
  });

  describe("when the user type an add number", () => {
    test("renders inpar on the screen", () => {
      render(<CheckNumber />);
      const input = getInput();

      userEvent.clear(input);
      userEvent.type(input, "3 ");

      const section = screen.getByRole("presentation");

      expect(section).toHaveTextContent("INPAR");
    });
  });
});
