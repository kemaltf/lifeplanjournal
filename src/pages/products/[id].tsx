import React from "react";
import { useRouter } from "next/router";
import ProductSlideCarousel from "../../components/organism/ProductSlideCarousel";
type Props = {};

const ProductDetailPage = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  return <ProductSlideCarousel />;
};

export default ProductDetailPage;
