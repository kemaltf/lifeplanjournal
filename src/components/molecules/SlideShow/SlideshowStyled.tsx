import styled from "styled-components";
import { Container } from "@/styles/SharedStyles";

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
  /* width: 100%; */
  transform: translateX(calc(var(--slider-index) * -100%));
  transition: transform 250ms ease-in-out;
  @media (min-width: 768px) and (max-width: 1023px) {
    --items-per-screen: 3;
  }

  @media (max-width: 767px) {
    --items-per-screen: 1;
  }
`;
export const ImageCarousel = styled.div<ImageCarouselProps>`
  background-image: url(${(props) => props.image});
  aspect-ratio: 16/9;
  flex: 0 0 calc(100% / var(--items-per-screen));
  overflow: hidden;
  background-size: cover;
  background-position: center;
  touch-action: pan-x;
  width: 100%;
  height: auto;
`;

// mixins
const ArrowButton = styled.a`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  z-index: 10;
  cursor: pointer;
  font-size: 5rem;
  color: black;
  transition: transform 150ms ease-in-out;
  transition: background-color 150ms ease-in-out;
  overflow: hidden;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  height: fit-content;
  &:hover span {
    transform: scale(1.1);
    outline: none;
  }
`;

export const ArrowButtonLeft = styled(ArrowButton)`
  left: 0;
`;

export const ArrowButtonRight = styled(ArrowButton)`
  right: 0;
`;
export const PaddingDiv = styled.div`
  aspect-ratio: 16/9;
  max-width: calc(100% / var(--items-per-screen));
  flex: 0 0 calc(100% / var(--items-per-screen));
  overflow: hidden;
  background-size: cover;
  background-position: center;
  touch-action: pan-x;
  width: 100%;
  height: auto;
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 5px;
  }
`;
