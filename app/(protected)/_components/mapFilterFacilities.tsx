"use client";

import MaxWidthWrapper from "@/components/maxwidthwrapper";
import { FACILITIES } from "@/constants/facilities";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface Props {
  value: string;
  onChange: (_: string) => void;
}

export const MapFilterFacilities: React.FC<Props> = ({ onChange, value }) => {
  return (
    <section className="px-10">
      <div className="flex gap-x-4 gap-y-3 lg:gap-x-10 mt-5 w-full overflow-x-scroll no-scrollbar flex-wrap">
        {FACILITIES.map((facility) => (
          <div
            key={facility.id}
            className={cn(
              value === facility.name
                ? "border-b-2 border-black pb-2 flex-shrink-0"
                : "opacity-70 flex-shrink-0",
              "flex flex-col gap-y-3 facilitys-center"
            )}
          >
            <div
              className="relative flex flex-col items-center cursor-pointer"
              onClick={() =>
                onChange(value === facility.name ? "" : facility.name)
              }
            >
              <Image
                className="w-6 h-6"
                src={facility.imageUrl}
                alt=""
                width={36}
                height={36}
              />
            </div>
            <div>{facility.title}</div>
          </div>
        ))}
        <div
          className={cn(
            !value
              ? "border-b-2 border-black pb-2 flex-shrink-0"
              : "opacity-70 flex-shrink-0",
            "flex flex-col gap-y-3 facilitys-center"
          )}
        >
          <div
            className="relative flex flex-col items-center cursor-pointer"
            onClick={() => onChange("")}
          >
            <Image
              className="w-6 h-6"
              src={"/facilities/add.png"}
              alt=""
              width={36}
              height={36}
            />
          </div>
          <div>全選</div>
        </div>
      </div>
    </section>
  );
};
