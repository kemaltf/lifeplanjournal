import React, { useState } from "react";
import styled from "styled-components";
import {
  CheckboxContainer,
  CheckboxInput,
  CheckboxIcon,
  CheckboxLabel,
} from "./InputCheckboxStyled";
type Props = {};

const index = ({ label, checked, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleCheckboxChange = (e) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <CheckboxIcon checked={isChecked}></CheckboxIcon>
      <CheckboxLabel checked={isChecked}>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default index;
