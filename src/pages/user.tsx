import React, { useEffect } from "react";
import UserComponent from "@/components/organism/UserNav";
import { useRouter } from "next/router";
import UserPositionProvider from "../context/UserPositionContext";

type Props = {};

const User = ({}: Props) => {
  if (typeof window !== "undefined") {
    const router = useRouter();
    router.push("/user/profile");
  }
  return (
    <UserPositionProvider>
      <UserComponent />
    </UserPositionProvider>
  );
};

export default User;
