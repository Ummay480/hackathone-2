import { NextRequest, NextResponse } from "next/server";
import ShipEngine from "shipengine";

const shipengine = new ShipEngine(process.env.SHIPENGINE_API_KEY!);

export async function POST(req: NextRequest) {
  const { trackingNumber } = await req.json();

  const result = await shipengine.trackUsingCarrierCode("ups", trackingNumber);
  return NextResponse.json(result);
}
