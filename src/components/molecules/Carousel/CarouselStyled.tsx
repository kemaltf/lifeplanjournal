import styled from "styled-components";
import { Container } from "@/styles/SharedStyles";
import Image from "next/image";

interface SlideContentProps {
  durationMs: number;
}
interface ImageCarouselProps {
  image: string;
}

// Container
export const ContainerStyled = styled(Container)`
  position: relative;
  max-width: 100%; // whenever it places will full width
  overflow: hidden;
`;
// SlideContent
export const SlideContent = styled.div<SlideContentProps>`
  display: flex;
  flex-grow: 1;
  /* cursor: pointer; */
  white-space: nowrap;
  transition: all ${(props) => props.durationMs}ms ease-in-out;
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
  align-items: center;
  text-align: center;
  width: 100%;
  height: auto;
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
