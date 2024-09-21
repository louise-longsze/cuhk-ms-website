import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { TimeRecord } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { transformActivityTypeEnum, transformTimeRecord } from "../dto";

interface PutRequestBody {
  datetime: string;
  durationInMin: number;
  name: string;
  details: string;
  location: string;
  activityType: string;
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await currentUser();

  if (!user) {
    return new NextResponse(null, { status: 401 });
  }

  const { id: userId } = user;
  const {
    datetime,
    name,
    details,
    location,
    activityType,
    durationInMin,
  }: PutRequestBody = await request.json();
  const { id } = params;

  const timeRecord = await db.timeRecord.update({
    data: {
      datetime,
      name,
      details,
      location,
      authorId: userId,
      activityType: transformActivityTypeEnum(activityType),
      durationInMin,
    },
    where: {
      id,
      authorId: userId,
    },
  });
  return NextResponse.json(transformTimeRecord(timeRecord));
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await currentUser();

  if (!user) {
    return new NextResponse(null, { status: 401 });
  }

  const { id: userId } = user;
  const { id } = params;

  await db.timeRecord.delete({
    where: {
      id,
      authorId: userId,
    },
  });
  return new NextResponse(null, { status: 202 });
}