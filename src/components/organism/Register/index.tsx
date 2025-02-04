import { ContainerPad } from "@/styles/SharedStyles";
import InputText from "@/components/atoms/InputText";
import { ButtonNormal } from "@/components/atoms/Button/ButtonStyled";
import { Container, LoginContainer, LoginTitle, ForgotPass, LoginWithGoogleText, BorderSpan, TextSpan, ForgotPassLink, SignInSection, SignIn, ImageContainer, LoginSection } from "./RegisterStyled";
import { FcGoogle } from "react-icons/fc";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Props = {};

const index = (props: Props) => {
  return (
    <Container>
      <ImageContainer>
        <Image alt="register" src={"/images/sign-up.avif"} width={500} height={500}></Image>
      </ImageContainer>
      <LoginSection>
        <LoginContainer>
          <LoginTitle style={{ marginBottom: "30px" }}>
            <h1>Register Now!</h1>
            <SignInSection>
              <p>Already have an account?</p>
              <SignIn href={"/login"}>Sign In</SignIn>
            </SignInSection>
          </LoginTitle>
          <ButtonNormal style={{ marginBottom: "10px" }}>
            <FcGoogle style={{ marginRight: "10px" }}></FcGoogle>Google
          </ButtonNormal>
          <LoginWithGoogleText>
            <BorderSpan></BorderSpan>
            <TextSpan>or register with</TextSpan>
            <BorderSpan></BorderSpan>
          </LoginWithGoogleText>

          <InputText id="email" label="Email Address*"></InputText>

          <ButtonNormal style={{ margin: "15px 0" }}>Next</ButtonNormal>
        </LoginContainer>
      </LoginSection>
    </Container>
  );
};

export default index;
