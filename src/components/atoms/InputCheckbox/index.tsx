import React from "react";
import { CheckboxContainer, CheckboxInput, CheckboxIcon, CheckboxLabel } from "./InputCheckboxStyled";
type Props = {};

const index = ({ id, name, label, checked, onChange }: Props) => {
  return (
    <CheckboxContainer>
      <CheckboxInput type="checkbox" id={id} name={name} checked={checked} onChange={onChange} />
      <CheckboxIcon checked={checked}></CheckboxIcon>
      <CheckboxLabel for={id} checked={checked}>
        {label}
      </CheckboxLabel>
    </CheckboxContainer>
  );
};

export default index;
