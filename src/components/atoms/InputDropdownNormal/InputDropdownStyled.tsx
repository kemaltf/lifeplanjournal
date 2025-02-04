import { Container } from "@/styles/SharedStyles";
import styled from "styled-components";
interface LabelInputProps {
  margin: string;
}
export const DropdownContainer = styled.div`
  position: relative;
`;
export const DropdownToggle = styled.div`
  color: var(--gog-gray);
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: all ease-in-out 0.3s;
  width: 100%;
  border: 1px solid var(--gog-gray);
  font-size: 14px;
  &.focus {
    border: 1px solid var(--gog-pastel-teal-darker);
    outline: 1px solid var(--gog-pastel-teal-darker);
  }
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
  margin-top: 8px;
  z-index: 10;
  transform: translateY(-10px);
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  max-height: 200px;
  overflow-y: auto;

  &.open {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const DropdownOption = styled.div`
  cursor: pointer;
  margin-left: 0.5rem;
  padding: 0.3rem 0;
  font-size: 14px;
  border-bottom: 1px solid lightgray;
  &:hover {
    background-color: lightgray;
  }
`;

export const LabelInput = styled.div<LabelInputProps>`
  margin: ${(props) => (props.margin ? props.margin : 0)};
  label {
    font-weight: 400;
    font-size: 15px;
    color: var(--gog-pastel-teal-darker);
  }
`;
