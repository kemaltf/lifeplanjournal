import React from "react";
import ProductCart from "@/components/organism/ProductCart";
type Props = {};

const cart = (props: Props) => {
  return (
    <div style={{ paddingBottom: "25vh" }}>
      <ProductCart></ProductCart>
    </div>
  );
};

export default cart;
