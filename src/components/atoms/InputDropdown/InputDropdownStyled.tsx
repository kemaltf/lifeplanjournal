import { Container } from "@/styles/SharedStyles";
import styled from "styled-components";

export const DropdownContainer = styled.div`
  margin: 0px 0px;
  position: relative;
`;
export const DropdownToggle = styled.div`
  color: #000000;
  background-color: #ffffff;
  font-size: 17px;
  padding: 10px 20px;
  border-bottom: 2px solid var(--gog-pastel-teal-darker);
  /* box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.5); */
  border-radius: 0px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  transition: all ease-in-out 0.3s;
  width: 100%;

  &:after {
    content: "";
    position: absolute;
    top: 40%;
    right: 10px;
    transform: translateY(-50%);
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    transition: transform 0.2s ease-in-out;
  }

  &.open:after {
    transform: translateY(-30%) rotate(225deg);
  }
`;
export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid var(--gog-pastel-teal-darker);
  opacity: 0;
  /* box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.5); */
  margin-top: 8px;
  z-index: 10;
  transform: translateY(-10px);
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;

  &.open {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const DropdownOption = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid var(--gog-pastel-teal-darker);
  &:hover {
    background-color: var(--gog-pastel-teal-darker);
    color: white;
  }
`;

export const LabelInput = styled.div`
  label {
    font-weight: 400;
    font-size: 15px;
    color: var(--gog-pastel-teal-darker);
  }
`;
