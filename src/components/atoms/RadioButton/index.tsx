import React from "react";

type Props = {
  label?: string;
  name: string;
  value: string;
};

const index = ({ label, name, value }: Props) => {
  return (
    <>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type="radio"
        id={label ? label : ""}
        name={name}
        value={values}
      ></input>
    </>
  );
};

export default index;
