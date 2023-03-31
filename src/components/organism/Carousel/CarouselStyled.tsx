import styled from "styled-components";
interface HeroProps {
  itemsPerSlide: number;
}
interface ImageCarouselProps {
  image: string;
}

export const ImageCarousel = styled.div<ImageCarouselProps>`
  background-image: url(${(props) => props.image});
  margin: 0 0.25rem;
  aspect-ratio: 16/9;
  max-width: calc(100% / var(--items-per-screen));
  flex: 0 0 calc(100% / var(--items-per-screen));
  overflow: hidden;
  background-size: cover;
  background-position: center;
  touch-action: pan-x;
`;

export const SlideContent = styled.div<HeroProps>`
  --slider-index: 0;
  --items-per-screen: ${(props) => props.itemsPerSlide};
  flex-grow: 1;
  display: flex;
  width: calc(100% - 2 * var(--slider-padding));
  transform: translateX(calc(var(--slider-index) * -100%));
  transition: transform 250ms ease-in-out;
  padding: 0 0.25rem;
  /* & > img {
    padding: 0.25rem;
    aspect-ratio: 16/9;
    max-width: calc(100% / var(--items-per-screen));
    flex: 0 0 calc(100% / var(--items-per-screen));
    overflow: hidden;
  } */

  @media (min-width: 768px) and (max-width: 1023px) {
    --items-per-screen: 3;
  }

  @media (max-width: 767px) {
    --items-per-screen: 1;
  }
`;

// mixins
const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  width: var(--slider-padding);
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 10;
  margin: 0.25rem 0;
  /* width: 5rem; */
  cursor: pointer;
  border: none;
  font-size: 5rem;
  color: white;
  transition: transform 150ms ease-in-out;
  transition: background-color 150ms ease-in-out;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 6rem;
  }

  &:hover span,
  &:focus span {
    transform: scale(1.1);
    outline: none;
  }
`;

export const ArrowButtonLeft = styled(ArrowButton)`
  border-radius: 0 1rem 1rem 0;
`;

export const ArrowButtonRight = styled(ArrowButton)`
  border-radius: 1rem 0 0 1rem;
`;
