import React, { useState } from "react";
import { CSSProperties } from "styled-components";
import { ArrowButtonLeft, ArrowButtonRight, ContainerStyled, ImageCarousel, SlideContent } from "./CarouselStyled";

// definisikan variabel untuk jumlah
// gambar yang ditampilkan dalam 1 slide
const itemsPerSlide = 1;
// Ceritanya gambarnya dari API, setelah API jadi kita replace
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
// Ini merupakan jumlah slide
const slideTotal = Math.ceil(images.length / itemsPerSlide);
const Index = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const handleLeftArrowClick = () => {
    setSliderIndex((sliderIndex - 1 + slideTotal) % slideTotal);
  };
  const handleRightArrowClick = () => {
    setSliderIndex((sliderIndex + 1) % slideTotal);
  };
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
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
  return (
    <ContainerStyled>
      <ArrowButtonLeft onClick={handleLeftArrowClick}>
        <span>&#8249;</span>
      </ArrowButtonLeft>
      <SlideContent style={{ "--slider-index": sliderIndex } as CSSProperties} itemsPerSlide={itemsPerSlide} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {images.map((image: string, index) => (
          <ImageCarousel image={image} key={index}></ImageCarousel>
          // <img key={index} src={image} alt="" />
        ))}
      </SlideContent>
      <ArrowButtonRight onClick={handleRightArrowClick}>
        <span>&#8250;</span>
      </ArrowButtonRight>
    </ContainerStyled>
  );
};
export default Index;
