import { render, screen } from "@testing-library/react";
import Header, { NewHeader } from ".";

// ? 1. We render the component (render)
// ? 2. We find the component (getBy)
// ? 3. Interaction with the component
// ? 4. Asser the results of the test (be in the document)

test("Testing Header func", () => {
  render(<Header title="Hello World" />);
  const header_comp = screen.getByText(/Hello World/i);
  expect(header_comp).toBeInTheDocument();
});

// test("Testing Button func", () => {
//   render(<NewHeader label="Hello World" />);
//   const header_comp = screen.getByRole("button");
//   expect(header_comp).toBeInTheDocument();
// });

test("Testing Button func", () => {
  render(<NewHeader label="Hello World" />);
  const header_comp = screen.getByRole("button", { name: "Cats" });
  expect(header_comp).toBeInTheDocument();
});

test("Testing Button func title", () => {
  render(<NewHeader label="Hello World" />);
  const header_comp = screen.getByTitle("unique-comp");
  expect(header_comp).toBeInTheDocument();
});

test("Testing header asyn", async () => {
  render(<Header title="Hello World" />);
  const header_comp = await screen.findByText(/Hello World/i);
  expect(header_comp).toBeInTheDocument();
});

test("Testing header query", () => {
  render(<Header title="Hello World" />);
  const header_comp = screen.queryByText(/dog World/i);
  expect(header_comp).not.toBeInTheDocument();
});
