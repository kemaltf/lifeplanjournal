import React from "react";
import { Container, ContainerCard, HeadCard, CartText, StatusContainer, StatusText, RecommendationCard, ImageSectionMini, RecommendationSectionText, InnerContainerCard, TotalPrice } from "./AddressListComponentStyled";
import { BsCheck2 } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
type Props = {};

const index = (props: Props) => {
  return (
    <Container>
      <ContainerCard>
        <HeadCard>
          <HiHome size={20}></HiHome>
          <CartText>Home</CartText>
          <StatusContainer>
            <StatusText>Main</StatusText>
          </StatusContainer>
        </HeadCard>
        <InnerContainerCard>
          <RecommendationCard>
            <RecommendationSectionText>
              <p>Kemal Taufik Fikri</p>
              <small>+62 8969276666</small>
              <small>Jalan Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, qui.</small>
            </RecommendationSectionText>
          </RecommendationCard>
          <TotalPrice>
            <BsCheck2 size={50} color="#36c43f" />
          </TotalPrice>
        </InnerContainerCard>
      </ContainerCard>
    </Container>
  );
};

export default index;
