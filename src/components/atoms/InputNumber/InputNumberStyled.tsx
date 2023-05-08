import styled from "styled-components";

export const Container = styled.div`
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  border: 1px solid var(--gog-gray);
  padding: 3px;
  &.focus {
    border: 1px solid var(--gog-pastel-teal-darker);
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
  margin: 0 3px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px;
  outline: 0;
  box-shadow: 0px;
  width: 24px;
  height: 24px;
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

  &:hover {
    background-color: var(--gog-gray);
  }
`;
