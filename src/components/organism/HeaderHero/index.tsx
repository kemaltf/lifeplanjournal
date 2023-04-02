import React from "react";

import { ContainerBgStyled } from "./HeaderHeroStyled";
type Props = {};
const image = "https://via.placeholder.com/210/00FF00?text=1";
const index = (props: Props) => {
  return (
    <>
      <ContainerBgStyled image={image}></ContainerBgStyled>
    </>
  );
};

export default index;
