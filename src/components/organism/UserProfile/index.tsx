import React from "react";
import { Container, ImageSection, BioSection, ImageContainer, Label, LabelValue, LabelContainer } from "./UserProfileStyled";
import Image from "next/image";
import { ButtonStandard } from "@/components/atoms/Button/ButtonStyled";
import LinkButton from "@/components/atoms/LinkButton";
type Props = {};

const index = (props: Props) => {
  return (
    <Container>
      <ImageSection>
        <ImageContainer>
          <Image src={"/images/sample-images-3.webp"} fill style={{ objectFit: "cover" }}></Image>
        </ImageContainer>
        <ButtonStandard>Choose Photo</ButtonStandard>
      </ImageSection>
      <BioSection>
        <h4>Change Bio</h4>
        <LabelContainer>
          <Label>Name</Label>
          <LabelValue>Kemal Taufik Fikri</LabelValue>
          <LabelValue>
            <LinkButton href={"/"}>Change</LinkButton>
          </LabelValue>
        </LabelContainer>
        <LabelContainer>
          <Label>Date of birth</Label>
          <LabelValue>26 April 2021</LabelValue>
          <LabelValue>
            <LinkButton href={"/"}>Change</LinkButton>
          </LabelValue>
        </LabelContainer>
        <LabelContainer>
          <Label>Gender</Label>
          <LabelValue>Male</LabelValue>
          <LabelValue>
            <LinkButton href={"/"}>Change</LinkButton>
          </LabelValue>
        </LabelContainer>
        <h4 style={{ marginTop: "30px" }}>Change Contact</h4>

        <LabelContainer>
          <Label>Email</Label>
          <LabelValue>Male</LabelValue>
          <LabelValue>
            <LinkButton href={"/"}>Change</LinkButton>
          </LabelValue>
        </LabelContainer>
        <LabelContainer>
          <Label>Phone Number</Label>
          <LabelValue>+62 8969278222</LabelValue>
          <LabelValue>
            <LinkButton href={"/"}>Change</LinkButton>
          </LabelValue>
        </LabelContainer>
      </BioSection>
    </Container>
  );
};

export default index;
