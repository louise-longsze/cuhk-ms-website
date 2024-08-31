import { currentRole } from "@/lib/auth";
import { db } from "@/lib/db";
import { UserRole } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, res: NextResponse) {
  const searchParams = request.nextUrl.searchParams;
  const district = searchParams.get("district") || "";

  if (district.length === 0) {
    return new NextResponse("Missing district", { status: 400 });
  }

  const facilities = await db.place.findMany({
    where: {
      district,
    },
  });
  return NextResponse.json(facilities);
}
