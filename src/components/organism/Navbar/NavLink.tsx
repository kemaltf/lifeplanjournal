import React from "react";
import { NavLinkStyled } from "./NavStyled";

type Props = {
  href: string;
  children: React.ReactNode;
  active: "active" | "";
};

const NavLink = ({ href, active, children }: Props) => {
  return (
    <NavLinkStyled href={href} className={active}>
      {children}
    </NavLinkStyled>
  );
};

export default NavLink;
