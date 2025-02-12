import { clerkClient } from "@clerk/clerk-sdk-node";

export async function verifyEmail(userId: string, code: string) {
  try {
    const user = await clerkClient.users.getUser(userId);

    if (!user.emailAddresses.length) {
      throw new Error("No email address found for this user.");
    }

    const email = user.emailAddresses.find(e => e.id === user.primaryEmailAddressId);

    if (!email || !email.verification) {
      throw new Error("Email verification is not available.");
    }

    // ✅ Attempt email verification
    const result = await email.verification.attempt({ code });

    if (result.status === "verified") {
      console.log("✅ Email verified successfully!");
    } else {
      console.log("❌ Email verification failed.");
    }
  } catch (error) {
    console.error("❌ Error verifying email:", error);
  }
}
