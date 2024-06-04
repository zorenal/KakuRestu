"use client";

import menuData from "@/../utils/menu.json";
import { menuType } from "../../../utils/types";
import { useState } from "react";

export default function MenuComponent() {
  const [selectedMenu, setSelectedMenu] = useState<string>("brunch");
  const [fade, setFade] = useState<boolean>(false);

  const handleMenuChange = (category: string) => {
    setFade(true);
    setTimeout(() => {
      setSelectedMenu(category);
      setFade(false);
    }, 300); // Duration of the fade-out animation
  };

  const menuItem: menuType = menuData;

  return (
    <div
      id="Menu"
      className="flex flex-col items-center min-h-screen p-4 text-white"
    >
      <h1 className="text-3xl sm:text-5xl font-bold mb-8 overflow-hidden mt-10">
        Menu
      </h1>

      <div className="max-w-3xl w-full overflow-hidden">
        <div className="flex justify-center items-center">
          {Object.keys(menuItem).map((category) => (
            <button
              key={category}
              onClick={() => handleMenuChange(category)}
              className={`mb-2 mx-1 sm:mx-5 p-2 text-black rounded text-xl sm:text-2xl hover:bg-gray-500 transition-all duration-300 ${
                selectedMenu === category ? "bg-gray-500 p-5" : "bg-white"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="overflow-y-auto h-3/4 border-black p-10 border-2 mt-4">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-y-0 gap-x-0 p-4 transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            {Object.keys(menuItem[selectedMenu]).map((subcategory) => (
              <div key={subcategory} className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 underline overflow-hidden">
                  {subcategory}
                </h2>
                {menuItem[selectedMenu][subcategory].map((menuItem) => (
                  <div
                    key={menuItem.name}
                    className="p-3 flex flex-col md:flex-row items-start md:items-center mb-2"
                  >
                    <div className="md:ml-4">
                      <h3 className="text-xl sm:text-2xl font-semibold mb-2 flex justify-between">
                        <span>{menuItem.name}</span>
                        <span>{menuItem.price}</span>
                      </h3>
                      <p className="text-l sm:text-xl text-gray-500">
                        {menuItem.ingredients}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
