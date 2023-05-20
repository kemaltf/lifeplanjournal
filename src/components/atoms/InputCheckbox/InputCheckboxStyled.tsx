import styled from "styled-components";

export const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;
export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;
export const CheckboxIcon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #ccc;
  border-radius: 3px;
  margin-right: 8px;
  background-color: ${(props) => (props.checked ? "#3f51b5" : "transparent")};
`;
export const CheckboxLabel = styled.span`
  font-size: 14px;
  color: ${(props) => (props.checked ? "#3f51b5" : "#000")};
`;
