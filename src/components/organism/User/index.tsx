"use client";
import React, { useState, useEffect } from "react";
import { HiUser } from "react-icons/hi2";
import { Container, Profile } from "./UserStyled";
import MenuToggle from "@/components/organism/MenuToggle";
import { useGlobalContext } from "../../../../context/store";
type Props = {};

const index = ({ children }: Props) => {
  const { position, setPosition } = useGlobalContext();

  useEffect(() => {
    setPosition(3);
    console.log("yes", position);
  });

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
