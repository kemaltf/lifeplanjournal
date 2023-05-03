import { ContainerPad } from "@/styles/SharedStyles";
import React, { useState, useRef, useEffect } from "react";
import { ContainerImage, ContainerBigImage, ContainerDesc, ContainerPadStyled, ImageStyled } from "./ImageSlideCarousel";
import Image from "next/image";
import Carousel from "../../molecules/Carousel";
import SlideShowControl from "../../molecules/SlideShowControl";

// Ceritanya gambarnya dari API, setelah API jadi kita replace
const images: string[] = [
  "https://via.placeholder.com/210/00FF00?text=1",
  "https://via.placeholder.com/220/000?text=2",
  "https://via.placeholder.com/220/000?text=3",
  "https://via.placeholder.com/210/00FF00?text=4",
  "https://via.placeholder.com/220/000?text=5",
  "https://via.placeholder.com/210/00FF00?text=6",
];
type Props = {};

const index = (props: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [durationMs, setDurationMs] = useState<number>(400); // container width
  const handleImageClick = (index: number) => {
    console.log(index);
    setCurrentImage(index);
    const prevSlide = currentImage;
    const diffSlide = Math.abs(index - prevSlide);
    const totalDuration = 200 + 200 * diffSlide;
    setDurationMs(totalDuration);
  };
  return (
    <ContainerPadStyled>
      <ContainerImage>
        <ContainerBigImage>
          <Carousel images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} durationMs={durationMs} loop={false} arrow>
            {images.map((image: string, index) => (
              <Image src={image} key={index} alt="" width={500} height={500} layout="responsive"></Image>
            ))}
          </Carousel>
        </ContainerBigImage>
        <Carousel images={images} durationMs={durationMs} loop={false} arrow={false} slide={false}>
          {images.map((image: string, index) => (
            <ImageStyled key={index} onClick={() => handleImageClick(index)} onTouchStart={() => handleImageClick(index)}>
              <img src={image} alt="" />
            </ImageStyled>
          ))}
        </Carousel>
        {/* <SlideShowControl images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} setDurationMs={setDurationMs}></SlideShowControl> */}
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
