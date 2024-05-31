export default function AboutComponent() {
  return (
    <section className="h-1/2 flex sm:grid items-center overflow-hidden text-white">
      <div className="flex flex-col w-full items-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-8 overflow-hidden mt-10">About</h1>
        <p className="text-l sm:text-2xl w-5/6 sm:w-1/2">
          Nestled in the heart of downtown, this restaurant offers an authentic
          Japanese dining experience that transports you straight to the vibrant
          streets of Tokyo. The restaurant&apos;s serene ambiance, adorned with
          traditional shoji screens, bamboo accents, and soft lantern lighting,
          creates a tranquil setting perfect for a culinary journey. this
          restaurant specializes in a diverse menu featuring fresh sushi,
          sashimi, and a variety of hot dishes like tempura, teriyaki, and
          ramen.
        </p>
        <br/>
        <p className="text-l sm:text-2xl w-5/6 sm:w-1/2">
          At the helm of this culinary haven is Chef Hiroshi Tanaka, a
          master of Japanese cuisine with over two decades of experience. Chef
          Tanaka&apos;s dedication to his craft is evident in every dish,
          meticulously prepared using traditional techniques passed down through
          generations. His passion for fresh, high-quality ingredients ensures
          an unparalleled dining experience. Complementing Chef Tanaka&apos;s
          expertise is a team of skilled and attentive staff, who provide
          impeccable service with warm hospitality. From the sushi chefs, who
          artfully craft each roll with precision, to the servers, who
          anticipate every need, the staff’s commitment to excellence creates a
          dining atmosphere that is both welcoming and unforgettable.
        </p>
      </div>
    </section>
  );
}
