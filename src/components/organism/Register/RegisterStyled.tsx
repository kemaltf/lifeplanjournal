import Link from "next/link";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const LoginContainer = styled.div`
  width: 368px;
  border: 1px solid #d6dfeb;
  box-shadow: 0 1px 4px rgba(141, 150, 170, 0.4);
  padding: 32px;
  border-radius: 8px;
  margin-top: -50px;
`;
export const SignInSection = styled.div`
  display: flex;
  font-size: 14px;
  gap: 5px;
`;
export const LoginTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
export const ForgotPass = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
export const LoginWithGoogleText = styled.div`
  display: flex;
  align-items: center;
  justify-items: space-between;
  gap: 10px;
  padding: 15px 0;
`;

export const TextSpan = styled.span`
  font-size: 10px;
  flex: 1;
  text-align: center;
`;
export const BorderSpan = styled.span`
  display: inline-block;
  border: 0.5px solid rgba(0, 0, 0, 0.12);
  width: 50%;
  flex: 1.3;
`;

export const ForgotPassLink = styled(Link)`
  margin-top: 5px;
  font-size: 11px;
`;

export const SignIn = styled(Link)`
  font-size: 14px;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: center;
`;
export const LoginSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
