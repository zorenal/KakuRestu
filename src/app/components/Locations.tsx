"use client";

import { useState, useEffect } from "react";
import locationData from "@/../utils/locations.json";
import { locationType } from "../../../utils/types";
import Image from "next/image";
import Link from "next/link";

export default function LocationsComponent() {
  const locationInfo: locationType = locationData;
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [src, setSrc] = useState<string>("/Locationhero.jpg");
  const [fade, setFade] = useState<boolean>(false);

  const handleLocationClick = (location: string) => {
    setSelectedLocation(location);
  };

  useEffect(() => {
    if (selectedLocation) {
      setFade(true);
      setTimeout(() => {
        setSrc(locationInfo[selectedLocation]?.image || "/Locationhero.jpg");
        setFade(false);
      }, 500);
    } else {
      setSrc("/Locationhero.jpg");
    }
  }, [selectedLocation, locationInfo]);

  return (
    <section className="flex flex-col text-center w-full text-white ">
      {/* image */}
      <div
        className={`h-screen relative transition-opacity duration-500 ease-in-out ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <Image
          src={src}
          alt={`${selectedLocation || "default"} image`}
          fill
          priority={true}
          objectFit="cover"
        />
      </div>

      {/* content */}
      <h1 className="text-3xl sm:text-5xl font-bold mb-8 overflow-hidden mt-10">
        Hours and Locations
      </h1>
      <div className=" justify-between items-center min-h-screen">
        {/* buttons */}
        <div className="mt-4 w-screen ">
          <div className="flex justify-center items-center">
            {Object.keys(locationInfo).map((loc) => (
                <button
                  key={loc}
                  className={` mb-2 mx-1 sm:mx-5 p-2 text-black rounded text-xl sm:text-2xl hover:bg-gray-500 transition-all duration-300  ${
                    selectedLocation === loc ? "bg-gray-500 p-5 " : "bg-white"
                  }`}
                  onClick={() => handleLocationClick(loc)}
                >
                  {loc}
                </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center w-screen p-4">
          <div className={`text-center  ${selectedLocation ? "border-black p-10 border-2" : "border-0"}`}>
            <h2 className="text-3xl sm:text-4xl  overflow-hidden">{selectedLocation}</h2>
            <p className="m-5 underline text-xl sm:text-2xl overflow-hidden">
              {selectedLocation ? (
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationInfo[selectedLocation].address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {locationInfo[selectedLocation].address}
                </Link>
              ) : (
                ""
              )}
            </p>
            <p className="m-5 underline text-xl sm:text-2xl overflow-hidden">
              {selectedLocation ? (
                <Link href={`${locationInfo[selectedLocation].phone}`}>
                  {locationInfo[selectedLocation].phone}
                </Link>
              ) : (
                ""
              )}
            </p>
            <ul>
              {selectedLocation ? (
                Object.entries(locationInfo[selectedLocation].hours).map(
                  ([day, time]) => (
                    <li key={day} className="m-5">
                      <span className="font-bold text-xl sm:text-2xl">{day}</span>:{" "}
                      <span className="text-xl sm:text-2xl">{time}</span>
                    </li>
                  )
                )
              ) : (
                <></>
              )}
            </ul>
            {selectedLocation && locationInfo[selectedLocation].happyHour ? (
              <p className="mt-4 text-xl sm:text-2xl">
                Happy Hour: {locationInfo[selectedLocation].happyHour}
              </p>
            ) : (
              <></>
            )}
            <div className="hidden sm:flex w-full justify-center items-center mt-5">
        {selectedLocation && locationInfo[selectedLocation].map ? (
              <iframe src={`${locationInfo[selectedLocation].map}`} width="800" height="400" loading="lazy"/>
            ) : (
              <></>
            )}
        </div>
          </div>
        </div>
      </div>
      <div className="flex w-screen justify-center items-center mb-5 sm:hidden">
        {selectedLocation && locationInfo[selectedLocation].map ? (
              <iframe src={`${locationInfo[selectedLocation].map}`} width="800" height="400" loading="lazy"/>
            ) : (
              <></>
            )}
        </div>
    </section>
  );
}
