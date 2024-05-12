"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
import Categories from "../_components/categories";
import { MapFilterItems } from "../_components/mapfilteritems";

const PlacePage = () => {
  const user = useCurrentUser();

  return (
    <>
      <div>
        <p>test if this can show</p>
      </div>
      <MapFilterItems />
    </>
  );
};

export default PlacePage;
