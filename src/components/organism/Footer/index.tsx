import { ContainerCol } from "@/styles/SharedStyles";
import React from "react";
import { FooterContainer, FooterContent, FooterInnerContainer, SocialMediaIcon, InputStyled, ContainerColStyled, Icon, FooterMark } from "./FooterStyled";
import Link from "next/link";

import ImportantLinks from "./ImportantLinks";
import ContactUs from "./ContactUs";
import Payment from "./Payment";
import Subscribe from "./Subscribe";

type Props = {};

const index = (props: Props) => {
  return (
    <FooterContainer>
      <ContainerCol>
        <FooterInnerContainer>
          <ImportantLinks></ImportantLinks>
          <ContactUs></ContactUs>
          <Payment></Payment>
          <Subscribe></Subscribe>
        </FooterInnerContainer>
        <FooterMark>
          <p>Terms and Privacy Policy</p>
          <p>©2023 All Rights Reserved Life Plan Journal</p>
          <p>Made with Love in Indonesia.</p>
        </FooterMark>
      </ContainerCol>
    </FooterContainer>
  );
};

export default index;
