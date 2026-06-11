"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  // 1. Form Field States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // UI and Error States
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  // 2. Client-Side Form Validation
  const validateForm = () => {
    const newErrors: typeof errors = {};

    // Name check
    if (!name.trim()) {
      newErrors.name = "Full name is required";
    } else if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Email check
    if (!email) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password check
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // 3. Form Submit Handler 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return; // Validation fail ho to ruk jaye

    setIsLoading(true);

    // Dummy API Request simulation (2 seconds)
    setTimeout(() => {
      setIsLoading(false);
      alert(
        "Registration request simulated! Data: " +
          JSON.stringify({ name, email, password }),
      );
    }, 2000);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-text">
        Create an Account
      </h2>
      <p className="text-sm text-text-3 mb-6">
        Join Zenvy today and start shopping globally.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name Field */}
        <div>
          <label className="block text-sm font-medium mb-1 text-text">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            disabled={isLoading}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors({ ...errors, name: "" }); // Type karne par error hide ho jaye
            }}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors bg-surface disabled:opacity-60 disabled:cursor-not-allowed ${
              errors.name
                ? "border-red-brand focus:border-red-brand"
                : "border-border focus:border-mid"
            }`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-xs text-red-brand mt-1 font-medium">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium mb-1 text-text">
            Email
          </label>
          <input
            type="email"
            value={email}
            disabled={isLoading}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: "" });
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
          <label className="block text-sm font-medium mb-1 text-text">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              disabled={isLoading}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors({ ...errors, password: "" });
              }}
              className={`w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none transition-colors bg-surface disabled:opacity-60 disabled:cursor-not-allowed ${
                errors.password
                  ? "border-red-brand focus:border-red-brand"
                  : "border-border focus:border-mid"
              }`}
              placeholder="••••••••"
            />
            {/* Password Toggle Button */}
            <button
              type="button"
              disabled={isLoading}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-3 hover:text-text transition-colors focus:outline-none text-xs font-medium disabled:opacity-50"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-red-brand mt-1 font-medium">
              {errors.password}
            </p>
          )}
        </div>

        {/* Submit Button with Dynamic SVG Spinner */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2.5 mt-2 bg-brand text-white rounded-lg hover:opacity-90 font-medium transition-opacity shadow-brand disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
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
              <span>Signing Up...</span>
            </>
          ) : (
            "Sign Up"
          )}
        </button>
      </form>

      <p className="text-sm text-center text-text-3 mt-6">
        Already have an account? {/* Fixed nested path */}
        <Link
          href="/login"
          className="text-mid hover:underline font-medium"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}
