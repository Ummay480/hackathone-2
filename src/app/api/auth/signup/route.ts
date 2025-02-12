import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    try {
        const data = await request.json(); // Extract JSON data from request body

        // Example: You can process the data, save it to a database, or validate it here

        return NextResponse.json({ message: "User signed up successfully!", data });
    } catch (error) {
        return NextResponse.json({ error: "Failed to process request" }, { status: 400 });
    }
};
