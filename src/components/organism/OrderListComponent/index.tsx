import React from "react";
import { Container, ContainerCard, HeadCard, CartText, Date, StatusContainer, StatusText, InvoiceText, RecommendationCard, ImageSectionMini, RecommendationSectionText, InnerContainerCard, TotalPrice } from "./OrderListComponentStyled";
type Props = {};
import { HiShoppingBag } from "react-icons/hi2";
import Image from "next/image";
const index = (props: Props) => {
  return (
    <Container>
      <ContainerCard>
        <HeadCard>
          <HiShoppingBag></HiShoppingBag>
          <CartText>Shopping</CartText>
          <Date>6 Mei 2023</Date>
          <StatusContainer>
            <StatusText>Done</StatusText>
          </StatusContainer>
          <InvoiceText>OSAJFGPOAMQPMQOP</InvoiceText>
        </HeadCard>
        <InnerContainerCard>
          <RecommendationCard>
            <ImageSectionMini>
              <Image src={"/images/example_product_front.webp"} fill style={{ objectFit: "cover" }} alt="tes"></Image>
            </ImageSectionMini>
            <RecommendationSectionText>
              <p>Lorem ipsum dolor sit amet.</p>
              <small>
                <del>Rp 20.000</del>1 x Rp 10.000
              </small>
            </RecommendationSectionText>
          </RecommendationCard>
          <TotalPrice>
            <small>Total Price</small>
            <p>Rp 200.000</p>
          </TotalPrice>
        </InnerContainerCard>
      </ContainerCard>
    </Container>
  );
};

export default index;
