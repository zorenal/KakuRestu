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
    
    <section>
                {/* image */}
        <div className="h-1/2 sm:h-1/2 overflow-y-hidden">
          {selectedLocation && (
            <div>
              {locationInfo[selectedLocation].image && (
                <Image
                  src={locationInfo[selectedLocation].image}
                  alt={`${selectedLocation} image`}
                 fill
                  objectFit="contain"
                  className="-z-50 max-h-1/2"
                />
              )}
            </div>
          )}
        </div>



      <div className="h-screen flex flex-col justify-center items-center">

        {/* buttons */}
        <div className="w-1/4">
          <ul>
            {Object.keys(locationInfo).map((loc) => (
              <li key={loc}>
                <button
                  className="justify"
                  onClick={() => handleLocationClick(loc)}
                >
                  {loc}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* info */}
        <div className="w-screen ">
          {selectedLocation && (
            <div>
              <h2>{selectedLocation}</h2>

              <p>{locationInfo[selectedLocation].address}</p>

              <p>Phone: {locationInfo[selectedLocation].phone}</p>

              <p>
                <strong>Hours:</strong>
              </p>
              <ul>
                {Object.entries(locationInfo[selectedLocation].hours).map(
                  ([day, time]) => (
                    <li key={day}>
                      {day}: {time}
                    </li>
                  )
                )}
              </ul>

              {locationInfo[selectedLocation].happyHour && (
                <p>
                  <strong>Happy Hour:</strong>{" "}
                  {locationInfo[selectedLocation].happyHour}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
