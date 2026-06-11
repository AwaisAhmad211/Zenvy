"use client";

import { useState } from "react";
import LinkNext from "next/link";

export default function LoginPage() {
  // 1. Form and UI States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Validation Error States
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );

  // 2. Client Side Validation Logic
  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    // Email Validation
    if (!email) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password Validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Agar koi error nahi hai toh true return karega
  };

  // 3. Form Submit Handler 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return; // Agar validation fail ho toh aage na barhayi

    setIsLoading(true);

    // Dummy API call simulation (2 seconds)
    setTimeout(() => {
      setIsLoading(false);
      alert(
        "Frontend is ready! Form data submitted: " +
          JSON.stringify({ email, password }),
      );
    }, 2000);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-text">
        Welcome Back
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium mb-1 text-text">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            disabled={isLoading}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: "" }); // Typing par error clear karein
            }}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors bg-surface disabled:opacity-60 disabled:cursor-not-allowed ${
              errors.email
                ? "border-red-brand focus:border-red-brand"
                : "border-border focus:border-mid"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-xs text-red-brand mt-1 font-medium">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-sm font-medium text-text">
              Password
            </label>
            <LinkNext
              href="/forgot-password"
              className="text-xs text-mid hover:underline font-medium"
            >
              Forgot Password?
            </LinkNext>
          </div>

          {/* Relative wrapper for eye icon button */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              disabled={isLoading}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors({ ...errors, password: "" }); // Typing par error clear karein
              }}
              className={`w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none transition-colors bg-surface disabled:opacity-60 disabled:cursor-not-allowed ${
                errors.password
                  ? "border-red-brand focus:border-red-brand"
                  : "border-border focus:border-mid"
              }`}
              placeholder="••••••••"
            />

            {/* Eye Icon Button Toggle */}
            <button
              type="button"
              disabled={isLoading}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-3 hover:text-text transition-colors focus:outline-none text-xs font-medium"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {errors.password && (
            <p className="text-xs text-red-500 mt-1 font-medium">
              {errors.password}
            </p>
          )}
        </div>

        {/* Submit Button with Loading Spinner */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2.5 mt-2 bg-brand text-white rounded-lg hover:opacity-90 font-medium transition-opacity shadow-brand disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              {/* Custom SVG Spinner Tailwind code */}
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Signing In...</span>
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      <p className="text-sm text-center text-text-3 mt-6">
        {"Don't have an account?"}{" "}
        <LinkNext
          href="/register"
          className="text-mid hover:underline font-medium"
        >
          Register
        </LinkNext>
      </p>
    </div>
  );
}
