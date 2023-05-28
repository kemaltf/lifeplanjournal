import React from "react";
import { ContainerPadCol } from "@/styles/SharedStyles";
import {
  ProductCartContainer,
  ImageSection,
  TextSection,
  Money,
  Button,
  ButtonSection,
  ProductSection,
  CheckoutContainer,
  Recommendation,
  RecommendationCards,
  RecommendationCard,
  ImageSectionMini,
  RecommendationSectionText,
  AddToCart,
  TotalContainer,
  Total,
  TotalDisc,
  Promo,
  YouMayAlsoLike,
} from "./ProductCartStyled";
import { ButtonStandard } from "@/components/atoms/Button/ButtonStyled";

import Image from "next/image";
import InputNumber from "@/components/atoms/InputNumber";
import { HiTrash } from "react-icons/hi";
import { TfiPlus } from "react-icons/tfi";
import { RiCoupon3Fill } from "react-icons/ri";

type Props = {};

const index = (props: Props) => {
  return (
    <ContainerPadCol style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Your Shopping Bag</h1>
      <div style={{ textAlign: "start", paddingTop: "60px" }}>
        <h4 style={{ width: "100%", borderBottom: "1px solid lightgray", paddingBottom: "20px" }}>Your items</h4>
        <ProductCartContainer>
          <ProductSection>
            <ImageSection>
              <Image src={"/images/example_product_front.webp"} fill style={{ objectFit: "cover" }} alt="tes"></Image>
            </ImageSection>
            <TextSection>
              <h4>Planner 2024</h4>
              <small>Monthly Planner + Weekly Horizontal / 1st January 202331st December 2023</small>
              <p>Cover: Personalised Name on Cover</p>
              <p>Name Personalisation: Joni bauman</p>
              <p>Select Font: Brush Script</p>
            </TextSection>
            <Money>
              <p>Rp 100.000.000</p>
            </Money>
          </ProductSection>
          <ButtonSection>
            <Button>
              <a>
                <HiTrash size="30px"></HiTrash>
              </a>
              <InputNumber initialValue={1} min={1} max={10} step={1}></InputNumber>{" "}
            </Button>
          </ButtonSection>
        </ProductCartContainer>
        <ProductCartContainer>
          <ProductSection>
            <ImageSection>
              <Image src={"/images/example_product_front.webp"} fill style={{ objectFit: "cover" }} alt="tes"></Image>
            </ImageSection>
            <TextSection>
              <h4>Planner 2024</h4>
              <small>Monthly Planner + Weekly Horizontal / 1st January 202331st December 2023</small>
              <p>Cover: Personalised Name on Cover</p>
              <p>Name Personalisation: Joni bauman</p>
              <p>Select Font: Brush Script</p>
            </TextSection>
            <Money>
              <p>Rp 100.000.000</p>
            </Money>
          </ProductSection>
          <ButtonSection>
            <Button>
              <a>
                <HiTrash size="30px"></HiTrash>
              </a>
              <InputNumber initialValue={1} min={1} max={10} step={1}></InputNumber>{" "}
            </Button>
          </ButtonSection>
        </ProductCartContainer>
        <CheckoutContainer>
          <Recommendation>
            <YouMayAlsoLike>You may also like</YouMayAlsoLike>
            <RecommendationCards>
              <RecommendationCard>
                <ImageSectionMini>
                  <Image src={"/images/example_product_front.webp"} fill style={{ objectFit: "cover" }} alt="tes"></Image>
                </ImageSectionMini>
                <RecommendationSectionText>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <small>
                    <del>Rp 20.000</del>Rp 10.000
                  </small>
                </RecommendationSectionText>
                <AddToCart>
                  <TfiPlus></TfiPlus>
                </AddToCart>
              </RecommendationCard>

              <RecommendationCard>
                <ImageSectionMini>
                  <Image src={"/images/example_product_front.webp"} fill style={{ objectFit: "cover" }} alt="tes"></Image>
                </ImageSectionMini>
                <RecommendationSectionText>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <small>
                    <del>Rp 20.000</del>Rp 10.000
                  </small>
                </RecommendationSectionText>
                <AddToCart>
                  <TfiPlus></TfiPlus>
                </AddToCart>
              </RecommendationCard>

              <RecommendationCard>
                <ImageSectionMini>
                  <Image src={"/images/example_product_front.webp"} fill style={{ objectFit: "cover" }} alt="tes"></Image>
                </ImageSectionMini>
                <RecommendationSectionText>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <small>
                    <del>Rp 20.000</del>Rp 10.000
                  </small>
                </RecommendationSectionText>
                <AddToCart>
                  <TfiPlus></TfiPlus>
                </AddToCart>
              </RecommendationCard>
            </RecommendationCards>
            <p></p>
          </Recommendation>
          <TotalContainer>
            <Promo>
              <ButtonStandard backgroundColor="white" color="var(--gog-primary)" borderColor="var(--gog-gray)">
                <RiCoupon3Fill style={{ marginRight: "5px" }}></RiCoupon3Fill>Makin Hemat Pakai Promo
              </ButtonStandard>
            </Promo>
            <h4 style={{ marginBottom: "10px" }}>Ringkasan Belanja</h4>
            <Total>
              <span>Sub-total</span>
              <span>Rp 100.000.000</span>
            </Total>
            <TotalDisc>
              <span>Total diskon</span>
              <span>-Rp 50.000</span>
            </TotalDisc>
            <ButtonStandard>Checkout</ButtonStandard>
          </TotalContainer>
        </CheckoutContainer>
      </div>
    </ContainerPadCol>
  );
};

export default index;
