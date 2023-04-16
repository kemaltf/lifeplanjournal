import styled from "styled-components";
import { Container } from "@/styles/SharedStyles";
import Image from "next/image";

interface HeroProps {
  itemsPerSlide: number;
}
interface ImageCarouselProps {
  image: string;
}
// wrapper
export const ContainerStyled = styled(Container)`
  position: relative;
  max-width: 100%; // artinya dimanapun bakal memenuhi widthnya
  overflow: hidden;
`;
// carousel
export const SlideContent = styled.div`
  display: flex;
  flex-grow: 1;
  cursor: pointer;
  white-space: nowrap;
  transition: all 250ms ease-in-out;
  /* overflow: scroll; */
  width: 6096px;

  &.dragging {
    cursor: grab;
    scroll-behavior: auto;
    transition: none;
  }
  &.clone {
    transition: none;
  }
`;

export const ImageCarousel = styled.div<ImageCarouselProps>`
  display: flex;
  flex: 0 0 calc(100% / 1); //satu layar ada 3 nanti ubah angka 3 nya ya

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 75vh;
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 60vh;
  }
  @media (max-width: 767px) {
    height: 50vh;
  }
`;

// mixins
const ArrowButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  z-index: 10;
  /* background: black; */
  border: none;
  outline: none;
  /* height: 100%; */
  padding: 0 0.5vh;
  transition: transform 300ms ease-in-out;
`;

export const ArrowButtonLeft = styled(ArrowButton)`
  left: 0;
  &:hover {
    transform: translateX(-4px);
  }
`;

export const ArrowButtonRight = styled(ArrowButton)`
  right: 0;
  &:hover {
    transform: translateX(4px);
  }
`;

export const ArrowImageRight = styled(Image)`
  transform: rotate(180deg);
`;
