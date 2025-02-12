"use client"; // Required for Clerk hooks in Next.js

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import { useSignUp } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";

export default function SignUpPage() {
  const router = useRouter();
  const { signUp, isLoaded } = useSignUp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded || !signUp) {
      setError("Clerk is not loaded yet. Please try again.");
      return;
    }

    try {
      const result = await signUp.create({
        emailAddress: email,
        password,
      });

      // Send email verification
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      if (result.status === "complete") {
        router.push("/verify-email"); // Redirect to email verification page
      } else {
        setError("Unexpected sign-up status.");
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Sign-up failed");
    }
  };

  const handleOAuthSignUp = async (strategy: "oauth_google" | "oauth_apple") => {
    if (!isLoaded || !signUp) {
      setError("Clerk is not ready yet.");
      return;
    }

    try {
      await signUp.authenticateWithRedirect({
        strategy,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/dashboard",
      });
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "OAuth sign-up failed");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroBanner title="Sign Up" />

      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign Up</h3>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSignUp}>
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
              Sign Up
            </button>

            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link href="/signin" className="text-[#FF9F0D]">
                Sign in here
              </Link>
            </p>
          </form>

          <div className="text-center mt-8">
            <p>or</p>
            <button
              className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center"
              onClick={() => handleOAuthSignUp("oauth_google")}
            >
              <FcGoogle className="h-6 mr-2" />
              Sign up with Google
            </button>

            <button
              className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center"
              onClick={() => handleOAuthSignUp("oauth_apple")}
            >
              <ImAppleinc className="h-6 mr-2" />
              Sign up with Apple
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
