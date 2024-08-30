interface iAppProps {
  name: string;
  title: string;
  imageUrl: string;
  description: string;
  id: number;
}

export const FACILITIES: iAppProps[] = [
  {
    id: 0,
    name: "公園",
    description: "This Property is close to the Beach.",
    title: "公園",
    imageUrl: "/facilities/add.png",
  },
  {
    id: 1,
    name: "健身公園",
    description: "This is a Property which is trending.",
    title: "健身公園",
    imageUrl: "/facilities/add.png",
  },
  {
    id: 2,
    name: "健身站",
    description: "This is a Property is close to the beachfront",
    title: "健身站",
    imageUrl: "/facilities/add.png",
  },
  {
    id: 3,
    name: "長者健身園地",
    description: "This Property is considerd a Earth Home",
    title: "長者健身園地",
    imageUrl: "/facilities/add.png",
  },
  {
    id: 4,
    name: "寵物公園",
    description: "This Property is considerd Luxorious",
    title: "寵物公園",
    imageUrl: "/facilities/add.png",
  },
  {
    id: 5,
    name: "籃球場",
    description: "This property has an amazing View",
    title: "籃球場",
    imageUrl: "/facilities/add.png",
  },
  {
    id: 6,
    name: "休憩處",
    description: "This property puts a big focus on design ",
    title: "休憩處",
    imageUrl: "/facilities/add.png",
  },
];
