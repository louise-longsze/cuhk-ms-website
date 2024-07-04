"use client";

import MaxWidthWrapper from "@/components/maxwidthwrapper";
import { categoryItems } from "@/constants/categoryitems";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function MapFilterItems() {
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex gap-x-1 lg:gap-x-10 mt-5 w-full overflow-x-scroll no-scrollbar">
          {categoryItems.map((item) => (
            <Link
              key={item.id}
              href={pathname + "?" + createQueryString("filter", item.name)}
              className={cn(
                search === item.name
                  ? "border-b-2 border-black pb-2 flex-shrink-0"
                  : "opacity-70 flex-shrink-0",
                "flex flex-col gap-y-3 items-center"
              )}
            >
              <div className="relative">
                <Image
                  className="w-6 h-6"
                  src={item.imageUrl}
                  alt=""
                  width={36}
                  height={36}
                />
              </div>
              <div>{item.title}</div>
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
