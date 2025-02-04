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
  OrderSection,
  QuantityOrder,
  NotesContainer,
  ContainerPadStyledNoTopPad,
  DiscountSection,
  ImageSection,
  TextSection,
  TextSectionTwo,
} from "./ProductSlideCarousel";
import Image from "next/image";
import Carousel from "../../molecules/Carousel";
import InputDropdown from "../../atoms/InputDropdown";
import InputNumber from "../../atoms/InputNumber";
import InputParagraph from "../../atoms/InputParagraph";
import { BsEnvelopePaper, BsEnvelope } from "react-icons/bs";

import { ButtonNoBox, ButtonStandard } from "@/components/atoms/Button/ButtonStyled";
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
  const [isNotesActive, setisNotesActive] = useState<boolean>(false); // container width
  const handleImageClick = (index: number) => {
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
  const handleNotesToggle = () => {
    setisNotesActive(!isNotesActive);
  };
  return (
    <>
      <ContainerPadStyled>
        <ContainerImage>
          <ContainerBigImage>
            <Carousel imagesLen={images.length} currentImage={currentImage} setCurrentImage={setCurrentImage} durationMs={durationMs} loop={false} arrow>
              {images.map((image: string, index) => (
                <Image src={image} key={index} alt="" width={500} height={500} layout="responsive"></Image>
              ))}
            </Carousel>
          </ContainerBigImage>
          <Carousel imagesLen={images.length} durationMs={durationMs} loop={false} arrow={false} slide={false}>
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
          <DiscountSection>
            <Disc>Rp 20.000</Disc>
            <PercentageDisc>UP TO 30 % OFF</PercentageDisc>
          </DiscountSection>
          <InputDropdown label="Select an option" options={options} value={selectedOption} onChange={handleOptionChange} margin="20px 0 5px 0"></InputDropdown>

          <NotesContainer>
            <ButtonNoBox onClick={handleNotesToggle}>
              {isNotesActive ? <BsEnvelopePaper /> : <BsEnvelope />}
              {isNotesActive ? " Cancel notes" : " Add some notes"}
            </ButtonNoBox>
          </NotesContainer>
          {isNotesActive && (
            <NotesContainer>
              <InputParagraph maxChar={100} height={100}></InputParagraph>
            </NotesContainer>
          )}
          <OrderSection>
            <QuantityOrder>
              <InputNumber initialValue={1} min={1} max={10} step={1}></InputNumber>{" "}
              <Stock>
                <span>Stock:</span> 1000
              </Stock>
            </QuantityOrder>
            <ButtonStandard>Checkout</ButtonStandard>
          </OrderSection>
        </ContainerDesc>
      </ContainerPadStyled>
      <ContainerPadStyledNoTopPad>
        <ImageSection>
          <Image alt="Sample 1" src="/images/sample-images-1.webp" fill style={{ objectFit: "cover" }}></Image>
        </ImageSection>
        <TextSection>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, iste laudantium architecto facere eaque recusandae vel rerum debitis aperiam esse!</p>
        </TextSection>
      </ContainerPadStyledNoTopPad>
      <ContainerPadStyledNoTopPad>
        <ImageSection>
          <Carousel imagesLen={images.length} currentImage={currentImage} setCurrentImage={setCurrentImage} durationMs={durationMs} loop={false} arrow>
            {images.map((image: string, index) => (
              <Image src={image} key={index} alt="" width={500} height={500} layout="responsive"></Image>
            ))}
          </Carousel>
        </ImageSection>
        <TextSectionTwo>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, iste laudantium architecto facere eaque recusandae vel rerum debitis aperiam esse!</p>
        </TextSectionTwo>
      </ContainerPadStyledNoTopPad>
    </>
  );
};

export default index;
