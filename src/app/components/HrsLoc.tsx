"use client";
import { useState } from 'react';
import Link from 'next/link';
export default function HrsnLoc() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      name: 'Santa Clara',
      address: '2788 San Tomas Expy, Santa Clara, CA 95051',
      phone: '(408)-653-7000',
      hours: {
        "Monday - Thursday": '10am - 8pm',
        Friday: '10am - 10pm',
        Saturday: '10am - 12am',
        Sunday: '9am - 8pm',
      },
      happyHour: 'Monday - Friday 3pm - 6pm',
      image: '/out1.jpg'
    },
    {
      name: 'Los Angeles',
      address: '1234 Hollywood Blvd, Los Angeles, CA 90028',
      phone: '(213)-456-7890',
      hours: {
        "Monday - Thursday": '10am - 8pm',
        Friday: '10am - 10pm',
        Saturday: '10am - 12am',
        Sunday: '9am - 8pm',
      },
      happyHour: 'Monday - Friday 4pm - 7pm',
      image: '/out2.jpg'
    },
    {
      name: 'San Francisco',
      address: '5678 Market St, San Francisco, CA 94102',
      phone: '(415)-123-4567',
      hours: {
        "Monday - Thursday": '10am - 8pm',
        Friday: '10am - 10pm',
        Saturday: '10am - 12am',
        Sunday: '9am - 8pm',
      },
      happyHour: 'Monday - Friday 3pm - 6pm',
      image: '/out3.jpg'
    },
    {
      name: 'San Diego',
      address: '9012 Ocean Ave, San Diego, CA 92109',
      phone: '(619)-987-6543',
      hours: {
        "Monday - Thursday": '10am - 8pm',
        Friday: '10am - 10pm',
        Saturday: '10am - 12am',
        Sunday: '9am - 8pm',
      },
      happyHour: 'Monday - Friday 3pm - 6pm',
      image: '/out4.jpg'
    },
  ];

  const handleLocationClick = (index: any) => {
    setSelectedLocation(index === selectedLocation ? null : index);
  };

  return (
    <section id="Hours&Location" className="flex flex-col sm:flex-row sm:h-screen justify-center m-5">
    {/* Information section */}
    <div className="flex items-center sm:items-start border border-dotted border-black w-full sm:w-1/2 overflow-hidden">
      <div className="flex flex-col items-center w-full">
        <p className="text-2xl sm:text-3xl font-bold mb-5 mt-5">Visit Us</p>
        <div className="flex flex-col items-center w-full">
          {locations.map((location, index) => (
            <button
              key={index}
              onClick={() => handleLocationClick(index)}
              className={`w-auto mb-3 border rounded-lg p-2 ${selectedLocation === index ? 'bg-black bg-opacity-10 font-bold' : ''}`}
            >
              <span className="text-sm sm:text-base">{location.name}</span>
            </button>
          ))}
        </div>
        {locations.map((location, index) => (
          <div
            key={index}
            className={`flex transition-all duration-1000 ease-in-out  ${selectedLocation === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
          > 
            <div className="flex flex-col items-center w-full m-8">
              <p className="text-lg sm:text-xl font-bold mb-3">{location.name}</p>
              <p className="text-sm sm:text-base mb-3 underline text-center">
                <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`} target="_blank" rel="noopener noreferrer">
                  {location.address}
                </Link>
              </p>
              <p className="text-sm sm:text-base mb-3">
                <Link href={`tel:${location.phone}`} className="underline">
                  {location.phone}
                </Link>
              </p>
              <div className="mb-8 text-center">
                {Object.entries(location.hours).map(([day, hours]) => (
                  <div key={day} className="text-sm sm:text-base mb-2">
                    <p className="font-bold">{day}</p>
                    <p>{hours}</p>
                  </div>
                ))}
              </div>
              <p className="font-bold text-center">Happy Hour</p>
              <p className="text-sm sm:text-base">{location.happyHour}</p>
              <button className="mt-8 px-6 py-3 bg-red-600 text-white text-lg font-bold rounded">
                Reserve A Table
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  
    {/* Desktop view */}
    <div className="hidden sm:flex justify-center w-full sm:w-1/2">
      {locations.map((location, index) => (
        <div
          key={index}
          className={`flex justify-center transition-all duration-1000 ease-in-out  ${selectedLocation === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        > 
          <img
            src={`${location.image}`}
            alt="Location Image"
            className="w-full object-cover h-full"
          />
        </div>
      ))}
    </div>
  </section>
  
  );
}