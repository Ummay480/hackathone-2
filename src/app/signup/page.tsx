"use client"; // Required for Clerk hooks in Next.js

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import { useSignIn } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";

export default function SignInPage() {
  const router = useRouter();
  const { signIn, isLoaded } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded || !signIn) {
      setError("Clerk is not loaded yet. Please try again.");
      return;
    }

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        router.push("/dashboard");
      } else {
        setError("Unexpected authentication status.");
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Sign-in failed");
    }
  };

  const handleOAuthSignIn = async (strategy: "oauth_google" | "oauth_apple") => {
    if (!isLoaded || !signIn) {
      setError("Clerk is not ready yet.");
      return;
    }

    try {
      await signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/dashboard",
      });
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "OAuth sign-in failed");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroBanner title="Sign In" />

      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign In</h3>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-[#FF9F0D]"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-[#FF9F0D]"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF9F0D] hover:bg-[#e08e00] text-white font-bold py-2 rounded"
            >
              Sign In
            </button>

            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-[#FF9F0D]">
                Forgot password?
              </Link>
            </p>
          </form>

          <div className="text-center mt-8">
            <p>or</p>
            <button
              className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center"
              onClick={() => handleOAuthSignIn("oauth_google")}
            >
              <FcGoogle className="h-6 mr-2" />
              Sign in with Google
            </button>

            <button
              className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center"
              onClick={() => handleOAuthSignIn("oauth_apple")}
            >
              <ImAppleinc className="h-6 mr-2" />
              Sign in with Apple
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}