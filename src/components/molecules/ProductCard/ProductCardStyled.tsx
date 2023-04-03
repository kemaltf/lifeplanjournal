import { Container, ContainerPad } from "@/styles/SharedStyles";
import Image from "next/image";
import styled from "styled-components";

export const ProductCard = styled(ContainerPad)`
  width: calc(100% / 3);
  padding: 10px 10px;
  /* height: 400px; */
  /* background-color: blue; */
  align-text: center;
  flex-direction: column;
`;

export const ImageProductContainer = styled(Container)``;

export const ImageSize = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`;

export const StatusLabel = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--gog-pastel-teal);
  font-size: 0.7rem;
  padding: 5px;
`;

export const CollaborationName = styled.p`
  color: var(--gog-pastel-teal-darker);
  margin: 10px 0 5px 0;
  font-size: 12px;
`;

export const ProductName = styled.a`
  color: var(--gog-primary);
  text-align: center;
  cursor: pointer;
  &:hover {
    color: var(--gog-primary-dark-1);
  }
`;

export const Price = styled.p``;
export const DiscountPrice = styled.p`
  color: #879898;
  font-size: 0.9rem;
  span {
    text-decoration: line-through;
  }
`;

export const NameProductContainer = styled(Container)`
  flex-direction: column;
  align-text: center;
  justify-content: center;
  align-items: center;
`;
