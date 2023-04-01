import styled from "styled-components";
import { Container } from "@/styles/SharedStyles";
interface ImageCollectionProps {
  image: string;
}
interface CollectionCardProps {
  itemsNumber: number;
}
export const ContainerColumn = styled(Container)`
  padding: 20px 0 0 0;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* background-color: red; */
`;
export const ContainerCard = styled(Container)`
  justify-content: space-between;
  padding: 5px 2vh;
  /* background-color: blue; */
  max-width: 90%;
  width: 100%;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 100%;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    flex-direction: column;
    gap: 10px;
  }
`;

export const CollectionCard = styled.div<CollectionCardProps>`
  --items-number: ${(props) => props.itemsNumber};
  overflow: hidden;
  min-height: 40vh;
  min-width: calc(100% / var(--items-number));
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
`;

export const CollectionCardGap = styled(Container)`
  padding: 0 5px;
  width: 100%;
`;

export const ImageCollection = styled.div<ImageCollectionProps>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  transition: transform 0.4s ease-in-out;
  min-height: 40vh;
  min-width: calc(100% / 3);
  &:hover {
    transform: scale(1.3);
  }
`;

export const CollectionCardText = styled.div`
  position: absolute;
  top: 3vh;
  right: 0px;
  left: 0px;
  text-align: center;

  h2,
  h4 {
    color: #003f59;
  }
`;
