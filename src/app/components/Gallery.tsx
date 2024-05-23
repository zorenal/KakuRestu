import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/g1.jpg", alt: "Image 1" },
    { src: "/g2.jpg", alt: "Image 2" },
    { src: "/g3.jpg", alt: "Image 3" },
    { src: "/g5.jpg", alt: "Image 4" },
    { src: "/g1.jpg", alt: "Image 5" },
    { src: "/g2.jpg", alt: "Image 6" },
    { src: "/g3.jpg", alt: "Image 7" },
    { src: "/g5.jpg", alt: "Image 8" },
    { src: "/g1.jpg", alt: "Image 9" },
    { src: "/g2.jpg", alt: "Image 10" },
  ];

  return (
    <section id="Gallery" className="mt-10 ">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <div className="group cursor-pointer overflow-hidden">
              <Image
                className="h-auto max-w-full transform transition-transform duration-300 group-hover:scale-150"
                src={image.src}
                alt={image.alt}
                objectFit="cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
