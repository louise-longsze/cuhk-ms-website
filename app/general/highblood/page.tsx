import MaxWidthWrapper from "@/components/maxwidthwrapper";
import { IoFemale, IoMale } from "react-icons/io5";
import Image from "next/image";

const perks = [
  {
    name: "男性腰圍",
    Icon: IoMale,
    description: "≧90釐米（35.4吋）",
  },
  {
    name: "女性腰圍",
    Icon: IoFemale,
    description: "≧80釐米（31.5吋）",
  },
];

const HighBloodPressurePage = () => {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-flow-col justify-stretchgap-y-12 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) => (
            <div
              key={perk.name}
              className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            >
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                  {<perk.Icon className="w-1/2 h-1/2" />}
                </div>
              </div>

              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">
                  {perk.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
          <Image src="/bigbelly.png" width={400} height={400} alt="Big belly" />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HighBloodPressurePage;
