import React from "react";
import UserNav from "@/components/organism/UserNav";
import UserProfile from "@/components/organism/UserProfile";
type Props = {};

const Profile = (props: Props) => {
  return (
    <UserNav>
      <UserProfile></UserProfile>
    </UserNav>
  );
};

export default Profile;
