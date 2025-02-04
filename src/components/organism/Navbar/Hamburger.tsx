import React from "react";
import { Hamburger } from "./NavStyled";

type Props = {
  className: string;
  onClick: () => void;
};

const HamburgerComponent = ({ ...rest }: Props) => {
  return (
    <Hamburger {...rest}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Hamburger>
  );
};

export default HamburgerComponent;
