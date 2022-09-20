import { render, screen } from "@testing-library/react";
import Header, { NewHeader } from ".";

test("Testing Header func", () => {
  render(<Header title="Hello World" />);
  const header_comp = screen.getByText(/Hello World/i);
  expect(header_comp).toBeInTheDocument();
});

test("Testing Button func", () => {
  render(<NewHeader label="Hello World" />);
  const header_comp = screen.getByRole("button");
  expect(header_comp).toBeInTheDocument();
});
