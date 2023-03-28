import Image from "next/image";
import { LogoContainer, Nav, NavLinkContainer, SiteTitle } from "./NavStyled";
import LogoImage from "../../../../public/images/logo_lifeplanjournal.png";
import NavLink from "./NavLink";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Nav>
      <LogoContainer>
        <Image src={LogoImage} alt="logo" width={30}></Image>
        <SiteTitle>
          <h1>Life Plan Journal</h1>
        </SiteTitle>
      </LogoContainer>
      <NavLinkContainer>
        <NavLink href="/" active={currentRoute === "/" ? "active" : ""}>
          Home
        </NavLink>
        <NavLink
          href="/products"
          active={currentRoute === "/products" ? "active" : ""}
        >
          Products
        </NavLink>
        <NavLink
          href="/artists"
          active={currentRoute === "/products" ? "active" : ""}
        >
          Artists
        </NavLink>
      </NavLinkContainer>
    </Nav>
  );
};

export default Index;
