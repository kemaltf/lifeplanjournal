import React, { useState, useRef, useEffect } from "react";
import Carousel from "../Carousel";
import { ImageCarousel } from "./HeroStyled";

type IndexProps = {
  images: string[];
};
export default function index({ images }: IndexProps) {
  const [currentImage, setCurrentImage] = useState(1);
  const [durationMs, setDurationMs] = useState<number>(400); // container width
  return (
    <Carousel images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} setDurationMs={setDurationMs} loop={true} durationMs={durationMs}>
      <ImageCarousel image={images[images.length - 1]} key={-1}></ImageCarousel>
      {images.map((image: string, index) => (
        <ImageCarousel image={image} key={index}></ImageCarousel>
      ))}
      <ImageCarousel image={images[0]} key={images.length}></ImageCarousel>
    </Carousel>
  );
}
