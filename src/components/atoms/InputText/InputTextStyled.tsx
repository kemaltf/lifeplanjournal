import styled from "styled-components";
export const InputWrapper = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
`;
export const InputStyled = styled.input`
  width: 100%;
  padding: ${(props) => (props.hasValue ? "20px 10px 10px 10px" : "15px 10px")};
  border-radius: 5px;
  border: 1px solid var(--gog-gray);
  &:focus {
    border-color: var(--gog-pastel-teal-darker);
    outline: 1px solid var(--gog-pastel-teal-darker);
  }
  ${(props) =>
    props.hasValue
      ? ""
      : `&:-webkit-autofill + label {
    display: none;
  }`}
`;
export const LabelStyled = styled.label`
  font-size: ${(props) => (props.hasValue ? "10px" : "13px")};
  position: absolute;
  top: ${(props) => (props.hasValue ? "0" : "31%")};
  left: 10px;
  transform: ${(props) => (props.hasValue ? "translateY(55%)" : "none")};
  color: ${(props) =>
    props.hasValue ? "var(--gog-pastel-teal-darker)" : "#333"};
  transition: all 0.3s ease-out;
`;
