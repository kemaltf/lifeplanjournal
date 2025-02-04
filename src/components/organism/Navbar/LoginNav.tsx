import Image from "next/image";
import React, { useState, useRef } from "react";
import { LoginNav, ImageDiv, HiName, LinkMenu, DropdownMenu, DropdownItem, LinkDropDown } from "./NavStyled";
import Link from "next/link";
import LoginPopup from "./LoginPopup";
import { useOverlayStatus } from "@/context/OverlayStatusContext";
type Props = {};

const LoginNavComponent = (props: Props) => {
  const { overlayStatus, setOverlayStatus } = useOverlayStatus();
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [login, setLogin] = useState(true);
  const handleMouseEnter = () => {
    setIsOpen(true);
    setOverlayStatus(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setOverlayStatus(false);
  };

  const handlePopup = () => {
    setIsPopup(true);
  };
  if (login) {
    return (
      <LoginNav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={dropdownRef} className={isOpen ? "open" : ""}>
        <ImageDiv>
          <Image src={"/images/capybara.jpg"} alt="photo-profile" fill></Image>
        </ImageDiv>
        <HiName>
          <LinkMenu>Hi, Kemal!</LinkMenu>
          <DropdownMenu isOpen={isOpen}>
            <Link href={"/user/profile"}>
              <DropdownItem>Profile</DropdownItem>
            </Link>
            <Link href={"/user/orderlist"}>
              <DropdownItem>Order History</DropdownItem>
            </Link>
            <Link href={"/user/addresslist"}>
              <DropdownItem>My Address List</DropdownItem>
            </Link>
            <Link href={"/"}>
              <DropdownItem>Sign Out</DropdownItem>
            </Link>
          </DropdownMenu>
        </HiName>
      </LoginNav>
    );
  }
  return (
    <>
      {isPopup && <LoginPopup setIsPopup={setIsPopup}></LoginPopup>}
      <LinkDropDown onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={dropdownRef} className={isOpen ? "open" : ""}>
        <HiName>
          <LinkMenu>Account</LinkMenu>
          <DropdownMenu isOpen={isOpen}>
            <DropdownItem onClick={handlePopup}>Sign In</DropdownItem>

            <Link href={"/register"}>
              <DropdownItem>Sign Up</DropdownItem>
            </Link>
          </DropdownMenu>
        </HiName>
      </LinkDropDown>
    </>
  );
};

export default LoginNavComponent;
