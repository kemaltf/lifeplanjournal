import React, { useState } from "react";
import styled, { CSSProperties } from "styled-components";

interface Props {
  sliderIndex: number;
}

const index = (props: Props) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleLeftArrowClick = () => {
    setSliderIndex((sliderIndex - 1 + 4) % 4);
  };
  const handleRightArrowClick = () => {
    setSliderIndex((sliderIndex + 1) % 4);
  };
  console.log(sliderIndex);
  return (
    <SlideContainer>
      <ArrowButtonLeft onClick={handleLeftArrowClick}>
        <span>&#8249;</span>
      </ArrowButtonLeft>
      <SlideContent style={{ "--slider-index": sliderIndex } as CSSProperties}>
        <img src="https://via.placeholder.com/210/00FF00?text=1" alt="" />
        <img src="https://via.placeholder.com/220/00FF00?text=2" alt="" />
        <img src="https://via.placeholder.com/230/00FF00?text=3" alt="" />
        <img src="https://via.placeholder.com/240/00FF00?text=4" alt="" />
        <img src="https://via.placeholder.com/250/00FF00?text=5" alt="" />
        <img src="https://via.placeholder.com/260/00FF00?text=6" alt="" />
        <img src="https://via.placeholder.com/270/00FF00?text=7" alt="" />
        <img src="https://via.placeholder.com/280/00FF00?text=8" alt="" />
        <img src="https://via.placeholder.com/290/00FF00?text=9" alt="" />
      </SlideContent>
      <ArrowButtonRight onClick={handleRightArrowClick}>
        <span>&#8250;</span>
      </ArrowButtonRight>
    </SlideContainer>
  );
};

export default index;
export const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const SlideContent = styled.div`
  --slider-index: 0;
  flex-grow: 1;
  display: flex;
  width: calc(100% - 2 * var(--slider-padding));
  transform: translateX(calc(var(--slider-index) * -100%));
  transition: transform 250ms ease-in-out;
  margin: 0 0.25rem;
  & > img {
    padding: 0.25rem;
    aspect-ratio: 16/9;
    max-width: 25%;
    flex: 0 0 25%;
    overflow: hidden;
  }
`;
// mixins
const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
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
