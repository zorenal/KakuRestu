import Image from "next/image";

export default function HrsnLoc() {
  return (
    <div id="Hours&Location" className="flex flex-row h-screen justify-center m-5">
      <div className="flex flex-col justify-center items-center w-1/2 p-8 border border-dotted border-black mr-5 sm:w-full sm:text-center">
        <p className="text-3xl font-bold mb-8">Visit Us</p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=2788+San+Tomas+Expy,+Santa+Clara,+CA+95051"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 underline"
        >
          2788 San Tomas Expy, Santa Clara, CA 95051
        </a>
        <a href="tel:+14086537000" className="m-3">
          (408)-653-7000
        </a>

        <div className="mb-3">
          <p className="font-bold">Monday - Thursday</p>
          <p>11am - 9:30pm</p>
        </div>
        <div className="mb-3">
          <p className="font-bold">Friday - Saturday</p>
          <p>11am - 11:30pm</p>
        </div>
        <div className="mb-3">
          <p className="font-bold">Sunday</p>
          <p>11am - 9pm</p>
        </div>

        <p className="mt-3 font-semibold">Happy Hour</p>
        <p>Monday - Friday</p>
        <p>3pm - 6pm</p>
        <button className="mt-6 px-6 py-3 bg-red-600 text-white text-lg font-bold rounded">
          Reserve A Table
        </button>
      </div>
      <div className="w-1/2 sm:w-full">
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
