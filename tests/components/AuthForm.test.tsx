import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";

import AuthForm from "@/components/AuthForm";

describe("AuthForm — login mode", () => {
  it("renders email field, password field, and Login button", () => {
    render(<AuthForm mode="login" />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("has a switch link pointing to /signup", () => {
    render(<AuthForm mode="login" />);

    const link = screen.getByRole("link", { name: /sign up/i });
    expect(link).toHaveAttribute("href", "/signup");
  });
});

describe("AuthForm — signup mode", () => {
  it("renders email field, password field, and Sign Up button", () => {
    render(<AuthForm mode="signup" />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign up/i }),
    ).toBeInTheDocument();
  });

  it("has a switch link pointing to /login", () => {
    render(<AuthForm mode="signup" />);

    const link = screen.getByRole("link", { name: /log in/i });
    expect(link).toHaveAttribute("href", "/login");
  });
});

describe("AuthForm — password toggle", () => {
  it("starts with password hidden and toggles to visible on click", async () => {
    render(<AuthForm mode="login" />);

    const passwordInput = screen.getByPlaceholderText(/password/i);
    const toggleButton = screen.getByRole("button", { name: /show password/i });

    expect(passwordInput).toHaveAttribute("type", "password");

    await userEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");

    await userEvent.click(
      screen.getByRole("button", { name: /hide password/i }),
    );
    expect(passwordInput).toHaveAttribute("type", "password");
  });
});

describe("AuthForm — form submission", () => {
  beforeEach(() => {
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  it("logs email and password to console on submit", async () => {
    render(<AuthForm mode="login" />);

    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      "test@example.com",
    );
    await userEvent.type(screen.getByPlaceholderText(/password/i), "secret123");
    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(console.log).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "secret123",
    });
  });
});
