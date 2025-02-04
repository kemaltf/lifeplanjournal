import React, { useState, useEffect } from "react";
import { Container, Input, Button } from "./InputNumberStyled";
type props = {
  initialValue: number;
  min: number;
  max: number;
  step: number;
};
const index = ({ initialValue, min, max, step = 1 }: props) => {
  const [value, setValue] = useState(initialValue);
  const [isFocus, setIsFocus] = useState(false);
  const handleIncrease = () => {
    if (value + step <= max) {
      setValue((prevValue) => prevValue + step);
    }
  };

  const handleDecrease = () => {
    if (value - step >= min) {
      setValue((prevValue) => prevValue - step);
    }
  };

  const handleFocus = () => {
    setIsFocus(true);
  };
  let count = 0;
  const handleClickOutside = (e) => {
    count += 1;
    if (count > 1) {
      setIsFocus(false);
      document.body.removeEventListener("click", handleClickOutside);
    }
  };

  useEffect(() => {
    if (isFocus) {
      document.body.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isFocus]);
  return (
    <Container className={isFocus ? "focus" : ""}>
      <Button
        className={`${value <= min ? "qty disabled" : ""} $`}
        onClick={handleDecrease}
      >
        -
      </Button>{" "}
      <Input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onClick={handleFocus}
      />
      <Button
        className={value >= max ? "qty disabled" : ""}
        onClick={handleIncrease}
      >
        +
      </Button>
    </Container>
  );
};

export default index;
