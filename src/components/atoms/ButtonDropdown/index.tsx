import React, { useState, useEffect } from "react";
import { DropdownContainer, DropdownToggle, DropdownMenu, DropdownOption, LabelInput } from "./ButtonDropdownStyled";
import { ButtonNoBox } from "../Button/ButtonStyled";
type Props = {
  options: string[];
};
const index = ({ options }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setIsOpen(false);
  };

  let count = 0;
  const handleClickOutside = (e) => {
    count += 1;
    if (count > 1) {
      setIsOpen(false);
      document.body.removeEventListener("click", handleClickOutside);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <DropdownContainer>
      <ButtonNoBox onClick={() => setIsOpen(!isOpen)}>Choose</ButtonNoBox>

      <DropdownMenu className={isOpen ? "open" : "hidden"}>
        {options.map((option) => (
          <DropdownOption key={option} onClick={() => handleOptionClick(option)}>
            <p>{option}</p>
            <p>{option}</p>
          </DropdownOption>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};
export default index;
