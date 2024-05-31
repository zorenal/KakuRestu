"use client";

import menuData from '@/../utils/menu.json';
import { menuType } from '../../../utils/types';
import { useState } from "react";

export default function MenuComponent() {
    const [selectedMenu, setSelectedMenu] = useState<string>("brunch");
    const menuItem: menuType = menuData;
   
    return (
        <div id="Menu" className="flex flex-col items-center min-h-screen p-4 text-white">
        <h1 className="text-3xl sm:text-5xl font-bold mb-8 overflow-hidden mt-10">Menu</h1>
  
        <div className="max-w-3xl w-full overflow-hidden">
          <div className="flex flex-wrap justify-evenly mb-4">
            {Object.keys(menuItem).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedMenu(category)}
                className={`text-xl sm:text-2xl  menu-btn px-3 sm:px-4 py-2 border rounded-lg text-black hover:bg-gray-500 transition-all duration-300 ${
                  selectedMenu === category ? "bg-gray-500" : "bg-white"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="overflow-y-auto h-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-0 gap-x-0 p-4">
              {Object.keys(menuItem[selectedMenu]).map((subcategory) => (
                <div key={subcategory} className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-4 underline overflow-hidden">
                    {subcategory}
                  </h2>
                  {menuItem[selectedMenu][subcategory].map(
                    (menuItem) => (
                      <div
                        key={menuItem.name}
                        className="p-3 flex flex-col md:flex-row items-start md:items-center mb-2 border-b "
                      >
                        <div className="md:ml-4">
                          <h3 className="text-xl sm:text-2xl  font-semibold mb-2 ">
                            {menuItem.name} ~ ${menuItem.price}
                          </h3>
                          <p className="text-l sm:text-xl text-gray-500">{menuItem.ingredients}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
