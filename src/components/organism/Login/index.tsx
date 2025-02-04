import { ContainerPad } from "@/styles/SharedStyles";
import InputText from "@/components/atoms/InputText";
import { ButtonStandard } from "@/components/atoms/Button/ButtonStyled";
import { Container, LoginContainer, LoginTitle, ForgotPass, LoginWithGoogleText, BorderSpan, TextSpan, ForgotPassLink, SignUpLink } from "./LoginStyled";
import { FcGoogle } from "react-icons/fc";
import React, { useState, useEffect, useRef } from "react";

interface Props {
  border: string;
  boxShadow: string;
}

const index = ({ border, boxShadow }: Props) => {
  const [section, setSection] = useState(1);
  const handleSectionPlus = () => {
    const sectionPlusOne = section + 1;
    setSection(sectionPlusOne);
  };
  const handleSectionMinus = () => {
    const sectionMinusOne = section - 1;
    setSection(sectionMinusOne);
  };
  return (
    <Container>
      <LoginContainer border={border} boxShadow={boxShadow}>
        <LoginTitle style={{ marginBottom: "50px" }}>
          <h1>Login</h1>
          <SignUpLink href={"/register"}>Sign Up</SignUpLink>
        </LoginTitle>
        {section === 1 && (
          <>
            <InputText id="email" label="Email Address*"></InputText>
            <ForgotPass>
              <ForgotPassLink href={"/"}>Forgot Password?</ForgotPassLink>
            </ForgotPass>
            <ButtonStandard style={{ margin: "10px 0" }} onClick={handleSectionPlus}>
              Next
            </ButtonStandard>
          </>
        )}
        {section === 2 && (
          <>
            <InputText id="password" type="password" label="Password"></InputText>
            <ForgotPass>
              <ForgotPassLink href={"/"}>Forgot Password?</ForgotPassLink>
            </ForgotPass>
            <ButtonStandard style={{ margin: "10px 0" }} onClick={handleSectionPlus}>
              Login
            </ButtonStandard>
          </>
        )}
        <LoginWithGoogleText>
          <BorderSpan></BorderSpan>
          <TextSpan>or login with</TextSpan>
          <BorderSpan></BorderSpan>
        </LoginWithGoogleText>
        <ButtonStandard>
          <FcGoogle style={{ marginRight: "10px" }}></FcGoogle>Google
        </ButtonStandard>
      </LoginContainer>
    </Container>
  );
};

export default index;
