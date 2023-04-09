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
      setItemsPerSlide(3);
    }
    if (screenWidth >= 768 && screenWidth <= 1023) {
      setItemsPerSlide(2);
    }
    if (screenWidth < 768) {
      setItemsPerSlide(1);
    }
  };
  // Mengambil data real time jika terdapat perubahan media
  //Panggil function getFirstImageWidth setelah gambar-gambar telah dimuat menggunakan useEffect:
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
  // Data slide
  // useEffect(() => {
  //   const slideContent = slideContentRef.current!;
  //   // Hitung total ada berapa gambar
  //   const childCount = slideContent.childElementCount;
  //   // Hitung total lebar dari gambar tersebut
  //   const totalWidth = firstImageWidth * childCount;
  // }, []);

  // ====== MENGGUNAKAN BUTTON
  // Menentukan currentSlide
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);
  };

  const handleRightArrowClick = () => {
    const maxSlide = Math.ceil(images.length / itemsPerSlide) - 1; // perbaiki maxSlidenya
    console.log("ini max", maxSlide);
    console.log("ini cure", currentSlide);
    setCurrentSlide(currentSlide === maxSlide ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (slideContentRef.current) {
      slideContentRef.current.style.transform = `translate3d(-${containerWidth * currentSlide}px, 0, 0)`;
    }
  }, [currentSlide, containerWidth]);

  // ================
  // Kontrol dragging
  const [isDragging, setIsDragging] = useState(false);

  // tangkap posisi awalnya menggunakan useRef

  const prevClientX = useRef(0); //. prevClientX adalah ref yang digunakan untuk menyimpan posisi X kursor mouse pada saat mousedown, sehingga saat mouse di drag, kita bisa menghitung jarak antara posisi mouse sekarang dengan posisi awal pada saat mousedown.
  const slideContentRef = useRef<HTMLDivElement>(null); // slideContentRef adalah ref yang digunakan untuk mengakses elemen HTML div yang memuat seluruh slide gambar.

  // Ketika mouse mengklik pertama kali
  const dragStart = (e: any) => {
    setIsDragging(true); // isi e itu adalah hasil dari eventnya entah itu onclick atau apa.
    // tangkap posisi awal
    prevClientX.current = e.clientX; //current merupakan properti dari objek yang dikembalikan oleh useRef.  properti current akan merujuk pada elemen DOM yang terkait dengan referensi tersebut setelah komponen berakhir. Dengan demikian, kita bisa menggunakan properti current untuk mengakses elemen DOM. Kita tidak perlu lagi menggunakan querySelector untuk mencari elemen DOM yang sesuai. Oh iya alasan kenapa kita menggunakan prevClientX karena kalo kita simpan ke dalam variable biasa maka akan hilang setelah diperbarui.
  };
  let translateXValue = 0; //inisialisasi nilai translateX

  // Ketiak mouse mendrag
  const dragging = (e: any) => {
    if (!isDragging) return; // jika kondisi klik sudah false (artinya sudah ngga ngeklik lagi) maka dragging berhenti.
    const slideContent = slideContentRef.current!; //! tanda seru memastikan typescript bahwa kita memiliki slideContent
    const diff = e.clientX - prevClientX.current;
    //Tambahkan nilai diff ke translateXValue
    translateXValue += diff;
    // Bagian ini memberikan efek seperti di drag:
    e.preventDefault(); //BIAR gambar ga ke drag
    slideContent.style.transform = `translateX(${translateXValue}px)`; //gunakan nilai translateXValue
    prevClientX.current = e.clientX;
  };

  // Ketika mouse selesai mengklik
  const dragStop = () => {
    setIsDragging(false);
    prevClientX.current = 0;
    console.log("ini nilai translateX di stop", translateXValue);
  };
  return (
    // wrapper
    <ContainerStyled>
      {/* button left */}
      <ArrowButtonLeft>
        <Image src="/icons/arrow.svg" width={40} height={40} alt="" onClick={handleLeftArrowClick} />
      </ArrowButtonLeft>
      {/* carousel nya */}
      <SlideContent ref={slideContentRef} onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragStop}>
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
