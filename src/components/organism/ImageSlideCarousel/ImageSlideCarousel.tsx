import { Container } from "@/styles/SharedStyles";
import styled from "styled-components";

export const ContainerPadStyled = styled.div`
  padding: 70px 87px;
  background: yellow;
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

export const ContainerImage = styled(Container)`
  overflow: hidden;
  background-color: red;
  max-width: 100%;
  flex-direction: column;
`;
export const ContainerBigImage = styled(Container)`
  overflow: hidden;
  background-color: red;
  aspect-ratio: 1 / 1;
  max-width: 100%;
`;

export const ContainerDesc = styled.div`
  /* flex-direction: column;
  flex: 1; */
  background-color: blue;
  @media (max-width: 767px) {
    padding: 20px 15px;
  }
`;
