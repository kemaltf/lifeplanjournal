import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import {
  ArrowButtonLeft,
  ArrowButtonRight,
  ContainerStyled,
  SlideContent,
  ArrowImageRight,
} from "./CarouselStyled";

type IndexProps = {
  imagesLen: number;
  currentImage?: number;
  setCurrentImage?: (index: number) => void;
  durationMs?: number;
  setDurationMs?: (index: number) => void;
  loop?: boolean;
  arrow?: boolean;
  slide?: boolean;
  children: React.ReactNode;
};
const Index = ({
  imagesLen,
  currentImage = 0,
  setCurrentImage,
  durationMs = 400,
  setDurationMs,
  arrow = true,
  loop = false,
  slide = true,
  children,
}: IndexProps): JSX.Element => {
  //=== usefull function ===//
  const containerRef = useRef<HTMLDivElement>(null); // reference the container
  const [screenWidth, setScreenWidth] = useState<number>(0); // screen width
  const [containerWidth, setContainerWidth] = useState<number>(0); // container width

  /**
   * Calculate screen width
   */
  const getScreenWidth = (): void => {
    setScreenWidth(window.innerWidth);
  };

  /**
   * Calculate container width
   */
  const getContainerWidth = (): void => {
    setContainerWidth(containerRef.current!.offsetWidth);
  };

  // === slideshow controller === //
  const [firstImageWidth, setFirstImageWidth] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const firstImageRef = useRef<HTMLImageElement>(null);
  const getFirstImageWidth = () => {
    if (firstImageRef.current) {
      setFirstImageWidth(firstImageRef.current.offsetWidth);
    }
  };
  // == end == //

  //=== slider function ===//
  const prevClientX = useRef<number>(0); // position when the first click
  const [prevSlide, setPrevSlide] = useState<number>(0); // previous slide state
  const [translateX, setTranslateX] = useState<number>(0); // translate x number
  const [isDragging, setIsDragging] = useState<boolean>(false); // dragging state

  // == hero ==//
  const [cloneClass, setCloneClass] = useState("");
  // == hero end==//

  /**
   * Calculate screen width when mounting for the first time
   */
  useEffect((): (() => void) => {
    getScreenWidth();
    getContainerWidth();
    const handleResize = (): void => {
      getScreenWidth();
      getContainerWidth();
    };
    window.addEventListener("resize", handleResize); // call handleResize when window has changed

    return () => {
      window.removeEventListener("resize", handleResize); // remove event listener when the component has unmounted
    };
  }, [screenWidth]);

  //== SLIDER FUNCTION ==//
  /**
   * Function to handle arrow click (not looping)
   *
   * @param {string} direction - "left | right"
   */
  const handleArrowClick = (direction: "left" | "right") => {
    let newCurrentSlide = currentImage;

    const maxSlide = loop ? imagesLen + 2 : imagesLen;
    if (loop) {
      if (direction === "left") {
        newCurrentSlide = (currentImage - 1 + maxSlide) % maxSlide;
        if (currentImage === 1) {
          setCloneClass("clone");
          newCurrentSlide = (currentImage - 2 + maxSlide) % maxSlide;
          setTimeout(() => {
            setCloneClass("");
            newCurrentSlide = (currentImage - 3 + maxSlide) % maxSlide;
            if (setCurrentImage) {
              setCurrentImage(newCurrentSlide);
            }
            setTranslateX(newCurrentSlide * containerWidth);
          }, 50);
        }
        if (setCurrentImage) {
          setCurrentImage(newCurrentSlide);
        }
        setTranslateX(newCurrentSlide * containerWidth);
      } else if (direction === "right") {
        if (currentImage === maxSlide - 1) {
          setCloneClass("clone");
          newCurrentSlide = (currentImage + 2) % maxSlide;
          setTimeout(() => {
            setCloneClass("");
            newCurrentSlide = (currentImage + 3) % maxSlide;
            if (setCurrentImage) {
              setCurrentImage(newCurrentSlide);
            }
            setTranslateX(newCurrentSlide * containerWidth);
          }, 50);
        } else {
          newCurrentSlide = (currentImage + 1) % maxSlide;
        }
        if (setCurrentImage) {
          setCurrentImage(newCurrentSlide);
        }
        setTranslateX(newCurrentSlide * containerWidth);
      }
    } else {
      if (direction === "left") {
        if (currentImage !== 0) {
          newCurrentSlide = (currentImage - 1 + maxSlide) % maxSlide;
          if (setCurrentImage) {
            setCurrentImage(newCurrentSlide);
          }
          setTranslateX(newCurrentSlide * containerWidth);
        } else {
          let translateXOnDrag = translateX;
          containerRef.current!.style.transform = `translate3d(${-translateXOnDrag}px,0,0)`;
        }
      } else if (direction === "right") {
        if (currentImage !== maxSlide - 1) {
          newCurrentSlide = (currentImage + 1) % maxSlide;
          if (setCurrentImage) {
            setCurrentImage(newCurrentSlide);
          }
          setTranslateX(newCurrentSlide * containerWidth);
        } else {
          let translateXOnDrag = translateX;
          containerRef.current!.style.transform = `translate3d(${-translateXOnDrag}px,0,0)`;
        }
      }
    }
  };

  /**
   * Function to change current slide and translate
   *
   */
  useEffect((): void => {
    if (containerRef.current) {
      const translateXValue = containerWidth * currentImage;
      setTranslateX(translateXValue);
      containerRef.current.style.transform = `translate3d(${-translateXValue}px, 0, 0)`;
    }
    setPrevSlide(currentImage);
  }, [currentImage, prevSlide, containerWidth]);

  //== MOUSE DRAG SETTING ==//
  let diff: number;

  /**
   * Get the first position of axis X when mouse clicked first time
   * @param {MouseEvent} e
   */
  const dragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    prevClientX.current = e.clientX;
    setIsDragging(true);
    document.addEventListener("mousemove", moving);
    document.addEventListener("mouseup", dragStop);
    e.preventDefault();
  };

  const moving = (e: any) => {
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
  const dragStop = (e: any) => {
    setIsDragging(false);
    document.removeEventListener("mousemove", moving);
    document.removeEventListener("mouseup", dragStop);
    if (slide === true) {
      if (diff < -50) {
        handleArrowClick("right");
      } else if (diff > 50) {
        handleArrowClick("left");
      }
    }

    let translateXOnDrag = translateX;
    containerRef.current!.style.transform = `translate3d(${-translateXOnDrag}px,0,0)`;
    e.preventDefault();
  };

  //== TOUCH DRAG SETTING ==//
  /**
   * Get the first position of axis X when touch first time
   * @param {TouchEvent} e
   */
  let diffTouch: number;

  const touchStart = (e: any) => {
    prevClientX.current = e.touches[0].clientX;
    setIsDragging(true);
    document.addEventListener("touchmove", touchHold);
    document.addEventListener("touchend", touchStop);
  };
  /**
   * Get the difference position of axis X when mouse dragged on x axis
   * @param {TouchEvent} e
   */
  const touchHold = (e: any) => {
    if (!isDragging) return;
    diff = e.touches[0].clientX - prevClientX.current;
    let translateXOnDrag = translateX;
    translateXOnDrag -= diff;
    containerRef.current!.style.transform = `translate3d(${-translateXOnDrag}px,0,0)`;
  };
  /**
   * Change slide based on the diff when mouse end click
   * @param {TouchEvent} e
   */
  const touchStop = (e: any) => {
    setIsDragging(false);
    document.removeEventListener("touchmove", touchHold);
    document.removeEventListener("touchend", touchStop);
    if (slide === true) {
      if (diff < -50) {
        handleArrowClick("right");
      } else if (diff > 50) {
        handleArrowClick("left");
      }
    }
    let translateXOnDrag = translateX;
    containerRef.current!.style.transform = `translate3d(${-translateXOnDrag}px,0,0)`;
    e.preventDefault();
  };

  return (
    <ContainerStyled>
      {arrow &&
        (loop ? (
          <ArrowButtonLeft>
            <Image
              src="/icons/arrow.svg"
              width={40}
              height={40}
              alt=""
              onClick={() => handleArrowClick("left")}
            />
          </ArrowButtonLeft>
        ) : (
          currentImage !== 0 && (
            <ArrowButtonLeft>
              <Image
                src="/icons/arrow.svg"
                width={40}
                height={40}
                alt=""
                onClick={() => handleArrowClick("left")}
              />
            </ArrowButtonLeft>
          )
        ))}
      <SlideContent
        className={`${isDragging ? "dragging" : ""} ${
          loop ? (cloneClass ? "clone" : "") : ""
        }`}
        ref={containerRef}
        onMouseDown={dragStart}
        onMouseUp={dragStop}
        onTouchStart={touchStart}
        onTouchMove={touchHold}
        onTouchEnd={touchStop}
        durationMs={durationMs}
      >
        {children}
      </SlideContent>

      {arrow &&
        (loop ? (
          <ArrowButtonRight>
            <ArrowImageRight
              src="/icons/arrow.svg"
              width={40}
              height={40}
              alt=""
              onClick={() => handleArrowClick("right")}
            />
          </ArrowButtonRight>
        ) : (
          currentImage !== imagesLen - 1 && (
            <ArrowButtonRight>
              <ArrowImageRight
                src="/icons/arrow.svg"
                width={40}
                height={40}
                alt=""
                onClick={() => handleArrowClick("right")}
              />
            </ArrowButtonRight>
          )
        ))}
    </ContainerStyled>
  );
};
export default Index;
