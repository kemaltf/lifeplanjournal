import styled from "styled-components";
import { Container } from "@/styles/SharedStyles";
import Image from "next/image";

export const ImageCarousel = styled.div<ImageCarouselProps>`
  display: flex;
  flex: 0 0 calc(100% / 1); //satu layar ada 3 nanti ubah angka 3 nya ya

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 75vh;
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 60vh;
  }
  @media (max-width: 767px) {
    height: 50vh;
  }
`;
