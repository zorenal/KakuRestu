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
      <div className="h-1/2 relative">
        {selectedLocation && locationInfo[selectedLocation].image && (
          <Image
            src={locationInfo[selectedLocation].image}
            alt={`${selectedLocation} image`}
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        )}
      </div>

      {/* content */}
      <div className="flex flex-col flex-grow justify-between items-center">
        {/* buttons */}
        <div className="w-1/4 mt-4">
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
        <div className="w-screen p-4 mt-4">
          {selectedLocation && (
            <div className="text-center">
              <h2 className="text-2xl font-bold">{selectedLocation}</h2>
              <p className="mt-2">{locationInfo[selectedLocation].address}</p>
              <p className="mt-2">Phone: {locationInfo[selectedLocation].phone}</p>
              <p className="mt-4 font-bold">Hours:</p>
              <ul className="list-disc list-inside">
                {Object.entries(locationInfo[selectedLocation].hours).map(
                  ([day, time]) => (
                    <li key={day}>
                      {day}: {time}
                    </li>
                  )
                )}
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
