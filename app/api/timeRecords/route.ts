import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { UserRole } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { inflate } from "zlib";

export async function GET() {
  const user = await currentUser();

  if (!user) {
    return new NextResponse(null, { status: 401 });
  }

  const { id: userId } = user;

  const timeRecords = await db.timeRecord.findMany({
    where: {
      authorId: userId,
    },
  });
  return NextResponse.json(timeRecords);
}

interface PostRequestBody {
  datetime: string;
  name: string;
  details: string;
  location: string;
}

export async function POST(request: NextRequest, res: NextResponse) {
  const user = await currentUser();

  if (!user) {
    return new NextResponse(null, { status: 401 });
  }

  const { id: userId } = user;
  const { datetime, name, details, location }: PostRequestBody =
    await request.json();

  const timeRecords = await db.timeRecord.create({
    data: {
      datetime,
      name,
      details,
      location,
      authorId: userId,
    },
  });
  return NextResponse.json(timeRecords);
}
