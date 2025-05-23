import React from "react";
import {
  ProductCard,
  ImageProductContainer,
  ImageSize,
  CollaborationName,
  ProductName,
  Price,
  DiscountPrice,
  StatusLabel,
  NameProductContainer,
} from "./ProductCardStyled";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  artist: string;
  imageSrc: string;
  status: string;
  imageTwo: string;
  imageAlt: string;
  price: number;
  discount?: number;
}

interface Props {
  product: Product;
  hoveredCard: number | null;
  handleCardHover: (id: number) => void;
  handleCardLeave: () => void;
}

const index = ({
  product,
  hoveredCard,
  handleCardHover,
  handleCardLeave,
}: Props) => {
  const isHovered = hoveredCard === product.id;
  return (
    <ProductCard>
      <ImageProductContainer
        onMouseEnter={() => handleCardHover(product.id)}
        onMouseLeave={handleCardLeave}
      >
        {isHovered ? (
          <ImageSize>
            <Image
              src={product.imageTwo}
              alt={product.imageAlt}
              fill
              style={{
                objectFit: "cover",
              }}
            ></Image>
            <StatusLabel>{product.status}</StatusLabel>
          </ImageSize>
        ) : (
          <ImageSize>
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              fill
              style={{
                objectFit: "cover",
              }}
            ></Image>
            <StatusLabel>{product.status}</StatusLabel>
          </ImageSize>
        )}
      </ImageProductContainer>
      <NameProductContainer>
        <CollaborationName>{product.artist}</CollaborationName>
        <ProductName>
          {product.name}
          <DiscountPrice>
            <span>Rp {product.price}</span> {product.discount}%
          </DiscountPrice>
          <Price>
            <span>Rp</span>
            {product.price}
          </Price>
        </ProductName>
      </NameProductContainer>
    </ProductCard>
  );
};

export default index;
