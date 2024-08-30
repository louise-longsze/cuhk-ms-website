import { currentRole } from "@/lib/auth";
import { db } from "@/lib/db";
import { UserRole } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const districtsParam = searchParams.get("districts") || "";
  const districts = districtsParam.split(",");

  if (districts.length === 0) {
    return NextResponse.json([]);
  }

  const facilities = await db.place.findMany({
    where: {
      ...(districts && { district: { in: districts } }),
    },
  });
  return NextResponse.json(facilities);
}
