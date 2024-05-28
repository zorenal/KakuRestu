import Hero from "./components/Hero";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
export default function Main() {
  return (
    <section className="h-screen">
      <Hero src="/Food1.jpg" label="Placeholder" carousel={true}/>
      <section className="h-1/2 flex">
      <div className="w-1/2 flex items-center justify-center">
          <Link href="/" className="bg-red-200 p-8">
            Reservations
          </Link>
        </div>
      <div className="w-1/2">
          <Image
            src="/rstock.jpg"
            alt="placeholder"
            className="object-cover w-full h-full"
            objectFit="cover"
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <section className="h-1/2 flex">
      <div className="w-1/2">
          <Image
            src="/rstock.jpg"
            alt="placeholder"
            className="object-cover w-full h-full"
            objectFit="cover"
            width={1000}
            height={1000}
          />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Link href="/menu" className="bg-red-200 p-8">
            Menu
          </Link>
        </div>
      </section>
      <section className="h-1/2 flex">
        <div className="w-1/2 flex items-center justify-center">
          <Link href="/location" className="bg-red-200 p-8">
            Hours & Locations
          </Link>
        </div>
        <div className="w-1/2">
          <Image
            src="/rstock.jpg"
            alt="placeholder"
            className="object-cover w-full h-full"
            objectFit="cover"
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <Footer/>
    </section>
  );
}
