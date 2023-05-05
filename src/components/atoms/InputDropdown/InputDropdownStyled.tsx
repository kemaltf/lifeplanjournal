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
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--gog-pastel-teal-darker);

  /* box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.5); */
  margin-top: 8px;
  position: absolute;
  left: 0;
  top: 100%;
  background-color: #ffffff;
  z-index: 10;
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
