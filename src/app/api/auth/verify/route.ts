import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/clerk-sdk-node";

export async function POST(req: Request) {
  try {
    const { userId, code } = await req.json();

    if (!userId || !code) {
      return NextResponse.json({ error: "User ID and code are required" }, { status: 400 });
    }

    const user = await clerkClient.users.getUser(userId);

    if (!user.emailAddresses.length) {
      return NextResponse.json({ error: "No email found for user" }, { status: 400 });
    }

    const email = user.emailAddresses[0];

    // ✅ Verify the email with the code
    const result = await clerkClient.users.attemptVerification({
      emailAddressId: email.id,
      code,
    });

    if (result.verification.status === "verified") {
      return NextResponse.json({ message: "Email verified successfully!" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Invalid or expired verification code" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Error verifying email" }, { status: 500 });
  }
}
