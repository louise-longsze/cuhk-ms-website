import { PiPark, PiBasketball, PiChair } from "react-icons/pi";
import { MdSportsGymnastics, MdElderly, MdPets } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import Container from "./container";
import CategoryBox from "./categorybox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "公園",
    icon: PiPark,
    description: "唔知入咩好1",
  },
  {
    label: "健身公園",
    icon: MdSportsGymnastics,
    description: "唔知入咩好2",
  },
  {
    label: "健身站",
    icon: CgGym,
    description: "唔知入咩好3",
  },
  {
    label: "長者健身園地",
    icon: MdElderly,
    description: "唔知入咩好4",
  },
  {
    label: "寵物公園",
    icon: MdPets,
    description: "唔知入咩好5",
  },
  {
    label: "籃球場",
    icon: PiBasketball,
    description: "唔知入咩好6",
  },
  {
    label: "休憩處",
    icon: PiChair,
    description: "唔知入咩好7",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/places";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
