import { clerkClient } from "@clerk/clerk-sdk-node";

export async function sendVerificationEmail(userId: string) {
  try {
    const user = await clerkClient.users.getUser(userId);

    if (!user.emailAddresses.length) {
      throw new Error("No email address found for this user.");
    }

    const email = user.emailAddresses.find(e => e.id === user.primaryEmailAddressId);

    if (!email || !email.verification) {
      throw new Error("Email verification is not available.");
    }

    // ✅ Start email verification
    await email.verification.start({ strategy: "email_code" });

    console.log("✅ Verification email sent successfully!");
  } catch (error) {
    console.error("❌ Error sending verification email:", error);
  }
}
