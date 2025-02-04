import { Container, ContainerPad } from "@/styles/SharedStyles";
import styled from "styled-components";

export const ProductCardsContainer = styled(ContainerPad)`
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 40px 0;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 20px;
  }

  @media (max-width: 767px) {
    padding: 0;
  }
`;
