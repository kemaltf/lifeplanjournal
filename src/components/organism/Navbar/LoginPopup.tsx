import React, { useEffect } from "react";
import LoginComponent from "@/components/organism/Login";
import { IoClose } from "react-icons/io5";
import { Overlay, PopUpMenu, Section2, CloseButton } from "./NavStyled";
type Props = {};

const LoginPopup = ({ setIsPopup }: Props) => {
  const close = () => {
    setIsPopup(false);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) {
        close();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <Overlay onClick={close}></Overlay>
      <PopUpMenu>
        <Section2>
          <CloseButton onClick={close}>
            <IoClose size={30} color="#2f3137"></IoClose>
          </CloseButton>
          <LoginComponent border={"0px solid white"} boxShadow={"0"}></LoginComponent>
        </Section2>
      </PopUpMenu>
    </>
  );
};

export default LoginPopup;
