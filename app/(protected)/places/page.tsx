"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
import Categories from "../_components/categories";

const ClientPage = () => {
  const user = useCurrentUser();

  return (
    <>
      <UserInfo label="📱 Client component" user={user} />
      <Categories />
    </>
  );
};

export default ClientPage;
