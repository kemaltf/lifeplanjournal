import { ContainerPad } from "@/styles/SharedStyles";
import React, { useState, useRef, useEffect } from "react";
import { ContainerImage, ContainerBigImage, ContainerDesc, ContainerPadStyled } from "./ImageSlideCarousel";
import Image from "next/image";
import Carousel from "../Carousel";
import SlideShow from "../../molecules/SlideShow";
import SlideShowControl from "../../molecules/SlideShowControl";

type Props = {};

const index = (props: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  console.log("current image dari ", currentImage);
  return (
    <ContainerPadStyled>
      <ContainerImage>
        <ContainerBigImage>
          <SlideShow currentImage={currentImage} setCurrentImage={setCurrentImage}></SlideShow>
        </ContainerBigImage>
        <SlideShowControl setCurrentImage={setCurrentImage}></SlideShowControl>
      </ContainerImage>

      <ContainerDesc>
        <p>Product category</p>
        <h1>Product Title</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita molestiae ducimus perferendis rem. Illum excepturi aperiam possimus tempora sequi amet.</p>
        <h3>Rp 20.000</h3>
        <del>Rp 20.000</del>
      </ContainerDesc>
    </ContainerPadStyled>
  );
};

export default index;
