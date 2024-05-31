'use client'
import { heroImage } from "../../../utils/types"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import Image from "next/image"

export default function Hero({ src, label, carousel }: heroImage) {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        swipe: false
      };
    
 
    const images = ["/Hero1.jpg", "/Hero2.jpg","/Hero3.jpg","/Hero4.jpg","/Hero5.jpg"];
    return (
        <Slider {...settings}>
            {images.map((img, index) => (
                <div key={index} className="h-screen bg-cover bg-center">
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
                        <Image
                            src={`${carousel ? img : src}`}
                            alt="Hero Image"
                            fill
                            priority={true}
                            objectFit="cover"
                            className="-z-50"
                        />
              
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="text-3xl sm:text-5xl font-bold text-center text-white overflow-hidden"
                                style={{ textShadow: "3px 3px 10px rgba(0, 0, 0, 0.5)" }}
                            >
                           {label}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}
