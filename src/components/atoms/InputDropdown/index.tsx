import React, { useState, useEffect } from "react";
import { DropdownContainer, DropdownToggle, DropdownMenu, DropdownOption, LabelInput } from "./InputDropdownStyled";
type Props = {
  label: string;
  options: string[];
  value: string;
  onChange: (option: string) => void;
};
const index = ({ label, options, value, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [listenerAdded, setListenerAdded] = useState(false);
  const handleOptionClick = (option: string) => {
    setIsOpen(false);
    onChange(option);
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
    <>
      <LabelInput onClick={() => setIsOpen(!isOpen)}>
        <label>{label}</label>
      </LabelInput>
      <DropdownContainer>
        <DropdownToggle className={isOpen ? "open" : ""} onClick={() => setIsOpen(!isOpen)}>
          {" "}
          {value}
        </DropdownToggle>
        {isOpen && (
          <DropdownMenu>
            {options.map((option) => (
              <DropdownOption key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </DropdownOption>
            ))}
          </DropdownMenu>
        )}
      </DropdownContainer>
    </>
  );
};
export default index;
