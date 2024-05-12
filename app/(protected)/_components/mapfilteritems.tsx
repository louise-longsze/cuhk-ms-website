import MaxWidthWrapper from "@/components/maxwidthwrapper";
import { categoryItems } from "@/constants/categoryitems";
import Image from "next/image";
import Link from "next/link";

export function MapFilterItems() {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex gap-x-2 lg:gap-x-10 mt-5 w-full overflow-x-scroll">
          {categoryItems.map((item) => (
            <Link key={item.id} href="">
              <div className="relative">
                <Image src={item.imageUrl} alt="" width={36} height={36} />
              </div>
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
