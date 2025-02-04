import Link from "next/link";
import styled from "styled-components";

export const NavLinkContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #bfc9d9;
  position: relative;
`;
export const NavLinkButtonContainer = styled.div`
  padding: 0 20px;
`;

export const BorderBottom = styled.div`
  min-width: 16px;
  width: ${(props) => props.width}px;
  height: 2px;
  border-radius: 1px;
  background-color: #00aa5b;
  position: absolute;
  bottom: 0px;
  left: ${(props) => props.position}px;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.63, 0.01, 0.29, 1);
`;
