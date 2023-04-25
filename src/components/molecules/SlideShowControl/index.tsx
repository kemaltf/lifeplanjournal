import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { ArrowButtonLeft, ArrowButtonRight, ContainerStyled, ImageCarousel, SlideContent, ArrowImageRight, ImageStyled } from "./SlideShowStyled";

// Ceritanya gambarnya dari API, setelah API jadi kita replace
const images: string[] = [
  "https://via.placeholder.com/210/00FF00?text=1",
  "https://via.placeholder.com/220/000?text=2",
  "https://via.placeholder.com/230/00FF00?text=3",
  "https://via.placeholder.com/230/00FF00?text=3",
  "https://via.placeholder.com/230/00FF00?text=3",
];
const Index = ({ setCurrentImage }): JSX.Element => {
  const [screenWidth, setScreenWidth] = useState<number>(0); // screen width
  const [containerWidth, setContainerWidth] = useState<number>(0); // container width
  const [currentSlide, setCurrentSlide] = useState<number>(0); // current slide state
  const [translateX, setTranslateX] = useState<number>(0); // translate x number
  const [cloneClass, setCloneClass] = useState("");
  const containerRef = useRef<HTMLDivElement>(null); // lebar container
  const [firstImageWidth, setFirstImageWidth] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageNum, setImageNum] = useState(0);
  const firstImageRef = useRef<HTMLImageElement>(null);
  const getFirstImageWidth = () => {
    if (firstImageRef.current) {
      setFirstImageWidth(firstImageRef.current.offsetWidth);
    }
  };
  // dragging setting mouse or touch
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const prevClientX = useRef<number>(0);
  const handleImageClick = (index: number) => {
    console.log(index);
    setCurrentSlide(index);
    setCurrentImage(index);
  };
  /**
   * Calculate container width
   */
  const getContainerWidth = (): void => {
    setContainerWidth(containerRef.current!.offsetWidth);
  };

  /**
   * Calculate screen width
   */
  const getScreenWidth = (): void => {
    setScreenWidth(window.innerWidth);
  };

  const calculateImageNum = (): void => {
    setImageNum(containerWidth / firstImageWidth);
  };

  const calculateImageWidth = (): void => {
    const actualImageWidth = containerWidth / images.length;
    setImageWidth(actualImageWidth);
  };
  /**
   * Calculate screen width when mounting for the first time
   */
  useEffect((): (() => void) => {
    getScreenWidth();
    const handleResize = (): void => {
      getScreenWidth();
    };
    // panggil handleResize saat terdapat perubahan size window
    window.addEventListener("resize", handleResize);
    // lepas Event Listener setelah komponen di unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth, imageWidth, containerWidth]);
  useEffect(() => {
    getContainerWidth();
  }, [screenWidth]);

  /**
   * Get the first position of axis X when mouse clicked first time
   * @param {MouseEvent} e
   */
  const dragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    prevClientX.current = e.clientX;
    setIsDragging(true);
    e.preventDefault();
  };

  /**
   * Get the difference position of axis X when mouse dragged on x axis
   * @param {MouseEvent} e
   */
  let diff: number;
  const dragging = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    diff = e.clientX - prevClientX.current;
    let translateXOnDrag = translateX;
    translateXOnDrag -= diff;

    const textForm = `translate3d(${-translateXOnDrag}px,0,0)`;

    containerRef.current!.style.transform = textForm;
    e.preventDefault();
  };

  /**
   * Change slide based on the diff when mouse end click
   * @param {MouseEvent} e
   */
  const dragStop = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(false);

    let translateXOnDrag = translateX;
    containerRef.current!.style.transform = `translate3d(-${translateXOnDrag}px,0,0)`;
    e.preventDefault();
  };

  /**
   * Get the first position of axis X when touch first time
   * @param {TouchEvent} e
   */
  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    prevClientX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  /**
   * Get the difference position of axis X when mouse dragged on x axis
   * @param {TouchEvent} e
   */
  let diffTouch: number;
  const touchHold = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    diffTouch = e.touches[0].clientX - prevClientX.current;
    let translateXOnDrag = translateX;
    translateXOnDrag -= diffTouch;
    containerRef.current!.style.transform = `translate3d(${-translateXOnDrag}px,0,0)`;
  };
  /**
   * Change slide based on the diff when mouse end click
   * @param {TouchEvent} e
   */
  const touchStop = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(false);
    if (diffTouch < -150) {
    } else if (diffTouch > 150) {
    } else {
      let translateXOnDrag = translateX;
      containerRef.current!.style.transform = `translate3d(-${translateXOnDrag}px,0,0)`;
      e.preventDefault();
    }
  };

  return (
    <ContainerStyled>
      <SlideContent
        className={`${isDragging ? "dragging" : ""} ${cloneClass ? "clone" : ""}`}
        ref={containerRef}
        onMouseDown={dragStart}
        onMouseMove={dragging}
        onMouseUp={dragStop}
        onMouseLeave={dragStop}
        onTouchStart={touchStart}
        onTouchMove={touchHold}
        onTouchEnd={touchStop}
      >
        {images.map((image: string, index) => (
          <ImageStyled
            src={image}
            key={index}
            ref={index === 0 ? firstImageRef : null}
            alt=""
            width={(containerWidth - 30) / 6}
            height={containerWidth / 6}
            onClick={() => handleImageClick(index)}
            onTouchStart={() => handleImageClick(index)}
          ></ImageStyled>
          // <ImageCarousel image={image} key={index}></ImageCarousel>
        ))}
      </SlideContent>
    </ContainerStyled>
  );
};
export default Index;
