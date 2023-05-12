import React from "react";
import ProductCart from "@/components/organism/ProductCart";
type Props = {};

const Checkout = (props: Props) => {
  return (
    <div style={{ paddingBottom: "25vh" }}>
      <ProductCart></ProductCart>
    </div>
  );
};

export default Checkout;
