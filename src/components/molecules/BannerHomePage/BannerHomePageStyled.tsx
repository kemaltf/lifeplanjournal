import styled from "styled-components";
import { Container } from "@/styles/SharedStyles";
import Image from "next/image";

interface HeroProps {
  itemsPerSlide: number;
}
interface ImageCarouselProps {
  image: string;
}

export const ContainerStyled = styled(Container)`
  overflow: hidden;
  position: relative;
`;

export const SlideContent = styled.div<HeroProps>`
  --slider-index: 0;
  --items-per-screen: ${(props) => props.itemsPerSlide};

  display: flex;
  flex-grow: 1;

  transform: translateX(calc(var(--slider-index) * -100%));
  transition: transform 250ms ease-in-out;
`;
export const PaddingDiv = styled.div`
  flex: 0 0 calc(100% / var(--items-per-screen));

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 5px;
  }
`;
export const ImageCarousel = styled.div<ImageCarouselProps>`
  background-image: url(${(props) => props.image});
  /* aspect-ratio: 8/5; */
  overflow: hidden;
  background-size: cover;
  background-position: center;
  touch-action: pan-x;
  width: 100%;
  height: 80vh;
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
