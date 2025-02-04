import styled from "styled-components";
interface ButtonStandard {
  padding?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  border?: string;
  borderRad?: string;
  borderColor?: string;
  backgroundColorHover?: string;
  borderColorHover?: string;
  colorHover?: string;
  margin?: string;
}

export const ButtonStandard = styled.button<ButtonStandard>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: ${(props) => (props.height ? props.height : "34px")};
  padding: ${(props) => (props.padding ? props.padding : "20px 12px")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : "white")};
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "var(--gog-primary)")};
  border: ${(props) => (props.border ? props.border : "1px solid transparent")};
  border-radius: ${(props) => (props.borderRad ? props.borderRad : "4px")};
  border-color: ${(props) => (props.borderColor ? props.borderColor : "var(--gog-primary)")};
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: ${(props) => (props.colorHover ? props.colorHover : "white")};
    background-color: ${(props) => (props.backgroundColorHover ? props.backgroundColorHover : "var(--gog-primary-dark-2)")};
    border-color: ${(props) => (props.borderColorHover ? props.borderColorHover : "var(--gog-primary-dark-1)")};
    transition: all 0.2s ease-in-out;
  }
`;

export const ButtonNoBox = styled.button`
  border: none;
  background: none;
  color: var(--gog-pastel-teal-darker);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-weight: 500;
  &:hover {
    color: var(--gog-primary);
  }
`;
