import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { BloodPressure } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import dayjs from "dayjs";
import { MONTHLY_SCHEDULER_MONTH_RANGE } from "@/constants/monthlyscheduler";

function transformBloodPressure(bloodPressure: BloodPressure) {
  return {
    ...bloodPressure,
    datetime: dayjs(bloodPressure.datetime).format("YYYY-MM-DD HH:mm:ss"),
  };
}

export async function GET() {
  const user = await currentUser();

  if (!user) {
    return new NextResponse(null, { status: 401 });
  }

  const { id: userId } = user;

  const bloodPressure = await db.bloodPressure.findMany({
    where: {
      authorId: userId,
      datetime: {
        gte: dayjs()
          .add(-MONTHLY_SCHEDULER_MONTH_RANGE, "months")
          .toISOString(),
        lte: dayjs().add(MONTHLY_SCHEDULER_MONTH_RANGE, "months").toISOString(),
      },
    },
    orderBy: {
      datetime: "asc",
    },
  });
  return NextResponse.json(bloodPressure.map(transformBloodPressure));
}

interface PostRequestBody {
  datetime: string;
  sbp: number;
  dbp: number;
  pulse: number;
}

export async function POST(request: NextRequest, res: NextResponse) {
  const user = await currentUser();

  if (!user) {
    return new NextResponse(null, { status: 401 });
  }

  const { id: userId } = user;
  const { datetime, sbp, dbp, pulse }: PostRequestBody = await request.json();

  const bloodPressure = await db.bloodPressure.create({
    data: {
      authorId: userId,
      datetime,
      sbp,
      dbp,
      pulse,
    },
  });
  return NextResponse.json(transformBloodPressure(bloodPressure));
}
