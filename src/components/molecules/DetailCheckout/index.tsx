import React, { useState, useEffect, useRef } from "react";
import { DetailCheckoutContainer, SummaryContainer, TotalPrice, TotalFinalPriceContainer, TotalFinalPrice, Promo } from "./DetailCheckoutStyled";
import { ButtonNormal } from "@/components/atoms/Button/ButtonStyled";
type Props = {};
import { RiCoupon3Fill } from "react-icons/ri";

const index = ({ fixedPos, containerHeight, screenWidth, section }: Props) => {
  /**
   * Calculate screen width when mounting for the first time
   */
  const containerRefInner = useRef<HTMLDivElement>(null); // reference the container
  const [containerHeightInner, setContainerHeightInner] = useState(0); // container width
  /**
   * Calculate container width
   */
  const getContainerHeight = (): void => {
    setContainerHeightInner(containerRefInner.current!.offsetHeight);
  };
  useEffect((): (() => void) => {
    getContainerHeight();
    const handleResize = (): void => {
      getContainerHeight();
    };
    window.addEventListener("resize", handleResize); // call handleResize when window has changed

    return () => {
      window.removeEventListener("resize", handleResize); // remove event listener when the component has unmounted
    };
  }, [screenWidth]);

  const [isFixed, setIsFixed] = useState(false);
  const [isOnTheBottom, setisOnTheBottom] = useState(false);
  const [scrollTopPos, setScrollTopPos] = useState(0);
  useEffect(() => {
    console.log("render ulang");
    const heightOfDoc = document.documentElement.scrollHeight; // tinggi doc
    const heighOfScroll = heightOfDoc - window.innerHeight; // jarak scroll max
    const valueAtA = (containerHeight / heightOfDoc) * heighOfScroll - (60 / heightOfDoc) * heighOfScroll; // 10 karena kita mulai di titik 60
    let scrollTop;
    const handleScroll = () => {
      scrollTop = document.documentElement.scrollTop; // jarak scroll saat ini
      setScrollTopPos(scrollTop);
    };
    console.log(scrollTopPos);
    if (scrollTopPos >= 92 && scrollTopPos < valueAtA) {
      setIsFixed(true);
    } else if (scrollTopPos >= valueAtA) {
      setisOnTheBottom(true);
      setIsFixed(false);
    } else {
      setisOnTheBottom(false);
      setIsFixed(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [screenWidth, isOnTheBottom, isFixed, containerHeight, section, scrollTopPos]);
  return (
    <DetailCheckoutContainer fixedPos={fixedPos} className={isFixed === true ? "fixed" : isOnTheBottom ? "normaldown" : "normal"} containerHeight={containerHeight} containerHeightInner={containerHeightInner} ref={containerRefInner}>
      <Promo>
        <ButtonNormal backgroundColor="white" color="var(--gog-primary)" borderColor="var(--gog-gray)">
          <RiCoupon3Fill style={{ marginRight: "5px" }}></RiCoupon3Fill>Makin Hemat Pakai Promo
        </ButtonNormal>
      </Promo>
      <h3>Shopping Summary</h3>
      <SummaryContainer>
        <TotalPrice>
          <p>Total Price</p>
          <p>Rp 10.000.000</p>
        </TotalPrice>
        <TotalPrice>
          <p>Shipping Price</p>
          <p>Rp 22.500</p>
        </TotalPrice>
        <TotalPrice>
          <p>Discount Price</p>
          <p>Rp 2.000</p>
        </TotalPrice>
      </SummaryContainer>
      <TotalFinalPriceContainer>
        <TotalFinalPrice>
          <h4>Total Tagihan</h4>
          <p>1.595.000</p>
        </TotalFinalPrice>
      </TotalFinalPriceContainer>
      <ButtonNormal>Checkout</ButtonNormal>
    </DetailCheckoutContainer>
  );
};

export default index;
