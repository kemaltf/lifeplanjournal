import React, { useRef, useState } from "react";
import { RadioContainer, RadioInput, RadioLabel } from "./RadioButtonStyled";

type Props = {
  label?: string;
  name: string;
  value: string;
};

const index = ({ id, value, name, checked, onChange, children, ...rest }) => {
  const radioRef = useRef(null);

  const handleClick = () => {
    radioRef.current.click();
  };

  return (
    <RadioContainer onMouseDown={handleClick} checked={checked} {...rest}>
      <RadioInput
        ref={radioRef}
        type="radio"
        id={id}
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <RadioLabel htmlFor={id}>{children}</RadioLabel>
    </RadioContainer>
  );
};

export default index;
