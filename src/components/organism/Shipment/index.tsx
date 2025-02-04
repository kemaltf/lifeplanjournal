import React, { useState, useEffect, useRef } from "react";
import { InnerContainer, GroupInput, Gender, LabelStyled, InputContainer, Section1, PopUpMenu, Section2, Section3, Overlay, CloseButton, Courier, CourierOption, CheckoutContainerDetail, ImageSectionMini } from "./CartStyled";
import InputText from "@/components/atoms/InputText";
import InputParagraph from "@/components/atoms/InputParagraph";
import RadioButton from "@/components/atoms/RadioButton";
import Select from "@/components/atoms/SelectDropdown";
import { IoClose } from "react-icons/io5";
import Checkbox from "@/components/atoms/InputCheckbox";
import ButtonDropdown from "@/components/atoms/ButtonDropdown";
import { ButtonNoBox, ButtonNormal } from "@/components/atoms/Button/ButtonStyled";
import DetailCheckout from "@/components/molecules/DetailCheckout";
type Props = {};
import Image from "next/image";
const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8", "Option 9", "Option 10", "Option 11", "Option 12", "Option 13", "Option 14"];

const index = (props: Props) => {
  const [section, setSection] = useState(1);

  /**
   * Calculate screen width when mounting for the first time
   */
  const containerRef = useRef<HTMLDivElement>(null); // reference the container
  const [screenWidth, setScreenWidth] = useState(0); // screen width
  const [containerWidth, setContainerWidth] = useState(0); // container width
  const [containerHeight, setContainerHeight] = useState(0); // container width
  /**
   * Calculate container width
   */
  const getContainerWidth = (): void => {
    setContainerWidth(containerRef.current!.offsetWidth);
  };
  const getContainerHeight = (): void => {
    setContainerHeight(containerRef.current!.offsetHeight);
  };
  /**
   * Calculate screen width
   */
  const getScreenWidth = (): void => {
    setScreenWidth(window.innerWidth);
  };

  useEffect((): (() => void) => {
    getScreenWidth();
    getContainerWidth();
    getContainerHeight();
    const handleResize = (): void => {
      getScreenWidth();
      getContainerWidth();
      getContainerHeight();
    };
    window.addEventListener("resize", handleResize); // call handleResize when window has changed

    return () => {
      window.removeEventListener("resize", handleResize); // remove event listener when the component has unmounted
    };
  }, [screenWidth, section]);
  const [selectedValue, setSelectedValue] = useState("");
  const [checkedItems, setCheckedItems] = useState({
    option1: false,
    option2: false,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChangeCheckbox = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };
  const handleSectionPlus = () => {
    const sectionPlusOne = section + 1;
    setSection(sectionPlusOne);
  };
  const handleSectionMinus = () => {
    const sectionMinusOne = section - 1;
    setSection(sectionMinusOne);
  };
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <InnerContainer>
      <InputContainer ref={containerRef}>
        <h1 style={{ paddingBottom: "20px" }}>Checkout</h1>
        {section === 1 && (
          <Section1>
            {" "}
            <h3 style={{ fontSize: "16px", fontWeight: "600" }}>Biodata</h3>
            <GroupInput>
              <InputText id="firstName" label="First Name*"></InputText>
              <InputText id="lastName" label="Last Name*"></InputText>
            </GroupInput>
            <h3 style={{ fontSize: "13px", fontWeight: "500", marginTop: "15px" }}>Honorific</h3>
            <Gender value={selectedValue}>
              <RadioButton
                id="radio1"
                value="MR"
                name="option"
                checked={selectedValue === "MR"}
                onChange={handleRadioChange}
                label="MR"
                style={{
                  border: "1px solid var(--gog-gray)",
                  borderRadius: "5px 5px 0 0",
                }}
              >
                Mr.
              </RadioButton>
              <RadioButton
                id="radio2"
                name="option"
                value="MRS"
                checked={selectedValue === "MRS"}
                onChange={handleRadioChange}
                label="MRS"
                style={{
                  border: "1px solid var(--gog-gray)",
                  borderRadius: "0 0 0 0",
                  borderTop: "none",
                }}
              >
                Mrs.
              </RadioButton>
              <RadioButton
                id="radio3"
                name="option"
                value="MS"
                checked={selectedValue === "MS"}
                onChange={handleRadioChange}
                label="MS"
                style={{
                  border: "1px solid var(--gog-gray)",
                  borderRadius: "0 0 5px 5px",
                  borderTop: "none",
                }}
              >
                Ms.
              </RadioButton>
            </Gender>
            <h3 style={{ fontSize: "13px", fontWeight: "500", marginTop: "15px" }}>Contact</h3>
            <InputText id="email" label="Email Address*"></InputText>
            <InputText id="contact" label="Mobile Phone*"></InputText>
            <InputText id="company" label="Company (optional)"></InputText>
            <h3 style={{ marginTop: "15px" }}>Shipping Address</h3>
            <Select
              label="Province"
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            ></Select>
            <Select
              label="City"
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
              ]}
            ></Select>
            <GroupInput>
              <Select
                label="District"
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                ]}
              ></Select>
              <InputText id="post" label="Postal code"></InputText>
            </GroupInput>
            <InputText id="address" label="Detail Address"></InputText>
            <InputParagraph maxChar="100" placeholder="note to courier"></InputParagraph>
            <Checkbox id={"option1"} name={"option1"} label="Save this information for next time" checked={checkedItems.option1} onChange={handleChangeCheckbox}></Checkbox>
            <ButtonNormal onClick={handleSectionPlus}>Continue to shipping</ButtonNormal>
          </Section1>
        )}
        {section === 2 && (
          <Section1>
            <div style={{ borderBottom: "5px solid lightgray", paddingBottom: "15px" }}>
              <h3 style={{ borderBottom: "1px solid lightgray", marginBottom: "10px", paddingBottom: "5px" }}>Shipping Address</h3>
              <h4>Kemal Taufik Fikri (rumah)</h4>
              <p>+6289692785818</p>
              <small>jalan cicukang no 190 RT 03 RW 09 kecamatan Arcamanik bandung no 190 Cisaranten bina harapan Arcamanik, Kota Bandung, 40294</small>
              <div style={{ marginTop: "15px", display: "flex", flex: "1", gap: "10px" }}>
                <ButtonNormal onClick={handleClick}>Change Address</ButtonNormal>
                <ButtonNormal onClick={handleClick}>Add New Address</ButtonNormal>
              </div>
              {isMenuOpen ? (
                <>
                  <Overlay></Overlay>
                  <PopUpMenu>
                    <Section3>
                      <h3>Address</h3>
                      <CloseButton onClick={handleClick}>
                        <IoClose size={25}></IoClose>
                      </CloseButton>
                    </Section3>
                    <Section2>
                      {" "}
                      <h3 style={{ fontSize: "16px", fontWeight: "600" }}>Biodata</h3>
                      <GroupInput>
                        <InputText id="firstName" label="First Name*"></InputText>
                        <InputText id="lastName" label="Last Name*"></InputText>
                      </GroupInput>
                      <h3 style={{ fontSize: "13px", fontWeight: "500", marginTop: "15px" }}>Honorific</h3>
                      <Gender value={selectedValue}>
                        <RadioButton
                          id="radio1"
                          value="MR"
                          name="option"
                          checked={selectedValue === "MR"}
                          onChange={handleRadioChange}
                          label="MR"
                          style={{
                            border: "1px solid var(--gog-gray)",
                            borderRadius: "5px 5px 0 0",
                          }}
                        >
                          Mr.
                        </RadioButton>
                        <RadioButton
                          id="radio2"
                          name="option"
                          value="MRS"
                          checked={selectedValue === "MRS"}
                          onChange={handleRadioChange}
                          label="MRS"
                          style={{
                            border: "1px solid var(--gog-gray)",
                            borderRadius: "0 0 0 0",
                            borderTop: "none",
                          }}
                        >
                          Mrs.
                        </RadioButton>
                        <RadioButton
                          id="radio3"
                          name="option"
                          value="MS"
                          checked={selectedValue === "MS"}
                          onChange={handleRadioChange}
                          label="MS"
                          style={{
                            border: "1px solid var(--gog-gray)",
                            borderRadius: "0 0 5px 5px",
                            borderTop: "none",
                          }}
                        >
                          Ms.
                        </RadioButton>
                      </Gender>
                      <h3 style={{ fontSize: "13px", fontWeight: "500", marginTop: "15px" }}>Contact</h3>
                      <InputText id="email" label="Email Address*"></InputText>
                      <InputText id="contact" label="Mobile Phone*"></InputText>
                      <InputText id="company" label="Company (optional)"></InputText>
                      <h3 style={{ marginTop: "15px" }}>Shipping Address</h3>
                      <Select
                        label="Province"
                        options={[
                          { value: "option1", label: "Option 1" },
                          { value: "option2", label: "Option 2" },
                        ]}
                      ></Select>
                      <Select
                        label="City"
                        options={[
                          { value: "option1", label: "Option 1" },
                          { value: "option2", label: "Option 2" },
                        ]}
                      ></Select>
                      <GroupInput>
                        <Select
                          label="District"
                          options={[
                            { value: "option1", label: "Option 1" },
                            { value: "option2", label: "Option 2" },
                          ]}
                        ></Select>
                        <InputText id="post" label="Postal code"></InputText>
                      </GroupInput>
                      <InputText id="address" label="Detail Address"></InputText>
                      <Checkbox id={"option1"} name={"option1"} label="Save this information for next time" checked={checkedItems.option1} onChange={handleChangeCheckbox}></Checkbox>
                      <ButtonNormal onClick={handleSectionPlus}>Add New Address</ButtonNormal>
                    </Section2>
                  </PopUpMenu>
                </>
              ) : null}
            </div>
            <div style={{ width: "100%", marginTop: "15px" }}>
              <h3 style={{ borderBottom: "1px solid lightgray", marginBottom: "10px", paddingBottom: "5px" }}>Shipping Option</h3>
              <Courier>
                <div>
                  <h4>Choosen Courier</h4>
                  <p>Sicepat Reg (Rp 22.500)</p>
                  <p>Estimasi tiba 22 - 25 May</p>
                </div>
                <CourierOption>
                  <ButtonDropdown options={options}></ButtonDropdown>
                </CourierOption>
              </Courier>
            </div>
            <div style={{ width: "100%", marginTop: "15px" }}>
              <h3 style={{ borderBottom: "1px solid lightgray", paddingBottom: "5px" }}>Product Summary</h3>
              <Courier style={{ paddingBottom: "10px", marginTop: "10px" }}>
                <ImageSectionMini>
                  <Image src={"/images/example_product_front.webp"} fill style={{ objectFit: "cover" }} alt="tes"></Image>
                </ImageSectionMini>
                <div>
                  <h4>Planner 2024</h4>
                  <p>
                    <del>Rp 190.000</del> Rp 139.000
                  </p>
                  <p>Quantity: 1</p>
                </div>
              </Courier>
              <Courier style={{ borderTop: "1px solid lightgray", justifyContent: "end", padding: "5px 0", borderBottom: "3px solid lightgray" }}>Sub total: Rp 139.000</Courier>
              <Courier style={{ paddingBottom: "10px", marginTop: "10px" }}>
                <ImageSectionMini>
                  <Image src={"/images/example_product_front.webp"} fill style={{ objectFit: "cover" }} alt="tes"></Image>
                </ImageSectionMini>
                <div>
                  <h4>Planner 2024</h4>
                  <p>
                    <del>Rp 190.000</del> Rp 139.000
                  </p>
                  <p>Quantity: 1</p>
                </div>
              </Courier>
              <Courier style={{ borderTop: "1px solid lightgray", justifyContent: "end", padding: "5px 0", borderBottom: "3px solid lightgray" }}>Sub total: Rp 139.000</Courier>
            </div>
          </Section1>
        )}
      </InputContainer>
      <CheckoutContainerDetail>
        <div style={{ width: "350px", position: "relative", height: "100%" }}>
          <DetailCheckout fixedPos={containerWidth + 74} containerHeight={containerHeight} screenWidth={screenWidth} section={section}></DetailCheckout>
        </div>
      </CheckoutContainerDetail>
    </InnerContainer>
  );
};

export default index;
