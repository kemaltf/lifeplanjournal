import styled from "styled-components";
interface ButtonInputNoSpace {
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  backgroundColorHover?: string;
  borderColorHover?: string;
}
export const ButtonStandard = styled.button`
  text-align: center;
  white-space: nowrap;
  font-size: 14px;
  height: 34px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const ButtonInputNoSpace = styled(ButtonStandard)<ButtonInputNoSpace>`
  border-radius: 0 4px 4px 0;
  border: 1px solid transparent;
  padding: 20px 12px;
  color: ${(props) => (props.color ? props.color : "white")};
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "var(--gog-primary)")};
  border-color: ${(props) => (props.borderColor ? props.borderColor : "var(--gog-primary)")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1rem;
  &:hover {
    background-color: ${(props) => (props.backgroundColorHover ? props.backgroundColorHover : "var(--gog-primary-dark-2)")};
    border-color: ${(props) => (props.borderColorHover ? props.borderColorHover : "var(--gog-primary-dark-1)")};
    transition: all 0.2s ease-in-out;
  }
`;

export const ButtonNormal = styled(ButtonInputNoSpace)`
  border-radius: 4px;
  width: 100%;
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
