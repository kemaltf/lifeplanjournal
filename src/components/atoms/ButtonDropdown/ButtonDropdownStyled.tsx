import { Container } from "@/styles/SharedStyles";
import styled from "styled-components";
interface LabelInputProps {
  margin: string;
}
export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: end;
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
  max-height: 200px;
  overflow-y: auto;

  &.open {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const DropdownOption = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1rem;
  /* border: 1px solid var(--gog-pastel-teal-darker); */
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
