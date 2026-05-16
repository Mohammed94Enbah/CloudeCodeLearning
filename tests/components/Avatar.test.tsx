import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Avatar from "@/components/Avatar";

describe("Avatar", () => {
  it("renders the first letter of a simple name", () => {
    render(<Avatar name="john" />);
    expect(screen.getByText("J")).toBeInTheDocument();
  });

  it("renders the first two uppercase letters for a PascalCase name", () => {
    render(<Avatar name="JohnDoe" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders only the first letter when name has a single uppercase letter", () => {
    render(<Avatar name="Mohammed" />);
    expect(screen.getByText("M")).toBeInTheDocument();
  });
});
