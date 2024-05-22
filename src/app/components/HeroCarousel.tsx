"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

export default function HeroCarousel() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const images = ["/Food1.jpg", "/Food2.jpg"];

  return (
<Slider {...settings}>
  {images.map((img, index) => (
    <div key={index} className="slider-item relative">
      <Image
        src={img}
        alt={`image ${index}`}
        fill
        objectFit="cover"
        loading="lazy"
        className="w-full h-full"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/40"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10">
        <div
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            textShadow: "3px 3px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          JPG Fusion Restaurant
        </div>
      </div>
    </div>
  ))}
</Slider>

  );
}
