"use client";

import { useState } from "react";
import locationData from "@/../utils/locations.json";
import { locationType } from "../../../utils/types";
import Image from "next/image";

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locationInfo: locationType = locationData;

  const handleLocationClick = (location: string) => {
    setSelectedLocation(location);
  };

  return (
<section className="flex flex-col h-screen">
  {/* image */}
  <div className="h-1/3 sm:h-1/2 relative">
    <Image
      src={
        selectedLocation && locationInfo[selectedLocation].image
          ? locationInfo[selectedLocation].image
          : "/rstock.jpg"
      }
      alt={`${selectedLocation || 'default'} image`}
      layout="fill"
      objectFit="cover"
      className="-z-10 transition-opacity duration-1000 ease-in-out opacity-100 "
    />
  </div>

  {/* content */}
  <div className="flex flex-col  justify-between items-center">
    {/* buttons */}
    <div className="mt-4">
      <ul className="flex flex-col items-center">
        {Object.keys(locationInfo).map((loc) => (
          <li key={loc} className="mb-2">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => handleLocationClick(loc)}
            >
              {loc}
            </button>
          </li>
        ))}
      </ul>
    </div>

    {/* info */}
    <div className="w-screen p-4">
    {selectedLocation && (
      <div className="text-center">
        <h2 className="text-2xl font-bold">{selectedLocation}</h2>
        <p className="mt-2 underline">{locationInfo[selectedLocation].address}</p>
        <p className="mt-2 underline">{locationInfo[selectedLocation].phone}</p>
        <p className="mt-4 font-bold">Hours:</p>
        <ul>
          {Object.entries(locationInfo[selectedLocation].hours).map(([day, time]) => (
            <li key={day}>
              <span className="font-bold">{day}</span>: <span>{time}</span>
            </li>
          ))}
        </ul>
        {locationInfo[selectedLocation].happyHour && (
          <p className="mt-4 font-bold">
            Happy Hour: {locationInfo[selectedLocation].happyHour}
          </p>
        )}
      </div>
    )}
  </div>
  </div>
</section>

  );
}
