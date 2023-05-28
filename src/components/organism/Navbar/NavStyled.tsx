import styled from "styled-components";
import Link from "next/link";
export const Nav = styled.nav`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  z-index: 999;
  background-color: white;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-bottom-color: #eaeaea;
  flex-wrap: wrap;
  padding: 0 40px;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 20px;
  }

  @media (max-width: 767px) {
    padding: 0;
    position: relative;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

export const NavLinkContainer = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 767px) {
    position: absolute;
    top: 50px;
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
  padding: 0.9rem;
  color: #003f59;
  font-size: 0.9rem;
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
    font-size: 1.3rem;
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

export const LoginNav = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  background: none;
  position: relative;
  padding-bottom: 10px;
  margin-top: 10px;
  padding-right: 20px;

  &:after {
    content: "";
    position: absolute;
    top: 20%;
    right: 0;
    transform: translateY(-50%);
    border: solid var(--gog-primary);
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    transition: transform 0.2s ease-in-out;
  }

  &.open:after {
    transform: translateY(30%) rotate(225deg);
  }
`;
export const ImageDiv = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  overflow: hidden;
`;
export const HiName = styled.div``;
export const LinkMenu = styled.div`
  font-size: 0.9rem;
  color: #003f59;
`;
export const DropdownMenu = styled.ul`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: -100px;
  right: 0;
  padding: 0;
  margin: 0 0 0 0;
  /* width: 50px; */
  background-color: white;
  border-radius: 0px 0px 10px 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 8px 0px;
  list-style-type: none;
  text-align: start;
  font-size: 0.9rem;
  overflow: hidden;
`;

export const DropdownItem = styled.li`
  padding: 10px;

  &:hover {
    background-color: var(--gog-pastel-teal);
  }
`;
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2e3137;
  opacity: 0.7;
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;
  z-index: 100;
  will-change: opacity;
  transition: opacity 300ms cubic-bezier(0, 0, 0.3, 1) 0s;
`;
export const LinkDropDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  background: none;
  position: relative;
  padding: 0 0.9rem;
  padding-bottom: 14px;
  margin-top: 14px;
  padding-right: 20px;
  &:after {
    content: "";
    position: absolute;
    top: 10%;
    right: 0;
    transform: translateY(-50%);
    border: solid var(--gog-primary);
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    transition: transform 0.2s ease-in-out;
  }

  &.open:after {
    transform: translateY(30%) rotate(225deg);
  }

  &:hover {
    cursor: pointer;
  }
`;
export const PopUpMenu = styled.div`
  z-index: 9999;
  position: fixed;
  /* width: 100%; */
  height: 100%;
  left: 50%;
  right: 50%;
  top: 0;
  /* bottom: 50%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: white; */
`;
export const CloseButton = styled.div`
  position: absolute;
  right: 30px;
  cursor: pointer;
  top: 25px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  &:hover {
    background-color: #f1f3f7;
  }
`;
export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-height: 75%;
  position: relative;
  background-color: white;
  box-shadow: 0 1px 4px rgba(141, 150, 170, 0.4);
  border: 1px solid #d6dfeb;
  border-radius: 5px;
  padding-top: 90px;
  padding-right: 20px;
  padding-left: 20px;
`;
export const OuterPopUp = styled.div``;
