"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
import { useSignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  const router = useRouter();
  const { signUp, isLoaded } = useSignUp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return setError("Clerk is not ready. Try again.");

    try {
      await signUp.create({ emailAddress: email, password });
      await signUp.prepareEmailAddressVerification();
      router.push("/verify-email");
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Sign-up failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-md p-8 max-w-md w-full">
        <h3 className="text-2xl font-bold mb-6 text-center">Sign Up</h3>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 mb-4 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-3 py-2 mb-4 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-500">Sign In</Link>
        </p>

        <div className="mt-6">
          <button
            className="w-full flex items-center justify-center border py-2 rounded mb-2"
            onClick={() => signUp?.authenticateWithRedirect({
              strategy: "oauth_google",
              redirectUrl: "/sso-callback",
              redirectUrlComplete: "/dashboard",
            })}
          >
            <FcGoogle className="mr-2" /> Sign up with Google
          </button>

          <button
            className="w-full flex items-center justify-center border py-2 rounded"
            onClick={() => signUp?.authenticateWithRedirect({
              strategy: "oauth_apple",
              redirectUrl: "/sso-callback",
              redirectUrlComplete: "/dashboard",
            })}
          >
            <ImAppleinc className="mr-2" /> Sign up with Apple
          </button>
        </div>
      </div>
    </div>
  );
}
