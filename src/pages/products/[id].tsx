import React from "react";
import { useRouter } from "next/router";
import ImageSlideCarousel from "../../components/organism/ImageSlideCarousel";
type Props = {};

const ProductDetailPage = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  return <ImageSlideCarousel />;
};

export default ProductDetailPage;
