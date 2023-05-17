import React, { useState, useEffect } from "react";
import { InputParagraph, TextLength } from "./InputParagraphStyled";
import { ContainerCol } from "@/styles/SharedStyles";
type props = {
  maxChar: number;
  height: number;
  [key: string]: any;
};

const index = ({ maxChar, height, ...rest }: props) => {
  const [text, setText] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const handleInput = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxChar) {
      setText(inputText);
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
    <ContainerCol>
      <InputParagraph className={isFocus ? "focus" : ""} placeholder="Example: Please write a letter for my friend" value={text} onChange={handleInput} height={height} onClick={handleFocus} {...rest} />
      <TextLength>
        {text.length}/{maxChar} characters
      </TextLength>
    </ContainerCol>
  );
};

export default index;
