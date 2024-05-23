import Image from "next/image";

export default function HrsnLoc() {
  return (
    <section id="Hours&Location" className="flex flex-col sm:flex-row sm:h-screen justify-center m-5">
      {/* Mobile view */}
      <div className="flex items-center justify-center mb-3 sm:hidden">
        <img
          src="/restaurantstock.jpg"
          alt="Location Image"
          className="w-full object-cover h-32 sm:h-full"
        />
      </div>

      {/* Information section */}
      <div className="flex items-center border border-dotted border-black sm:w-1/2 sm:mr-5">
        <div className="flex flex-col items-center w-full p-8">
          <p className="text-3xl font-bold mb-5">Visit Us</p>
          <div className="flex flex-col items-center w-full m-8">
            <a
              href="https://www.google.com/maps/search/?api=1&query=2788+San+Tomas+Expy,+Santa+Clara,+CA+95051"
              target="_blank"
              rel="noopener noreferrer"
              className="underline w-auto"
            >
              2788 San Tomas Expy
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=2788+San+Tomas+Expy,+Santa+Clara,+CA+95051"
              target="_blank"
              rel="noopener noreferrer"
              className="underline w-auto"
            >
              Santa Clara, CA 95051
            </a>
            <a href="tel:+14086537000" className="mb-3 underline">
              (408)-653-7000
            </a>
          </div>
          <div className="mb-8 text-center">
            <p className="font-bold">Monday - Thursday</p>
            <p>11am - 9:30pm</p>
          </div>
          <div className="mb-8 text-center">
            <p className="font-bold">Friday - Saturday</p>
            <p>11am - 11:30pm</p>
          </div>
          <div className="mb-8 text-center">
            <p className="font-bold">Sunday</p>
            <p>11am - 9pm</p>
          </div>
          <p className="font-bold text-center">Happy Hour</p>
          <p>Monday - Friday</p>
          <p>3pm - 6pm</p>
          <button className="mt-8 px-6 py-3 bg-red-600 text-white text-lg font-bold rounded">
            Reserve A Table
          </button>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden sm:flex sm:w-1/2 sm:items-center sm:justify-center">
        <img
          src="/restaurantstock.jpg"
          alt="Location Image"
          className="w-full object-cover h-full"
        />
      </div>
    </section>
  );
}
