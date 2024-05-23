"use client";
import { useState } from 'react';

export default function HrsnLoc() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      name: 'Santa Clara',
      address: '2788 San Tomas Expy, Santa Clara, CA 95051',
      phone: '(408)-653-7000',
      hours: {
        Monday: '11am - 9:30pm',
        Tuesday: '11am - 9:30pm',
        Wednesday: '11am - 9:30pm',
        Thursday: '11am - 9:30pm',
        Friday: '11am - 11:30pm',
        Saturday: '11am - 11:30pm',
        Sunday: '11am - 9pm',
      },
      happyHour: 'Monday - Friday 3pm - 6pm',
    },
    {
      name: 'Los Angeles',
      address: '1234 Hollywood Blvd, Los Angeles, CA 90028',
      phone: '(213)-456-7890',
      hours: {
        Monday: '10am - 8pm',
        Tuesday: '10am - 8pm',
        Wednesday: '10am - 8pm',
        Thursday: '10am - 8pm',
        Friday: '10am - 10pm',
        Saturday: '10am - 10pm',
        Sunday: '11am - 7pm',
      },
      happyHour: 'Monday - Friday 4pm - 7pm',
    },
    {
      name: 'San Francisco',
      address: '5678 Market St, San Francisco, CA 94102',
      phone: '(415)-123-4567',
      hours: {
        Monday: '9am - 10pm',
        Tuesday: '9am - 10pm',
        Wednesday: '9am - 10pm',
        Thursday: '9am - 10pm',
        Friday: '9am - 11pm',
        Saturday: '9am - 11pm',
        Sunday: '10am - 8pm',
      },
      happyHour: 'Monday - Friday 5pm - 8pm',
    },
    {
      name: 'San Diego',
      address: '9012 Ocean Ave, San Diego, CA 92109',
      phone: '(619)-987-6543',
      hours: {
        Monday: '8am - 9pm',
        Tuesday: '8am - 9pm',
        Wednesday: '8am - 9pm',
        Thursday: '8am - 9pm',
        Friday: '8am - 11pm',
        Saturday: '8am - 11pm',
        Sunday: '9am - 8pm',
      },
      happyHour: 'Monday - Friday 6pm - 9pm',
    },
  ];

  const handleLocationClick = (index: any) => {
    setSelectedLocation(index === selectedLocation ? null : index);
  };

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
        <div className="flex flex-col items-center w-full ">
          <p className="text-3xl font-bold mb-5">Visit Us</p>
          <div className="flex flex-col items-center w-full">
            {locations.map((location, index) => (
              <button
                key={index}
                onClick={() => handleLocationClick(index)}
                className={` w-auto mb-3 ${selectedLocation === index ? 'text-blue-500 font-bold' : ''}`}
              >
                {location.name}
              </button>
            ))}
          </div>
          {selectedLocation !== null && (
            <div className="flex flex-col items-center w-full m-8">
              <p className="text-xl font-bold mb-3">{locations[selectedLocation].name}</p>
              <p className="mb-3 underline">
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locations[selectedLocation].address)}`} target="_blank" rel="noopener noreferrer">
                  {locations[selectedLocation].address}
                </a>
              </p>
              <p className="mb-3">
                <a href={`tel:${locations[selectedLocation].phone}`} className="underline">
                  {locations[selectedLocation].phone}
                </a>
              </p>
              <div className="mb-8 text-center">
                {Object.entries(locations[selectedLocation].hours).map(([day, hours]) => (
                  <div key={day} className="mb-2">
                    <p className="font-bold">{day}</p>
                    <p>{hours}</p>
                  </div>
                ))}
              </div>
              <p className="font-bold text-center">Happy Hour</p>
              <p>{locations[selectedLocation].happyHour}</p>
              <button className="mt-8 px-6 py-3 bg-red-600 text-white text-lg font-bold rounded">
                Reserve A Table
              </button>
            </div>
          )}
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
