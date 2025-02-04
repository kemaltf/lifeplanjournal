import React from "react";
import { NavLink } from "./LinkStyled";

type Props = {};

const LinkButton = ({ href, currentRoute, children }: Props) => {
  return (
    <NavLink href={href} className={currentRoute === href ? "active" : ""}>
      {children}
    </NavLink>
  );
};

export default LinkButton;
