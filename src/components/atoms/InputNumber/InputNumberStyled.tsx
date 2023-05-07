import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--gog-gray);
  display: inline-block;
  &.focus {
    border: 2px solid var(--gog-pastel-teal-darker);
  }
`;
export const Input = styled.input`
  width: 20px;
  display: inline-block;
  color: #080606;
  font-size: 1rem;
  z-index: 1;
  text-align: center;
  border: 0;
  &:focus {
    outline: 0;
    box-shadow: 0px;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const Button = styled.div`
  display: inline-block;
  height: 30px;
  padding: 0;
  margin: 0;
  border: 0px;
  text-align: center;
  line-height: 30px;
  outline: 0;
  box-shadow: 0px;
  width: 40px;
  font-size: 18px;
  cursor: pointer;
  user-select: none;
  transition: all 250ms ease;
  color: var(--gog-primary);
  font-weight: 500;
  &.disabled {
    cursor: default;
    color: var(--gog-gray);
  }

  &.qty {
    cursor: default;
  }
`;
