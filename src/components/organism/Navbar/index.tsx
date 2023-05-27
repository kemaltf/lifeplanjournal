import Image from "next/image";
import { Hamburger, LogoContainer, Nav, NavLinkContainer, SiteTitle } from "./NavStyled";
import LogoImage from "../../../../public/images/logo_lifeplanjournal.png";
import NavLink from "./NavLink";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Nav>
      <LogoContainer href="/">
        <Image src={LogoImage} alt="logo" width={27}></Image>
        <SiteTitle>
          <h1>Tes</h1>
        </SiteTitle>
      </LogoContainer>
      <Hamburger className={isOpen ? "open" : ""} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <NavLinkContainer className={isOpen ? "" : "close"} onClick={() => setIsOpen(!isOpen)}>
        <NavLink href="/" active={currentRoute === "/" ? "active" : ""}>
          Home
        </NavLink>
        <NavLink href="/products" active={currentRoute === "/products" ? "active" : ""}>
          Products
        </NavLink>
      </NavLinkContainer>
    </Nav>
  );
};

export default Index;
