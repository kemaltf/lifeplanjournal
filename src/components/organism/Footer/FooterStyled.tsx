import styled from "styled-components";
import { ContainerPad, Container, ContainerCol } from "@/styles/SharedStyles";
import Image from "next/image";

export const FooterContainer = styled(ContainerPad)`
  padding: 80px 80px 40px 80px;
  background-color: var(--gog-forth-color);
  border-style: solid;
  border-width: 1px 0px 0px 0px;
  border-color: #efeef4;
  font-size: 0.9rem;
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 40px 20px;
  }
  @media (max-width: 767px) {
    padding: 40px 20px;
  }
  a {
    color: var(--gog-primary);
  }
  a:hover {
    color: var(--gog-primary-dark-2);
  }
`;

export const FooterInnerContainer = styled(Container)`
  justify-content: space-between;
  width: 100%;
  /* flex-wrap: wrap; */
  /* word-wrap: break-word; */

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: start;
    gap: 20px;
    div {
      justify-content: start;
    }
  }
  ul {
    text-decoration: none;
    list-style-type: none;
  }
  & > div:nth-child(1) {
    flex-basis: 20%;
    justify-content: start;
    /* background-color: red; */
  }
  & > div:nth-child(2) {
    flex-basis: 25%;
    /* background-color: red; */
  }
  & > div:nth-child(3) {
    flex-basis: 15%;
    /* background-color: red; */
  }
  & > div:nth-child(4) {
    flex-basis: 40%;
    /* background-color: red; */
  }
`;

export const FooterContent = styled(Container)`
  width: 100%;
`;

export const SocialMediaIcon = styled.ul`
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  text-decoration: none;
  list-style-type: none;
  color: var(--gog-primary);
  height: fit-content; /* atau height: auto; */

  li:hover svg {
    color: var(--gog-primary-dark-2);
    transition: all 0.2s ease-in-out;
  }
`;
export const InputStyled = styled.input`
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  /* line-height: 1.4; */
  border: 1px solid #cccccc;
  border-radius: 4px 0 0 4px;

  &:focus {
    outline: 0;
    border-color: var(--gog-primary);
  }
`;
export const ButtonStyled = styled.button`
  border-radius: 0 4px 4px 0;
  color: white;
  background-color: var(--gog-primary);
  border-color: var(--gog-primary);
  border: 1px solid transparent;
  padding: 5px 12px;
  text-align: center;
  white-space: nowrap;
  font-size: 14px;
  height: 34px;

  &:hover {
    color: white;
    background-color: var(--gog-primary-dark-2);
    border-color: var(--gog-primary-dark-1);
    transition: all 0.2s ease-in-out;
  }
`;
export const ContainerColStyled = styled(ContainerCol)`
  justify-content: start;
  gap: 10px;
  width: 100%;
  flex-direction: column;
  form {
    display: flex;
    input {
      flex: 5;
    }
    button {
      flex: 1;
    }
  }
`;
export const Icon = styled(Image)`
  margin: 10px 0 0 0;
`;
export const FooterMark = styled(Container)`
  border-top: 1px solid var(--gog-primary);
  display: block;
  margin: 40px 0 0 0;
  padding: 20px 0 0 0;
  font-size: 0.7rem;
  text-align: center;
`;
