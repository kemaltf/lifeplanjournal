import { Container } from "@/styles/SharedStyles";
import styled from "styled-components";

export const ContainerPadStyled = styled.div`
  padding: 70px 87px;
  background: #f1ece5;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 10px;
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 70px 20px;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
`;

export const ContainerPadStyledNoTopPad = styled.div`
  padding: 0px 87px;
  background: white;
  display: flex;
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 70px 20px;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
`;

export const ContainerImage = styled(Container)`
  overflow: hidden;
  /* background-color: red; */
  max-width: 100%;
  flex-direction: column;
`;
export const ContainerBigImage = styled(Container)`
  overflow: hidden;
  /* background-color: red; */
  aspect-ratio: 1 / 1;
  max-width: 100%;
`;

export const ContainerDesc = styled.div`
  /* flex-direction: column;
  flex: 1; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 40px 40px;
  @media (max-width: 767px) {
    padding: 20px 15px;
  }
`;
export const ImageStyled = styled.div`
  width: calc(100% / 6);
  border: 2px solid white;
  overflow: hidden;
  margin-right: 5px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Breadcrumb = styled.p`
  color: var(--gog-gray);
  font-size: 0.95rem;
  margin-bottom: 15px;
`;

export const ProductDesc = styled.p`
  color: var(--gog-gray);
  font-size: 0.9rem;
`;

export const ProductTitle = styled.h1`
  margin-bottom: 10px;
  color: var(--gog-primary);
  font-size: 2.5rem;
`;

export const ColaborationName = styled.h2`
  font-size: 1.1rem;
  color: var(--gog-pastel-teal-darker);
  margin-bottom: 5px;
`;

export const LinkHover = styled.a`
  position: relative;
  display: inline-block;
  &:hover {
    cursor: pointer;
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
`;

export const Price = styled.p`
  font-size: 1.7rem;
  color: var(--gog-primary);
  font-weight: 800;
`;

export const Disc = styled.del`
  font-size: 1.7rem;
  color: #d3d3d3;
  font-weight: 600;
  display: inline-block;
`;
export const PercentageDisc = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: var(--gog-pastel-teal-darker);
  display: inline-block;
  margin-left: 10px;
`;

export const Stock = styled.p`
  display: inline-block;
  font-size: 12px;
  span {
    font-weight: 600;
  }
`;

export const OrderSection = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: start;
  flex: 1;
  width: 100%;
`;

export const QuantityOrder = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NotesContainer = styled.div`
  margin-top: 20px;
`;
export const DiscountSection = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageSection = styled.div`
  display: flex;
  position: relative;
  aspect-ratio: 4 / 3;
  width: 50%;
`;

export const TextSection = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  padding: 20px;
`;

export const TextSectionTwo = styled(TextSection)`
  text-align: start;
`;
