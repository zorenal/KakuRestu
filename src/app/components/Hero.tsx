import { heroImage } from "../../../utils/types"
import Image from "next/image"

export default function Hero({image}: heroImage){
    return (
        <section className="w-screen h-screen">
        <Image 
            src={image} 
            alt="Hero Image" 
            layout="fill" 
            objectFit="cover" 
            className="w-full h-full"
        />
    </section>
    )
}