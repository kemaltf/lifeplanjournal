import React, { useState } from "react";
import { InputStyled, InputWrapper, LabelStyled } from "./InputTextStyled";
type Props = {};

const index = (props: Props) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const hasValue = value.length > 0;

  return (
    <InputWrapper>
      <InputStyled value={value} hasValue={hasValue} onChange={handleChange} {...props} />
      <LabelStyled htmlFor={props.id} hasValue={hasValue}>
        {props.label}
      </LabelStyled>
    </InputWrapper>
  );
};

export default index;
