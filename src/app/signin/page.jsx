
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        callbackURL: "/",
      });

      if (error) {
        setError(error.message || "Invalid email or password.");
        return;
      }

      router.push("/");
      router.refresh();
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setGoogleLoading(true);

    try {
      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (error) {
        setError(error.message || "Google login failed.");
        setGoogleLoading(false);
      }
    } catch (err) {
      setError(err.message || "Google login failed.");
      setGoogleLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#080B16] px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111827] p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <Link href="/" className="text-3xl font-bold text-white">
            Pix<span className="text-purple-500">Gen</span>
          </Link>

          <h1 className="mt-6 text-3xl font-bold text-white">
            Welcome Back!
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Login to your PixGen account
          </p>
        </div>

        {error && (
          <div
            role="alert"
            className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-white/10 bg-[#080B16] px-4 py-3 text-white outline-none transition focus:border-purple-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-white/10 bg-[#080B16] px-4 py-3 text-white outline-none transition focus:border-purple-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading || googleLoading}
            className="w-full rounded-lg bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading || googleLoading}
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-white/10 bg-white py-3 font-semibold text-gray-800 transition hover:bg-gray-200 disabled:opacity-60"
        >
          <span className="text-lg font-bold">G</span>
          {googleLoading ? "Connecting..." : "Continue with Google"}
        </button>

        <p className="mt-7 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-purple-400 hover:text-purple-300"
          >
            Register
          </Link>
        </p>

      </div>
    </main>
  );
}
