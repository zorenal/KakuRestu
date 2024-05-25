import { heroImage } from "../../../utils/types"
import Navbar from "./Navbar"
import Image from "next/image"

export default function Hero({src, height}: heroImage){
    const heightClass = height ? height : 'h-screen';
    return ( 
        <div className="relative">
        <Image 
            src={src} 
            alt="Hero Image" 
            width={10000}
            height={10000}
            className={`w-full ${heightClass} -z-50 object-cover`}
        />
          <div className="absolute inset-0 flex items-center justify-center text-white">
                Hello
            </div>
        </div>
    )
}