import { render, screen } from "@testing-library/react";
import Header from ".";

test("Testing Header func", () => {
  render(<Header title="Hello World" />);
  const header_comp = screen.getByText(/Hello World/i);
  expect(header_comp).toBeInTheDocument();
});
