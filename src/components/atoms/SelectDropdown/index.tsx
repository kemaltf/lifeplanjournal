import React, { useState } from "react";
import { SelectContainer, Label, SelectStyled, Option, OptionsContainer } from "./SelectDropdownStyled";
type Props = {
  label: string;
  options: Array<{ value: string; label: string }>;
};
const Select = ({ label, options }: Props) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <SelectContainer>
      <Label htmlFor="select" focused={focused} value={value}>
        {label}
      </Label>
      <SelectStyled id="select" value={value} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {!focused && value == "" ? "" : option.label}
          </Option>
        ))}
      </SelectStyled>
    </SelectContainer>
  );
};

export default Select;
