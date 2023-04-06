import { Container } from "@/styles/SharedStyles";
import styled from "styled-components";

export const ContainerPadStyled = styled.div`
  padding: 20px 87px;
  background: yellow;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 10px;
`;

export const ContainerImage = styled(Container)`
  /* flex: 0 0 56%; */
  /* padding-right: 1vh; */
  overflow: hidden;
  /* border: 1px solid brown; */
  background-color: red;
  /* position: relative; */
  /* width: 100%; */
`;

export const SlideContent = styled.div`
  flex-grow: 1;
  display: flex;
  /* flex-wrap: wrap; */
  width: calc(100% - 2 * var(--slider-padding));
  transform: translateX(calc(0 * -100%));
  transition: transform 250ms ease-in-out;
  /* padding: 0 0.25rem; */

  @media (min-width: 768px) and (max-width: 1023px) {
    --items-per-screen: 3;
  }

  @media (max-width: 767px) {
    --items-per-screen: 1;
  }
`;
export const ImageBig = styled.div`
  width: 100%;
  background-color: green;
  max-width: 100%;
  flex: 0 0 100%;
  /* height: 330px; */
  /* align-items: center;
  justify-content: center; */

  overflow: hidden;
  & > img {
    width: 100%;
    height: 100%;
    display: inline-block;
    object-fit: cover;
  }
`;
// mixins
const ArrowButton = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0;
  font-size: 1rem;
  color: white;
  width: auto;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;

  /* padding: 10px; */
`;

export const ArrowButtonLeft = styled(ArrowButton)``;

export const ArrowButtonRight = styled(ArrowButton)``;

export const SliderBox = styled.div``;
export const MiniSlider = styled.div`
  background-color: pink;
`;
export const ContainerDesc = styled.div`
  /* flex-direction: column;
  flex: 1; */
  background-color: blue;
`;
