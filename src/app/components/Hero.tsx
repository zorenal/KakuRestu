'use client'
import { heroImage } from "../../../utils/types"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import Image from "next/image"

export default function Hero({ src, altHeight, mobileHeight, label, carousel }: heroImage) {
    const heightClass = altHeight ? altHeight : 'h-screen';

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
        <div className={`relative ${heightClass} ${mobileHeight} w-full`}>
          {carousel ? (
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index} className="h-screen w-auto relative">
                  <Image
                    src={img}
                    alt="Hero Image"
                    fill
                    objectFit="cover"
                    className="-z-50"
                  />s
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="text-5xl font-bold text-center text-white overflow-hidden"
                      style={{ textShadow: "3px 3px 10px rgba(0, 0, 0, 0.5)" }}
                    >
                      JPG Fusion Restaurant
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <>
              <Image
                src={src}
                alt="Hero Image"
                fill
                objectFit="cover"
                className="-z-50"
              />
    
              <div className="absolute inset-0 flex items-center justify-center">
                <h1
                  className="text-4xl sm:text-6xl font-bold text-white drop-shadow-xl overflow-hidden"
                  style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)" }}
                >
                  {label}
                </h1>
              </div>
            </>
          )}
        </div>
      );
      
}