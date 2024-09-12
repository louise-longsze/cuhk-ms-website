import { PAGE_SIZE } from "@/constants/pagination";
import { currentRole } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, res: NextResponse) {
  const searchParams = request.nextUrl.searchParams;
  const district = searchParams.get("district") || "";
  const facility = searchParams.get("facility") || "";
  const page = searchParams.get("page") || "";

  const idsQuery = db.$queryRawUnsafe<{ id: string }[]>(
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

  const totalQuery = db.$queryRawUnsafe<{ total: number }>(
    `
    SELECT COUNT(id) AS total FROM public."Place"
    WHERE ${[
      district && `district = $1`,
      facility && `facilities ~ $2`,
      "1 = 1",
    ]
      .filter(Boolean)
      .join(" AND ")};
  `,
    district,
    `(?<![a-zA-Z0-9_\\u4e00-\\u9fa5])${facility}(?![a-zA-Z0-9_\\u4e00-\\u9fa5])`
  );

  const [ids, totalBigInt] = await Promise.all([idsQuery, totalQuery]);

  const facilities = await db.place.findMany({
    where: {
      id: {
        in: ids.map(({ id }) => id),
      },
    },
  });

  // https://www.prisma.io/docs/orm/prisma-client/special-fields-and-types#serializing-bigint
  const { total } = JSON.parse(
    JSON.stringify(
      totalBigInt,
      (_, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
    )
  )[0];

  return NextResponse.json({
    facilities,
    total,
    totalPage: Math.ceil(total / PAGE_SIZE),
  });
}
