"use client";

import { useState, useEffect } from "react";
import locationData from "@/../utils/locations.json";
import { locationType } from "../../../utils/types";
import Image from "next/image";

export default function LocationsComponent() {


 const locationInfo: locationType = locationData;
 const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
 const [src, setSrc] = useState<string>('/rstock.jpg');
 const [fade, setFade] = useState<boolean>(false);

  const handleLocationClick = (location: string) => {
    setSelectedLocation(location);
  };
  
  useEffect(() => {
    if (selectedLocation) {
      setFade(true);
      setTimeout(() => {
        setSrc(locationInfo[selectedLocation]?.image || '/rstock.jpg');
        setFade(false);
      }, 500);
    } else {
      setSrc('/rstock.jpg');
    }
  }, [selectedLocation, locationInfo]);

  return (
    <section className="flex flex-col">
     
      {/* image */}
    <div className={`h-screen relative transition-opacity duration-500 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`} >
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
  <Image
    src={src}
    alt={`${selectedLocation || 'default'} image`}
    fill
    objectFit="cover"
  />
</div>

  {/* content */}
  <div className=" justify-between items-center h-screen">
    {/* buttons */}
    <div className="mt-4 w-screen ">
      <ul className="flex flex-col items-center">
        {Object.keys(locationInfo).map((loc) => (
          <li key={loc} className="mb-2">
            <button
              className={`p-2 text-white rounded ${selectedLocation === loc ? "bg-red-500 p-5 " : 'bg-blue-500'}`}
              onClick={() => handleLocationClick(loc)}
            >
              {loc}
            </button>
          </li>
        ))}
      </ul>
    </div>

    {/* info */}
    {/* <div className="w-screen p-4">
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
  </div> */}

  <div className="w-screen p-4">
      <div className='text-center'>
        <h2 className="text-2xl font-bold">
          {selectedLocation}
        </h2>
        <p className="mt-2 underline">
          {selectedLocation ? locationInfo[selectedLocation].address : ''}
        </p>
        <p className="mt-2 underline">
          {selectedLocation ? locationInfo[selectedLocation].phone : ''}
        </p>
        <ul>
          {selectedLocation ? (
            Object.entries(locationInfo[selectedLocation].hours).map(([day, time]) => (
              <li key={day}>
                <span className="font-bold">{day}</span>: <span>{time}</span>
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
        {selectedLocation && locationInfo[selectedLocation].happyHour ? (
          <p className="mt-4 font-bold">
            Happy Hour: {locationInfo[selectedLocation].happyHour}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>

  </div>
</section>

  );
}
