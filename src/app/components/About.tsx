import Gallery from "./Gallery";
export default function AboutComponent() {
  return (
    <section className="h-screen grid grid-cols-2 items-center m-10">
      <div className="flex flex-col items-center m-10">
      <h1 className="text-2xl font-bold">About</h1>
      <p className="text-xl">
        Nestled in the heart of downtown, this restaurant offers an authentic
        Japanese dining experience that transports you straight to the vibrant
        streets of Tokyo. The restaurant&apos;s serene ambiance, adorned with
        traditional shoji screens, bamboo accents, and soft lantern lighting,
        creates a tranquil setting perfect for a culinary journey. this
        restaurant specializes in a diverse menu featuring fresh sushi, sashimi,
        and a variety of hot dishes like tempura, teriyaki, and ramen. Each dish
        is meticulously crafted using the freshest ingredients, reflecting the
        delicate balance and bold flavors characteristic of Japanese cuisine.
        Whether you&apos;re savoring the silky texture of sashimi or the rich,
        comforting broth of ramen, this restaurant promises a memorable meal
        that honors the timeless traditions of Japan.
      </p>
      </div>
      <div className='border border-black p-96 '></div>
    </section>
  );
}
