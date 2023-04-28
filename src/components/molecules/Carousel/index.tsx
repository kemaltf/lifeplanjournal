import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { ArrowButtonLeft, ArrowButtonRight, ContainerStyled, ImageCarousel, SlideContent, ArrowImageRight } from "./CarouselStyled";

type IndexProps = {
  images: string[];
  currentImage: number;
  setCurrentImage: (index: number) => void;
  durationMs: number;
  setDurationMs: (index: number) => void;
};
const Index = ({ images, currentImage, setCurrentImage, durationMs, setDurationMs }: IndexProps): JSX.Element => {
  //=== usefull function ===//
  // screenWidth, containerWidth
  const containerRef = useRef<HTMLDivElement>(null); // reference the container
  const [screenWidth, setScreenWidth] = useState<number>(0); // screen width
  const [containerWidth, setContainerWidth] = useState<number>(0); // container width

  // === slideshow controller === //
  const [firstImageWidth, setFirstImageWidth] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const firstImageRef = useRef<HTMLImageElement>(null);
  const getFirstImageWidth = () => {
    if (firstImageRef.current) {
      setFirstImageWidth(firstImageRef.current.offsetWidth);
    }
  };
  const handleImageClick = (index: number) => {
    setCurrentSlide(index);
    setCurrentImage(index);
    const prevSlide = currentImage;
    const diffSlide = Math.abs(index - prevSlide);
    console.log(diffSlide);
    const totalDuration = 200 + 200 * diffSlide;
    console.log(totalDuration);
    setDurationMs(totalDuration);
  };
  // == end == //
  //=== slider function ===//
  const prevClientX = useRef<number>(0); // position when the first click
  const [currentSlide, setCurrentSlide] = useState<number>(0); // current slide state
  const [prevSlide, setPrevSlide] = useState<number>(0); // previous slide state
  const [translateX, setTranslateX] = useState<number>(0); // translate x number
  const [isDragging, setIsDragging] = useState<boolean>(false); // dragging state

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
    const handleResize = (): void => {
      getScreenWidth();
    };
    window.addEventListener("resize", handleResize); // call handleResize when window has changed

    return () => {
      window.removeEventListener("resize", handleResize); // remove event listener when the component has unmounted
    };
  }, [screenWidth]);
  useEffect(() => {
    getContainerWidth();
  }, [screenWidth]);

  //== BUTTON SLIDER SETTING ==//
  /**
   * Function to handle arrow click (not looping)
   *
   * @param {string} direction - "left | right"
   */
  const handleArrowClick = (direction: "left" | "right") => {
    let newCurrentSlide = currentSlide;
    const maxSlide = images.length;
    if (direction === "left") {
      if (currentSlide !== 0) {
        newCurrentSlide = (currentSlide - 1 + maxSlide) % maxSlide;
        setCurrentSlide(newCurrentSlide);
        setCurrentImage(newCurrentSlide);
        setTranslateX(newCurrentSlide * containerWidth);
      } else {
        let translateXOnDrag = translateX;
        containerRef.current!.style.transform = `translate3d(${-translateXOnDrag}px,0,0)`;
      }
    } else if (direction === "right") {
      if (currentSlide !== maxSlide - 1) {
        newCurrentSlide = (currentSlide + 1) % maxSlide;
        setCurrentSlide(newCurrentSlide);
        setCurrentImage(newCurrentSlide);
        setTranslateX(newCurrentSlide * containerWidth);
      } else {
        let translateXOnDrag = translateX;
        containerRef.current!.style.transform = `translate3d(${-translateXOnDrag}px,0,0)`;
      }
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
      containerRef.current.style.transform = `translate3d(${-translateXValue}px, 0, 0)`;
    }
    setPrevSlide(currentSlide);
  }, [currentSlide, containerWidth]);

  //== MOUSE DRAG SETTING ==//
  let diff: number;

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
  const dragging = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    diff = e.clientX - prevClientX.current;
    let translateXOnDrag = translateX;
    translateXOnDrag -= diff;
    containerRef.current!.style.transform = `translate3d(${-translateXOnDrag}px,0,0)`;

    e.preventDefault();
  };
  /**
   * Change slide based on the diff when mouse end click
   * @param {MouseEvent} e
   */
  const dragStop = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(false);
    if (diff < -50) {
      handleArrowClick("right");
    } else if (diff > 50) {
      handleArrowClick("left");
    } else {
      let translateXOnDrag = translateX;
      containerRef.current!.style.transform = `translate3d(${-translateXOnDrag}px,0,0)`;
    }
    e.preventDefault();
  };

  //== TOUCH DRAG SETTING ==//
  /**
   * Get the first position of axis X when touch first time
   * @param {TouchEvent} e
   */
  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    prevClientX.current = e.touches[0].clientX;
    setIsDragging(true);
    e.preventDefault();
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
    e.preventDefault();
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
      containerRef.current!.style.transform = `translate3d(${-translateXOnDrag}px,0,0)`;
    }
    e.preventDefault();
  };

  return (
    <ContainerStyled>
      {currentImage !== 0 && (
        <ArrowButtonLeft>
          <Image src="/icons/arrow.svg" width={40} height={40} alt="" onClick={() => handleArrowClick("left")} />
        </ArrowButtonLeft>
      )}
      <SlideContent
        className={`${isDragging ? "dragging" : ""} `}
        ref={containerRef}
        onMouseDown={dragStart}
        onMouseMove={dragging}
        onMouseUp={dragStop}
        onTouchStart={touchStart}
        onTouchMove={touchHold}
        onTouchEnd={touchStop}
        onMouseLeave={dragStop}
        durationMs={durationMs}
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
