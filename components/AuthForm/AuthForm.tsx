"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

type AuthFormProps = {
  mode: "login" | "signup";
};

export default function AuthForm({ mode }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isLogin = mode === "login";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    console.log({ email, password });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-sm mx-auto"
    >
      <h2 className="form-title">{isLogin ? "Log In" : "Sign Up"}</h2>

      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className="w-full px-3 py-2 bg-lighter border border-white/10 rounded-md text-heading placeholder:text-body focus:outline-none focus:border-primary"
      />

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          required
          placeholder="Password"
          className="w-full px-3 py-2 pr-10 bg-lighter border border-white/10 rounded-md text-heading placeholder:text-body focus:outline-none focus:border-primary"
        />
        <button
          type="button"
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-body hover:text-heading"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <button type="submit" className="btn w-full">
        {isLogin ? "Login" : "Sign Up"}
      </button>

      <p className="text-center text-sm">
        {isLogin ? (
          <>
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary hover:text-secondary">
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:text-secondary">
              Log in
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
