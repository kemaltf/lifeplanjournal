import React, { useState } from "react";
import { ProductCardsContainer } from "./ProductCardStyled";
import ProductCard from "../../molecules/ProductCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    artist: "amaliatiu",
    imageSrc: "/images/example_product_front.webp",
    status: "SALE",
    imageTwo: "/images/example_product_back.webp",
    imageAlt: "Product 1 Image",
    price: 100000,
  },
  {
    id: 2,
    name: "Product 2",
    artist: "amaliatiu",
    imageSrc: "/images/example_product_front.webp",
    status: "SALE",
    imageTwo: "/images/example_product_back.webp",
    imageAlt: "Product 2 Image",
    price: 200000,
    discount: 20,
  },
  {
    id: 3,
    name: "Product 3",
    artist: "amaliatiu",
    imageSrc: "/images/example_product_front.webp",
    status: "DISCOUNT",
    imageTwo: "/images/example_product_back.webp",
    imageAlt: "Product 3 Image",
    price: 300000,
  },
  {
    id: 4,
    name: "Product 4",
    artist: "novaraya",
    imageSrc: "/images/example_product_front.webp",
    status: "DISCOUNT",
    imageTwo: "/images/example_product_back.webp",
    imageAlt: "Product 3 Image",
    price: 300000,
  },
];

const index = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardHover = (id: number) => {
    setHoveredCard(id);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
      <ProductCardsContainer>
        {products.map((product, index) => (
          <ProductCard
            product={product}
            hoveredCard={hoveredCard}
            handleCardHover={handleCardHover}
            handleCardLeave={handleCardLeave}
            key={product.id}
          ></ProductCard>
        ))}
      </ProductCardsContainer>
    </>
  );
};

export default index;
