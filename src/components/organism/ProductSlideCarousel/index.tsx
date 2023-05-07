import React, { useState } from "react";
import {
  ContainerImage,
  ContainerBigImage,
  ContainerDesc,
  ContainerPadStyled,
  ImageStyled,
  LinkHover,
  Breadcrumb,
  ColaborationName,
  ProductTitle,
  ProductDesc,
  Price,
  Disc,
  PercentageDisc,
  Stock,
  QuantityOrder,
} from "./ProductSlideCarousel";
import Image from "next/image";
import Carousel from "../../molecules/Carousel";
import InputDropdown from "../../atoms/InputDropdown";
import InputNumber from "../../atoms/InputNumber";
// Ceritanya gambarnya dari API, setelah API jadi kita replace
const images: string[] = [
  "https://via.placeholder.com/210/00FF00?text=1",
  "https://via.placeholder.com/220/000?text=2",
  "https://via.placeholder.com/220/000?text=3",
  "https://via.placeholder.com/210/00FF00?text=4",
  "https://via.placeholder.com/220/000?text=5",
  "https://via.placeholder.com/210/00FF00?text=6",
];

// option dari API
const options = ["Option 1", "Option 2", "Option 3"];
type Props = {};

const index = (props: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [durationMs, setDurationMs] = useState<number>(400); // container width
  const handleImageClick = (index: number) => {
    console.log(index);
    setCurrentImage(index);
    const prevSlide = currentImage;
    const diffSlide = Math.abs(index - prevSlide);
    const totalDuration = 200 + 200 * diffSlide;
    setDurationMs(totalDuration);
  };

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <ContainerPadStyled>
      <ContainerImage>
        <ContainerBigImage>
          <Carousel images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} durationMs={durationMs} loop={false} arrow>
            {images.map((image: string, index) => (
              <Image src={image} key={index} alt="" width={500} height={500} layout="responsive"></Image>
            ))}
          </Carousel>
        </ContainerBigImage>
        <Carousel images={images} durationMs={durationMs} loop={false} arrow={false} slide={false}>
          {images.map((image: string, index) => (
            <ImageStyled key={index} onClick={() => handleImageClick(index)} onTouchStart={() => handleImageClick(index)}>
              <img src={image} alt="" />
            </ImageStyled>
          ))}
        </Carousel>
        {/* <SlideShowControl images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} setDurationMs={setDurationMs}></SlideShowControl> */}
      </ContainerImage>

      <ContainerDesc>
        <Breadcrumb>
          <LinkHover>Product category</LinkHover>
        </Breadcrumb>
        <ProductTitle>Product Title</ProductTitle>
        <ColaborationName>
          <LinkHover>LIFEPLANJOURNAL X AMALIATIU</LinkHover>
        </ColaborationName>
        <ProductDesc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita molestiae ducimus perferendis rem. Illum excepturi aperiam possimus tempora sequi amet.</ProductDesc>
        <Price>Rp 20.000</Price>
        <Disc>Rp 20.000</Disc>
        <PercentageDisc>UP TO 30 % OFF</PercentageDisc>
        <InputDropdown label="Select an option" options={options} value={selectedOption} onChange={handleOptionChange}></InputDropdown>
        <QuantityOrder>
          <InputNumber initialValue={1} min={1} max={10} step={1}></InputNumber>{" "}
          <Stock>
            <span>Stock:</span> 1000
          </Stock>
        </QuantityOrder>
      </ContainerDesc>
    </ContainerPadStyled>
  );
};

export default index;
