"use client";

import menuData from '@/../utils/menu.json';
import { menuType } from '../../../utils/types';
import { useState } from "react";

export default function MenuComponent() {
    const [selectedMenu, setSelectedMenu] = useState("brunch");
    const menuItem: menuType = menuData;
   
    return (
        <div id="Menu" className="flex flex-col items-center min-h-screen p-4">
        <h1 className="text-3xl font-bold mb-8">Menu</h1>
  
        <div className="max-w-3xl w-full overflow-hidden">
          {/* Menu Selection Buttons */}
          <div className="flex flex-wrap justify-evenly mb-4">
            {Object.keys(menuItem).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedMenu(category)}
                className={`menu-btn px-4 py-2 border rounded-lg ${
                  selectedMenu === category ? "bg-gray-300" : "bg-white"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="overflow-y-auto h-full">
            <div className="grid grid-cols-2 gap-y-0 gap-x-0 p-4">
              {Object.keys(menuItem[selectedMenu]).map((subcategory) => (
                <div key={subcategory} className="mb-6">
                  <h2 className="text-xl font-semibold mb-4 underline">
                    {subcategory}
                  </h2>
                  {menuItem[selectedMenu][subcategory].map(
                    (menuItem) => (
                      <div
                        key={menuItem.name}
                        className="p-3 flex flex-col md:flex-row items-start md:items-center mb-2 border-b"
                      >
                        <div className="md:ml-4">
                          <h3 className="text-lg font-semibold mb-2">
                            {menuItem.name} ~ ${menuItem.price}
                          </h3>
                          <p className="text-xs">{menuItem.ingredients}</p>
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
