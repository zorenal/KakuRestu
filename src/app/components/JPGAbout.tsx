
import Image from "next/image";

export default function About() {
  return (
    <div id="About" className="flex flex-row h-screen justify-center m-5">
      <div className="flex flex-col justify-center items-center w-1/2 p-8 border border-dotted border-black mr-5">
        <p className="text-2xl font-bold mb-5">About</p>
        <p className="m-3 w-4/6">Imagine a culinary experience that blends the delicate artistry of Japanese cuisine with the bold flavors of Greek and Persian dishes, creating a symphony of tastes that dance on your palate. At our fusion restaurant, each dish is a celebration of these rich culinary traditions. Begin your meal with a refreshing appetizer of sashimi drizzled with olive oil and topped with a sprinkle of feta cheese, accompanied by a side of Persian herb salad, bursting with the vibrant flavors of fresh mint, parsley, and pomegranate seeds. This harmonious start sets the tone for an unforgettable dining experience that bridges the East and the Mediterranean.</p>
      </div>
      <div className="w-1/2">
        <div className="flex items-center justify-center h-full">
          <img
            src="/restaurantstock.jpg"
            alt="Location Image"
            className="h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
