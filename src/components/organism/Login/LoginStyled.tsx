import Link from "next/link";
import styled from "styled-components";
interface LoginContainerProps {
  border: string;
  boxShadow: string;
}
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const LoginContainer = styled.div<LoginContainerProps>`
  width: 368px;
  border: ${(props) => (props.border ? props.border : "1px solid #d6dfeb")};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : " 0 1px 4px rgba(141, 150, 170, 0.4)")};
  padding: 32px;
  border-radius: 8px;
  margin-top: -50px;
`;
export const LoginTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  flex: 1.5;
`;

export const ForgotPassLink = styled(Link)`
  margin-top: 5px;
  font-size: 11px;
`;
export const SignUpLink = styled.a`
  margin-top: 5px;
  font-size: 14px;
`;
