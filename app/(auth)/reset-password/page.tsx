"use client";

import { useState } from "react";
import Link from "next/link";

export default function ResetPasswordPage() {
  // 1. Form States
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // UI and Error States
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{
    password?: string;
    confirmPassword?: string;
  }>({});

  // 2. Client-Side Validation Logic
  const validateForm = () => {
    const newErrors: typeof errors = {};

    // Password strength check
    if (!password) {
      newErrors.password = "New password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm password check
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your new password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 3. Submit Handler 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return; // Validation fail ho to ruk jaye

    setIsLoading(true);

    // Dummy API Request simulation (2 seconds)
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true); // Form chhupane aur success message dikhane ke liye
    }, 2000);
  };

  // 4. Success Screen Component (Jab password successfully change ho jaye)
  if (isSuccess) {
    return (
      <div className="text-center py-4 animate-fade-in">
        {/* Success Tick Icon */}
        <div className="w-12 h-12 bg-mid/20 text-text rounded-full flex items-center justify-center mx-auto mb-4">
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
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-text">
          Password Updated
        </h2>
        <p className="text-sm text-text-3 mb-6 leading-relaxed">
          Your password has been changed successfully. You can now log in with
          your new password.
        </p>

        {/* Proceed to Login Button */}
        <Link
          href="/login"
          className="inline-block w-full text-center py-2.5 bg-brand text-white rounded-lg hover:opacity-90 font-medium transition-opacity shadow-brand"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  // 5. Default Reset Password Form Screen
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-text">
        Reset Password
      </h2>
      <p className="text-sm text-text-3 mb-6 leading-relaxed">
        Choose a strong and secure new password for your account.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* New Password Field */}
        <div>
          <label className="block text-sm font-medium mb-1 text-text">
            New Password
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
            <p className="text-xs text-red-500 mt-1 font-medium">
              {errors.password}
            </p>
          )}
        </div>

        {/* Confirm New Password Field */}
        <div>
          <label className="block text-sm font-medium mb-1 text-text">
            Confirm New Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              disabled={isLoading}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (errors.confirmPassword)
                  setErrors({ ...errors, confirmPassword: "" });
              }}
              className={`w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none transition-colors bg-surface disabled:opacity-60 disabled:cursor-not-allowed ${
                errors.confirmPassword
                  ? "border-red-brand focus:border-red-brand"
                  : "border-border focus:border-mid"
              }`}
              placeholder="••••••••"
            />
            <button
              type="button"
              disabled={isLoading}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-3 hover:text-text transition-colors focus:outline-none text-xs font-medium disabled:opacity-50"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-xs text-red-500 mt-1 font-medium">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Submit Button with Custom Loading Spinner */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2.5 bg-[linear-gradient(135deg,#0B2E33,#93B1B5)] text-white rounded-lg hover:opacity-90 font-medium transition-opacity shadow-brand disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
              <span>Updating Password...</span>
            </>
          ) : (
            "Update Password"
          )}
        </button>
      </form>

      {/* Cancel Link */}
      <p className="text-sm text-center text-text-3 mt-6">
        Nevermind,{" "}
        <Link
          href="/login"
          className="text-mid hover:underline font-medium"
        >
          cancel and go back
        </Link>
      </p>
    </div>
  );
}
