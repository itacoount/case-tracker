// import { render, screen, fireEvent } from "@testing-library/react";
// import { Button } from "@/components/ui/Button";

// describe("Button Component", () => {
//   it("renders with default props", () => {
//     render(<Button>Click me</Button>);
//     const button = screen.getByRole("button", { name: /click me/i });
//     expect(button).toHaveClass("bg-blue-600");
//     expect(button).not.toBeDisabled();
//   });

//   it("handles click events", () => {
//     const handleClick = jest.fn();
//     render(<Button onClick={handleClick}>Click</Button>);
//     fireEvent.click(screen.getByRole("button"));
//     expect(handleClick).toHaveBeenCalled();
//   });

//   it("shows loading state", () => {
//     render(<Button isLoading>Loading</Button>);
//     expect(screen.getByRole("button")).toBeDisabled();
//     expect(screen.getByRole("button")).toHaveAttribute("aria-busy", "true");
//     expect(screen.getByText(/loading/i)).toBeInTheDocument();
//   });

//   it("respects disabled prop", () => {
//     render(<Button disabled>Disabled</Button>);
//     expect(screen.getByRole("button")).toBeDisabled();
//   });

//   it("supports keyboard navigation", () => {
//     render(<Button>Accessible</Button>);
//     const button = screen.getByRole("button");
//     fireEvent.keyDown(button, { key: "Enter", code: "Enter" });
//     fireEvent.keyDown(button, { key: "Space", code: "Space" });
//     expect(button).toHaveFocus();
//   });
// });
