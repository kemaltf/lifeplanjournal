import React from "react";
import Headerhero from "../components/organism/HeaderHero";
import ProductCard from "@/components/organism/ProductCard";
type Props = {};

const products = (props: Props) => {
  return (
    <div>
      <Headerhero></Headerhero>
      <ProductCard></ProductCard>
    </div>
  );
};

export default products;
