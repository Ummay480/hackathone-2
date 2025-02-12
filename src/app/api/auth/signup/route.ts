import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/clerk-sdk-node";

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();
    
    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const user = await clerkClient.users.getUser(userId);

    if (!user.emailAddresses.length) {
      return NextResponse.json({ error: "No email found for user" }, { status: 400 });
    }

    const email = user.emailAddresses[0];

    // ✅ Send verification email
    await clerkClient.users.createEmailVerification({
      emailAddressId: email.id,
      strategy: "email_code",
    });

    return NextResponse.json({ message: "Verification email sent!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error sending verification email" }, { status: 500 });
  }
}
