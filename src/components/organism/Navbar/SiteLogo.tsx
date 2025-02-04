import React from "react";
import { LogoContainer, SiteTitle } from "./NavStyled";
import Image, { StaticImageData } from "next/image";

interface Props {
  alt: string;
  image: StaticImageData;
  href: string;
  titleImage: string;
}

const SiteLogo = ({ alt, image, href, titleImage }: Props) => {
  return (
    <LogoContainer href={href}>
      <Image src={image} alt={alt} width={27}></Image>
      <SiteTitle>
        <h1>{titleImage}</h1>
      </SiteTitle>
    </LogoContainer>
  );
};

export default SiteLogo;
