import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { ArrowButtonLeft, ArrowButtonRight, ContainerStyled, ImageCarousel, SlideContent, ArrowImageRight } from "./SlideShowStyled";

// Ceritanya gambarnya dari API, setelah API jadi kita replace
const images: string[] = [
  "https://via.placeholder.com/210/00FF00?text=1",
  "https://via.placeholder.com/220/000?text=2",
  "https://via.placeholder.com/230/00FF00?text=3",
  "https://via.placeholder.com/230/00FF00?text=3",
  "https://via.placeholder.com/230/00FF00?text=3",
];
const Index = ({ currentImage, setCurrentImage }): JSX.Element => {
  const [screenWidth, setScreenWidth] = useState<number>(0); // screen width
  const [containerWidth, setContainerWidth] = useState<number>(0); // container width
  const [currentSlide, setCurrentSlide] = useState<number>(0); // current slide state
  const [translateX, setTranslateX] = useState<number>(0); // translate x number
  const [cloneClass, setCloneClass] = useState("");
  const containerRef = useRef<HTMLDivElement>(null); // lebar container

  // dragging setting mouse or touch
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const prevClientX = useRef<number>(0);
  // Update state di dalam SlideShow ketika currentImage berubah
  if (currentImage !== currentSlide) {
    setCurrentSlide(currentImage);
  }
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

  /**
   * Calculate screen width when mounting for the first time
   */
  useEffect((): (() => void) => {
    getScreenWidth();
    getContainerWidth();
    const handleResize = (): void => {
      getContainerWidth();
      getScreenWidth();
    };
    // panggil handleResize saat terdapat perubahan size window
    window.addEventListener("resize", handleResize);
    // lepas Event Listener setelah komponen di unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  /**
   * Function to handle arrow click
   *
   * @param {string} direction - "left | right"
   */
  const handleArrowClick = (direction: "left" | "right") => {
    let newCurrentSlide = currentSlide;
    const maxSlide = images.length; //7
    if (direction === "left") {
      if (currentSlide !== 0) {
        newCurrentSlide = (currentSlide - 1 + maxSlide) % maxSlide;
      }
      setCurrentSlide(newCurrentSlide);
      setCurrentImage(newCurrentSlide);

      setTranslateX(newCurrentSlide * containerWidth);
    } else if (direction === "right") {
      if (currentSlide !== maxSlide - 1) {
        newCurrentSlide = (currentSlide + 1) % maxSlide;
      }
      setCurrentSlide(newCurrentSlide);
      setCurrentImage(newCurrentSlide);
      setTranslateX(newCurrentSlide * containerWidth);
    }
  };

  /**
   * Function to change current slide and translate
   *
   */
  useEffect((): void => {
    if (containerRef.current) {
      const translateXValue = containerWidth * currentSlide;
      setTranslateX(translateXValue);
      containerRef.current.style.transform = `translate3d(-${translateXValue}px, 0, 0)`;
    }
  }, [currentSlide, containerWidth]);

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
    containerRef.current!.style.transform = `translate3d(-${translateXOnDrag}px,0,0)`;
    e.preventDefault();
  };

  /**
   * Change slide based on the diff when mouse end click
   * @param {MouseEvent} e
   */
  const dragStop = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(false);
    if (diff < -100) {
      handleArrowClick("right");
    } else if (diff > 100) {
      handleArrowClick("left");
    } else {
      let translateXOnDrag = translateX;
      containerRef.current!.style.transform = `translate3d(-${translateXOnDrag}px,0,0)`;
    }
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
    containerRef.current!.style.transform = `translate3d(-${translateXOnDrag}px,0,0)`;
  };
  /**
   * Change slide based on the diff when mouse end click
   * @param {TouchEvent} e
   */
  const touchStop = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(false);
    if (diffTouch < -150) {
      handleArrowClick("right");
    } else if (diffTouch > 150) {
      handleArrowClick("left");
    } else {
      let translateXOnDrag = translateX;
      containerRef.current!.style.transform = `translate3d(-${translateXOnDrag}px,0,0)`;
      e.preventDefault();
    }
  };

  return (
    <ContainerStyled>
      {currentImage !== 0 && (
        <ArrowButtonLeft>
          <Image src="/icons/arrow.svg" width={40} height={40} alt="" onClick={() => handleArrowClick("left")} />
        </ArrowButtonLeft>
      )}
      <SlideContent
        className={`${isDragging ? "dragging" : ""} ${cloneClass ? "clone" : ""}`}
        ref={containerRef}
        onMouseDown={dragStart}
        onMouseMove={dragging}
        onMouseUp={dragStop}
        onTouchStart={touchStart}
        onTouchMove={touchHold}
        onTouchEnd={touchStop}
        onMouseLeave={dragStop}
      >
        {images.map((image: string, index) => (
          <Image src={image} key={index} alt="" width={500} height={500} layout="responsive"></Image>
        ))}
      </SlideContent>
      {currentImage !== images.length - 1 && (
        <ArrowButtonRight>
          <ArrowImageRight src="/icons/arrow.svg" width={40} height={40} alt="" onClick={() => handleArrowClick("right")} />
        </ArrowButtonRight>
      )}
    </ContainerStyled>
  );
};
export default Index;
