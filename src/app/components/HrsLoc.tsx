import Image from "next/image";

export default function HrsnLoc() {
  return (
    <section id="Hours&Location" className="flex flex-col sm:flex-row sm:h-screen justify-center m-5">
       <div className="sm:hidden flex items-center justify-center mb-3">
          <img
            src="/restaurantstock.jpg"
            alt="Location Image"
            className="w-full object-cover h-32 sm:h-full"
          />
        </div>
      <div className="sm:w-1/2 sm:p-8 border border-dotted border-black sm:mr-5">
        <div className="flex flex-col justify-center items-center w-full p-8">
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

          <div className="mb-3 text-center">
            <p className="font-bold">Monday - Thursday</p>
            <p>11am - 9:30pm</p>
          </div>
          <div className="mb-3 text-center">
            <p className="font-bold">Friday - Saturday</p>
            <p> 11am - 11:30pm</p>
          </div>
          <div className="mb-3 text-center">
            <p className="font-bold ">Sunday</p>
            <p >11am - 9pm</p>
          </div>

          <p className="font-bold text-center">Happy Hour</p>
          <p>Monday - Friday</p>
          <p>3pm - 6pm</p>
          <button className="mt-6 px-6 py-3 bg-red-600 text-white text-lg font-bold rounded">
            Reserve A Table
          </button>
        </div>
      </div>
      <div className="sm:w-1/2 sm:flex items-center justify-center">
        <div className="hidden sm:flex sm:items-center sm:justify-center sm:h-full">
          <img
            src="/restaurantstock.jpg"
            alt="Location Image"
            className="w-full object-cover h-full"
          />
        </div>
      </div>
    </section>
  );
}
