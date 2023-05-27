import React, { useState } from "react";
import { HiUser } from "react-icons/hi2";
import { Container, Profile, UserContainer } from "./UserStyled";
import MenuToggle from "@/components/organism/MenuToggle";
type Props = {};

const index = ({ children }: Props) => {
  return (
    <Container>
      <Profile>
        <UserContainer>
          <HiUser></HiUser>
          <span>User</span>
        </UserContainer>
        <div>
          <MenuToggle></MenuToggle>
          {children}
        </div>
      </Profile>
    </Container>
  );
};

export default index;
