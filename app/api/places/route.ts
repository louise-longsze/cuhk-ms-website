import { PAGE_SIZE } from "@/constants/pagination";
import { currentRole } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, res: NextResponse) {
  const searchParams = request.nextUrl.searchParams;
  const district = searchParams.get("district") || "";
  const facility = searchParams.get("facility") || "";
  const page = searchParams.get("page") || "";

  console.log(
    "%ccuhk-ms-website/app/api/places/route.ts:12 object",
    "color: #007acc;",
    3333333,
    [district && `district = $1`, facility && `facilities ~ $2`]
      .filter(Boolean)
      .join(" AND ")
  );
  const ids = await db.$queryRawUnsafe<{ id: string }[]>(
    `
    SELECT id FROM public."Place"
    WHERE ${[
      district && `district = $1`,
      facility && `facilities ~ $2`,
      "1 = 1",
    ]
      .filter(Boolean)
      .join(" AND ")}
    LIMIT ${PAGE_SIZE}
    OFFSET ${PAGE_SIZE * (Number(page) - 1)};
  `,
    district,
    `(?<![a-zA-Z0-9_\\u4e00-\\u9fa5])${facility}(?![a-zA-Z0-9_\\u4e00-\\u9fa5])`
  );

  const facilities = await db.place.findMany({
    where: {
      id: {
        in: ids.map(({ id }) => id),
      },
    },
  });
  return NextResponse.json(facilities);
}
