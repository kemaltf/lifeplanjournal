import styled from "styled-components";
import Link from "next/link";

export const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
  box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.15);
`;

export const LogoContainer = styled.div`
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
`;

export const NavLinkContainer = styled.div`
  margin: 1rem;
`;

export const NavLinkStyled = styled(Link)`
  padding: 1rem;
  color: #003f59;

  &:hover {
    color: #000608;
  }

  &.active {
    color: #000608;
  }
`;

export const SiteTitle = styled.div`
  margin-left: 0.8rem;
  h1 {
    font-weight: 500;
  }
`;
