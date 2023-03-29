import styled from "styled-components";
import Link from "next/link";
export const Nav = styled.nav`
  height: 70px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  /* box-shadow: 0px 0px 0px 1px #eaeaea; */
  border-style: solid;
  border-width: 0 0 1px 0;
  border-bottom-color: #eaeaea;
  flex-wrap: wrap;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

export const NavLinkContainer = styled.div`
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    align-items: left;
    background-color: #fff;
    margin: 0;
    transition: all 0.5s ease-out;
    max-height: 75vh;
    &.close {
      max-height: 0px;
    }
  }
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

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  width: 25px;
  height: 15px;
  /* background-color: black; */
  position: relative;
  cursor: pointer;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: #003f59;
    margin-bottom: 4px;
    border-radius: 5px;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2),
  span:nth-child(3) {
    top: 7px;
  }

  span:nth-child(4) {
    top: 14px;
  }

  &.open span:nth-child(1) {
    top: 7px;
    width: 0%;
    left: 50%;
  }

  &.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.open span:nth-child(4) {
    top: 7px;
    width: 0%;
    left: 50%;
  }

  @media (max-width: 768px) {
    margin-right: 2rem;
    display: flex;
  }
`;
