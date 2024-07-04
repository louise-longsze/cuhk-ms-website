interface iAppProps {
  name: string;
  title: string;
  imageUrl: string;
  description: string;
  id: number;
}

export const categoryItems: iAppProps[] = [
  {
    id: 0,
    name: "park",
    description: "This Property is close to the Beach.",
    title: "公園",
    imageUrl: "/facilities/add.png",
  },
  {
    id: 1,
    name: "gympark",
    description: "This is a Property which is trending.",
    title: "健身公園",
    imageUrl: "/facilities/add.png",
  },
  {
    id: 2,
    name: "gymstation",
    description: "This is a Property is close to the beachfront",
    title: "健身站",
    imageUrl: "/facilities/add.png",
  },
  {
    id: 3,
    name: "elderlygym",
    description: "This Property is considerd a Earth Home",
    title: "長者健身園地",
    imageUrl: "/facilities/add.png",
  },
  {
    id: 4,
    name: "petpark",
    description: "This Property is considerd Luxorious",
    title: "寵物公園",
    imageUrl: "/facilities/add.png",
  },
  {
    id: 5,
    name: "basketballcourt",
    description: "This property has an amazing View",
    title: "籃球場",
    imageUrl: "/facilities/add.png",
  },
  {
    id: 6,
    name: "restarea",
    description: "This property puts a big focus on design ",
    title: "休憩處",
    imageUrl: "/facilities/add.png",
  },
];
