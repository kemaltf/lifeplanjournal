import { ContainerPad } from "@/styles/SharedStyles";
import React from "react";
import { ContainerImage, ImageBig, ContainerDesc, ContainerPadStyled, ArrowButtonLeft, ArrowButtonRight, MiniSlider, SliderBox, SlideContent } from "./ImageSlideCarousel";
import Image from "next/image";
import Carousel from "../Carousel";

type Props = {};
const images: string[] = [
  "https://via.placeholder.com/210/00FF00?text=1",
  "https://via.placeholder.com/220/00FF00?text=2",
  "https://via.placeholder.com/230/00FF00?text=3",
  "https://via.placeholder.com/240/00FF00?text=4",
  "https://via.placeholder.com/250/00FF00?text=5",
  "https://via.placeholder.com/260/00FF00?text=6",
  "https://via.placeholder.com/270/00FF00?text=7",
  "https://via.placeholder.com/280/00FF00?text=8",
  "https://via.placeholder.com/290/00FF00?text=9",
];
const index = (props: Props) => {
  return (
    <ContainerPadStyled>
      <ContainerImage>
        <SlideContent>
          {images.map((image, index) => (
            <ImageBig key="index">
              <img src={image} alt=""></img>
            </ImageBig>
          ))}
        </SlideContent>

        {/* <MiniSlider>
          {images.map((image, index) => (
            <SliderBox>
              <img src={image} alt=""></img>
            </SliderBox>
          ))}
        </MiniSlider> */}
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
