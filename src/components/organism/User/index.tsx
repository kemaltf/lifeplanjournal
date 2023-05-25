import React, { useState } from "react";
import { HiUser } from "react-icons/hi2";
import { Container, Profile } from "./UserStyled";
import MenuToggle from "@/components/organism/MenuToggle";
type Props = {};

const index = ({ children }: Props) => {
  return (
    <Container>
      <Profile>
        <HiUser></HiUser>
        <span>User</span>
        <div>
          <MenuToggle></MenuToggle>
          {children}
        </div>
      </Profile>
    </Container>
  );
};

export default index;
