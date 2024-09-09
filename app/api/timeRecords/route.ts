import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { TimeRecord } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import dayjs from "dayjs";
import { MONTHLY_SCHEDULER_MONTH_RANGE } from "@/constants/monthlyscheduler";

function transformTimeRecord(timeRecord: TimeRecord) {
  return {
    ...timeRecord,
    datetime: dayjs(timeRecord.datetime).format("YYYY-MM-DD HH:mm:ss"),
  };
}

export async function GET() {
  const user = await currentUser();

  if (!user) {
    return new NextResponse(null, { status: 401 });
  }

  const { id: userId } = user;

  const timeRecords = await db.timeRecord.findMany({
    where: {
      authorId: userId,
      datetime: {
        gte: dayjs().add(-MONTHLY_SCHEDULER_MONTH_RANGE, "months").toISOString(),
        lte: dayjs().add(MONTHLY_SCHEDULER_MONTH_RANGE, "months").toISOString(),
      },
    },
    orderBy: {
      datetime: "asc",
    },
  });
  return NextResponse.json(timeRecords.map(transformTimeRecord));
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

  const timeRecord = await db.timeRecord.create({
    data: {
      datetime,
      name,
      details,
      location,
      authorId: userId,
    },
  });
  return NextResponse.json(transformTimeRecord(timeRecord));
}
