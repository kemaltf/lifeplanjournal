import styled from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
  height: 50px;
  overflow-y: visible;
  width: 100%;
  flex: 1;

  &:after {
    content: "";
    position: absolute;
    top: 40%;
    right: 10px;
    transform: translateY(-50%);
    border: solid var(--gog-gray);
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    transition: transform 0.2s ease-in-out;
  }
  &.open:after {
    transform: translateY(-0%) rotate(225deg);
  }
`;

export const SelectStyled = styled.select`
  padding: ${(props) =>
    props.value ? "20px 10px 10px 10px" : "20px 10px 10px 10px"};
  border: 1px solid var(--gog-gray);
  border-radius: 5px;
  font-size: 13px;
  width: 100%;
  appearance: none;
  min-height: 50px;
  &:focus {
    border-color: var(--gog-pastel-teal-darker);
    outline: 1px solid var(--gog-pastel-teal-darker);
  }
`;

export const Label = styled.label`
  position: absolute;
  top: ${(props) => (props.focused || props.value ? "15%" : "31%")};
  left: 10px;
  font-size: ${(props) => (props.focused || props.value ? "10px" : "13px")};
  color: ${(props) =>
    props.focused || props.value ? "(--gog-pastel-teal-darker)" : "#333"};
  transition: all 0.3s ease-out;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 40px;
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Option = styled.option`
  font-size: 13px;
`;
