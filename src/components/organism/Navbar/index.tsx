import { Nav, NavLinkContainer, NavLinkStyled, Overlay } from "./NavStyled";
import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import SiteLogo from "./SiteLogo";
import SiteImage from "../../../../public/images/logo_lifeplanjournal.png";
import HamburgerComponent from "./Hamburger";
import LoginNavComponent from "./LoginNav";
import OverlayStatusContext from "@/context/OverlayStatusContext";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;
  const overlayStatus = useContext(OverlayStatusContext);
  console.log(overlayStatus);
  return (
    <>
      {/* add context */}
      {overlayStatus.overlayStatus && <Overlay />}
      <Nav>
        <SiteLogo alt="Life Plan Journal" image={SiteImage} href="/" titleImage="Tes"></SiteLogo>
        <HamburgerComponent className={isOpen ? "open" : ""} onClick={() => setIsOpen(!isOpen)}></HamburgerComponent>
        <NavLinkContainer className={isOpen ? "" : "close"} onClick={() => setIsOpen(!isOpen)}>
          <NavLinkStyled href="/" className={currentRoute === "/" ? "active" : ""}>
            Home
          </NavLinkStyled>
          <NavLinkStyled href="/products" className={currentRoute === "/products" ? "active" : ""}>
            Products
          </NavLinkStyled>
          <LoginNavComponent></LoginNavComponent>
        </NavLinkContainer>
      </Nav>
    </>
  );
};

export default Index;
