import { NextResponse } from "next/server";


export const POST = async (request: Request) => {
  try {
    const data = await request.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Signup failed" }, { status: 400 });
  }
};
