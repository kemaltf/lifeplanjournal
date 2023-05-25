import React, { useEffect } from "react";
import UserComponent from "@/components/organism/User";
import { useRouter } from "next/router";
import { GlobalContextProvider } from "../../context/store";
type Props = {};

const User = ({}: Props) => {
  if (typeof window !== "undefined") {
    const router = useRouter();
    router.push("/user/profile");
  }
  return (
    <GlobalContextProvider>
      <UserComponent />
    </GlobalContextProvider>
  );
};

export default User;
