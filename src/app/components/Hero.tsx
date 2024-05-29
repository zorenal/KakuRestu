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
        autoplaySpeed: 5000,
      };
    
    const images = ["/Food1.jpg", "/Food2.jpg"];
    return (
        <Slider {...settings}>
            {images.map((img, index) => (
                <div key={index} className="relative h-screen bg-cover bg-center">
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
                        <Image
                            src={img}
                            alt="Hero Image"
                            layout="fill"
                            objectFit="cover"
                            className="-z-50"
                        />
              
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="text-5xl font-bold text-center text-white overflow-hidden"
                                style={{ textShadow: "3px 3px 10px rgba(0, 0, 0, 0.5)" }}
                            >
                           
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}
