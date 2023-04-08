import Image from "next/image";
import React, { useState } from "react";
import { CSSProperties } from "styled-components";
import { PaddingDiv, ArrowButtonLeft, ArrowButtonRight, ContainerStyled, ImageCarousel, SlideContent, ArrowImageRight } from "./BannerHomePageStyled";

// Ceritanya gambarnya dari API, setelah API jadi kita replace
const images: string[] = [
  "https://via.placeholder.com/210/00FF00?text=1",
  "https://via.placeholder.com/220/000?text=2",
  "https://via.placeholder.com/230/00FF00?text=3",
  "https://via.placeholder.com/240/000?text=4",
  "https://via.placeholder.com/250/00FF00?text=5",
  "https://via.placeholder.com/260/000?text=6",
  "https://via.placeholder.com/270/00FF00?text=7",
  "https://via.placeholder.com/280/000?text=8",
  "https://via.placeholder.com/290/00FF00?text=9",
];

// gambar dalam 1 slide
const itemsPerSlide = 1;

// Hitung jumlah slide
const slideTotal = Math.ceil(images.length / itemsPerSlide);

const Index = () => {
  // slider yang ditampilkan.
  const [sliderIndex, setSliderIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Menggunakan button
  const handleLeftArrowClick = () => {
    setSliderIndex((sliderIndex - 1 + slideTotal) % slideTotal);
  };
  const handleRightArrowClick = () => {
    setSliderIndex((sliderIndex + 1) % slideTotal);
  };

  // Menggunakan touch screen
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log("ini e", e.touches[0]);
    setStartX(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setEndX(e.changedTouches[0].clientX);
    if (startX - endX > 50) {
      setSliderIndex((sliderIndex + 1) % slideTotal);
    } else if (endX - startX > 50) {
      setSliderIndex((sliderIndex - 1 + slideTotal) % slideTotal);
    }
  };

  // menggunakan mouse
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e);
    setIsMouseDown(true);
    setStartX(e.clientX);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMouseDown) {
      setEndX(e.clientX);
    }
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
    if (startX - endX > 50) {
      setSliderIndex((sliderIndex + 1) % slideTotal);
    } else if (endX - startX > 50) {
      setSliderIndex((sliderIndex - 1 + slideTotal) % slideTotal);
    }
  };
  return (
    <ContainerStyled>
      <ArrowButtonLeft>
        <Image src="/icons/arrow.svg" width={40} height={40} alt="" onClick={handleLeftArrowClick} />
      </ArrowButtonLeft>
      <SlideContent
        style={{ "--slider-index": sliderIndex } as CSSProperties}
        itemsPerSlide={itemsPerSlide}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {images.map((image: string, index) => (
          <PaddingDiv>
            <ImageCarousel image={image} key={index}></ImageCarousel>
          </PaddingDiv>
        ))}
      </SlideContent>
      <ArrowButtonRight>
        <ArrowImageRight src="/icons/arrow.svg" width={40} height={40} alt="" onClick={handleRightArrowClick} />
      </ArrowButtonRight>
    </ContainerStyled>
  );
};
export default Index;
