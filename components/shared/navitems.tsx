"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      <li>
        <Link href={"/"}>主頁</Link>
      </li>
      <li>
        <DropdownMenu>
          <DropdownMenuTrigger>病因</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={"/general/highblood"}>高血壓</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/general/diabetes"}>糖尿病</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/general/cholesterol"}>膽固醇</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/general/obese"}>超重或肥</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
      <li>
        <Link href={"/general/smoke"}>吸煙</Link>
      </li>
      <li>
        <Link href={"/general/sports"}>運動</Link>
      </li>
      <li>
        <Link href={"/general/diet"}>健康的飲食</Link>
      </li>
      <li>
        <Link href={"/general/tips"}>生活提示</Link>
      </li>
    </ul>
  );
};

export default NavItems;
