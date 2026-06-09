"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  // 1. Form and UI States
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Success message toggle karne ke liye
  const [error, setError] = useState("");

  // 2. Client-Side Validation Logic
  const validateForm = () => {
    if (!email) {
      setError("Email address is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    setError("");
    return true;
  };

  // 3. Submit Handler 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return; // Validation check fail ho to ruk jaye

    setIsLoading(true);

    // Dummy API Request simulation (2 seconds)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true); // Form chhupane aur success message dikhane ke liye
    }, 2000);
  };

  // 4. Success Screen Component (Agar link send ho jaye)
  if (isSubmitted) {
    return (
      <div className="text-center py-4 animate-fade-in">
        {/* Success Icon */}
        <div className="w-12 h-12 bg-[rgba(147,177,181,0.2)] text-[#0B2E33] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 19v-8.93a2 2 0 01.89-1.664l8-4a2 2 0 011.78 0l8 4A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-2.25-1.5a2 2 0 00-2.25 0L12 14.5"
            ></path>
          </svg>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-[#0B2E33]">
          Check your email
        </h2>
        <p className="text-sm text-[#898989] mb-6 leading-relaxed">
          We have sent a password reset link to{" "}
          <span className="font-medium text-[#0B2E33]">{email}</span>. Please
          check your inbox or spam folder.
        </p>

        {/* Back to login option */}
        <Link
          href="/login"
          className="text-sm text-[#93B1B5] hover:underline font-medium block"
        >
          Back to Login
        </Link>
      </div>
    );
  }

  // 5. Default Forgot Password Form Screen
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-[#0B2E33]">
        Forgot Password?
      </h2>
      <p className="text-sm text-[#898989] mb-6 leading-relaxed">
        Enter your email address and we'll send you a link to reset your
        password.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium mb-1 text-[#0B2E33]">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            disabled={isLoading}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(""); // Type karne par error foran clear ho jaye
            }}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-colors bg-[#ffffff] disabled:opacity-60 disabled:cursor-not-allowed ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-[rgba(11,46,51,0.15)] focus:border-[#93B1B5]"
            }`}
            placeholder="you@example.com"
          />
          {error && (
            <p className="text-xs text-red-500 mt-1 font-medium">{error}</p>
          )}
        </div>

        {/* Submit Button with Custom Loading Spinner */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2.5 bg-[#0B2E33] text-white rounded-lg hover:opacity-90 font-medium transition-opacity shadow-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
              <span>Sending Link...</span>
            </>
          ) : (
            "Send Reset Link"
          )}
        </button>
      </form>

      <p className="text-sm text-center text-[#898989] mt-6">
        Remember your password? {/* Fixed nested path */}
        <Link
          href="login"
          className="text-[#93B1B5] hover:underline font-medium"
        >
          Back to Login
        </Link>
      </p>
    </div>
  );
}
