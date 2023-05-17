import React, { useState } from "react";
import { InnerContainer, GroupInput, Gender, LabelStyled } from "./CartStyled";
import InputText from "@/components/atoms/InputText";
import InputParagraph from "@/components/atoms/InputParagraph";
import RadioButton from "@/components/atoms/RadioButton";
import Select from "@/components/atoms/SelectDropdown";
type Props = {};

const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8", "Option 9", "Option 10", "Option 11", "Option 12", "Option 13", "Option 14"];

const index = (props: Props) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <InnerContainer>
      <h1>Checkout</h1>
      <h3 style={{ fontSize: "16px", fontWeight: "600" }}>Biodata</h3>
      <GroupInput>
        <InputText id="firstName" label="First Name*"></InputText>
        <InputText id="lastName" label="Last Name*"></InputText>
      </GroupInput>
      <h3 style={{ fontSize: "13px", fontWeight: "500" }}>Gender</h3>
      <Gender value={selectedValue}>
        <RadioButton id="radio1" value="Male" name="option" checked={selectedValue === "Male"} onChange={handleRadioChange} label="Male" style={{ border: "1px solid var(--gog-gray)", borderRadius: "5px 5px 0 0" }} />
        <RadioButton id="radio2" value="Female" name="option" checked={selectedValue === "Female"} onChange={handleRadioChange} label="Female" style={{ border: "1px solid var(--gog-gray)", borderRadius: "0 0 0 0", borderTop: "none" }} />
        <RadioButton
          id="radio3"
          value="PreferNotSay"
          name="option"
          checked={selectedValue === "PreferNotSay"}
          onChange={handleRadioChange}
          label="Prefer Not Say"
          style={{ border: "1px solid var(--gog-gray)", borderRadius: "0 0 5px 5px", borderTop: "none" }}
        />
      </Gender>
      <h3 style={{ fontSize: "13px", fontWeight: "500" }}>Contact</h3>
      <InputText id="email" label="Email Address*"></InputText>
      <InputText id="contact" label="Mobile Phone*"></InputText>
      <InputText id="company" label="Company (optional)"></InputText>
      <h3>Shipping Address</h3>
      <Select
        label="Province"
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
        ]}
      ></Select>
      <Select
        label="City"
        options={[
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
          { value: "option2", label: "Option 2" },
        ]}
      ></Select>
      <GroupInput>
        <Select
          label="District"
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option2", label: "Option 2" },
            { value: "option2", label: "Option 2" },
            { value: "option2", label: "Option 2" },
            { value: "option2", label: "Option 2" },
            { value: "option2", label: "Option 2" },
            { value: "option2", label: "Option 2" },
            { value: "option2", label: "Option 2" },
            { value: "option2", label: "Option 2" },
            { value: "option2", label: "Option 2" },
            { value: "option2", label: "Option 2" },
            { value: "option2", label: "Option 2" },
            { value: "option2", label: "Option 2" },
            { value: "option2", label: "Option 2" },
            { value: "option2", label: "Option 2" },
            { value: "option2", label: "Option 2" },
            { value: "option2", label: "Option 2" },
          ]}
        ></Select>
        <InputText id="post" label="Postal code"></InputText>
      </GroupInput>
      <InputText id="address" label="Detail Address"></InputText>
      <InputParagraph maxChar="100" placeholder="note to courier"></InputParagraph>
    </InnerContainer>
  );
};

export default index;
