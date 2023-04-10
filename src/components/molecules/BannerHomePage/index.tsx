import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { ArrowButtonLeft, ArrowButtonRight, ContainerStyled, ImageCarousel, SlideContent, ArrowImageRight } from "./BannerHomePageStyled";

// Ceritanya gambarnya dari API, setelah API jadi kita replace
const images: string[] = [
  "https://via.placeholder.com/210/00FF00?text=1",
  "https://via.placeholder.com/220/000?text=2",
  "https://via.placeholder.com/230/00FF00?text=3",
  "https://via.placeholder.com/240/000?text=4",
  "https://via.placeholder.com/250/00FF00?text=5",
  "https://via.placeholder.com/260/000?text=6",
  "https://via.placeholder.com/270/00FF00?text=7",
  "https://via.placeholder.com/280/000?text=8",
  "https://via.placeholder.com/290/00FF00?text=9",
];

const Index = () => {
  // lebar screen
  const [screenWidth, setScreenWidth] = useState(0);
  // lebar kontainer
  const [containerWidth, setContainerWidth] = useState(0);
  // lebar gambar pertama
  const [firstImageWidth, setFirstImageWidth] = useState(0);
  // jumlah itemnya
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  // Fungsi mengambil lebar layar
  const getScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  // Fungsi mengambil lebar container
  const getContainerWidth = () => {
    if (slideContentRef.current) {
      setContainerWidth(slideContentRef.current.offsetWidth);
    }
  };
  // Fungsi mengambil lebar gambar pertama
  const getFirstImageWidth = () => {
    if (slideContentRef.current) {
      setFirstImageWidth((slideContentRef.current.querySelector(":first-child") as HTMLElement)?.offsetWidth);
    }
  };
  const getItemsPerSlide = (screenWidth: number) => {
    if (screenWidth > 1023) {
      setItemsPerSlide(1);
    }
    if (screenWidth >= 768 && screenWidth <= 1023) {
      setItemsPerSlide(1);
    }
    if (screenWidth < 768) {
      setItemsPerSlide(1);
    }
  };
  useEffect((): any => {
    // panggil saat pertama kali
    getFirstImageWidth();
    getContainerWidth();
    getScreenWidth();
    getItemsPerSlide(screenWidth);

    // panggil saat handleResize dipicu
    const handleResize = () => {
      getFirstImageWidth();
      getContainerWidth();
      getScreenWidth();
      getItemsPerSlide(screenWidth);
    };

    // panggil handleResize saat terdapat perubahan size window
    window.addEventListener("resize", handleResize);
    console.log("ini screeenWidth", screenWidth, containerWidth, firstImageWidth, itemsPerSlide); // jika ingin lihat perubahannya console.log disini

    // lepas Event Listener setelah komponen di unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  // ====== MENGGUNAKAN BUTTON
  // Menentukan currentSlide
  const [currentSlide, setCurrentSlide] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const handleLeftArrowClick = () => {
    const maxSlide = Math.ceil(images.length / itemsPerSlide) - 1;
    setCurrentSlide(currentSlide === 0 ? maxSlide : currentSlide - 1);
  };

  const handleRightArrowClick = () => {
    const maxSlide = Math.ceil(images.length / itemsPerSlide) - 1;
    setCurrentSlide(currentSlide === maxSlide ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (slideContentRef.current) {
      const translateXValue = containerWidth * currentSlide;
      setTranslateX(translateXValue);
      slideContentRef.current.style.transform = `translate3d(-${translateXValue}px, 0, 0)`;
    }
  }, [currentSlide, containerWidth]);

  // ================
  // Kontrol dragging
  const [isDragging, setIsDragging] = useState(false);

  // tangkap posisi awalnya menggunakan useRef
  const prevClientX = useRef(0);
  const slideContentRef = useRef<HTMLDivElement>(null);

  // Ketika mouse mengklik pertama kali
  const dragStart = (e: any) => {
    // tangkap posisi awal
    prevClientX.current = e.clientX;
    setIsDragging(true);
  };
  let diff;
  // ketika mouse mendrag
  const dragging = (e: any) => {
    if (!isDragging) return;
    diff = e.clientX - prevClientX.current;
    let translateXOnDrag = translateX;
    translateXOnDrag -= diff;

    slideContentRef.current.style.transform = `translate3d(-${translateXOnDrag}px,0,0)`;
    e.preventDefault();
  };

  // Ketika mouse selesai mengklik
  const dragStop = (e: any) => {
    setIsDragging(false);
    if (diff < -100) {
      handleRightArrowClick();
    } else if (diff > 100) {
      handleLeftArrowClick();
    } else {
      let translateXOnDrag = translateX;
      slideContentRef.current.style.transform = `translate3d(-${translateXOnDrag}px,0,0)`;
      e.preventDefault();
    }
  };
  return (
    // wrapper
    <ContainerStyled>
      {/* button left */}
      <ArrowButtonLeft>
        <Image src="/icons/arrow.svg" width={40} height={40} alt="" onClick={handleLeftArrowClick} />
      </ArrowButtonLeft>
      {/* carousel nya */}
      <SlideContent className={isDragging ? "dragging" : ""} ref={slideContentRef} onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragStop}>
        {/* imagenya */}
        {images.map((image: string, index) => (
          <ImageCarousel image={image} key={index}></ImageCarousel>
          // <img src={image} key={index}></img>
        ))}
      </SlideContent>
      {/* button right */}
      <ArrowButtonRight>
        <ArrowImageRight src="/icons/arrow.svg" width={40} height={40} alt="" onClick={handleRightArrowClick} />
      </ArrowButtonRight>
    </ContainerStyled>
  );
};
export default Index;
