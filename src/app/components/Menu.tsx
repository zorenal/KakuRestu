"use client";

import menuData from '@/../utils/menu.json';
import { menuType } from '../../../utils/types';
import { useState } from "react";

export default function MenuComponent() {
    const [selectedMenu, setSelectedMenu] = useState("brunch");
    const menuItem: menuType = menuData;
   
    return (
        <section className='mt-10 h-screen'>
            <div className="flex justify-evenly">
                {Object.keys(menuItem).map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedMenu(category)}
                        className={`px-4 py-2 ${selectedMenu === category ? "bg-gray-400" : "bg-white"}`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
       
            <div className="overflow-y-hidden">
                <div className="grid grid-cols-2 gap-y-0 gap-x-0 p-4">
                    {Object.keys(menuItem[selectedMenu]).map((subcategory) => (
                        <div key={subcategory} className="m-5">
                            <h2 className="text-xl font-semibold underline">
                                {subcategory}
                            </h2>
                            {menuItem[selectedMenu][subcategory].map((item) => (
                                <div
                                    key={item.name}
                                    className="p-3 flex flex-col md:flex-row items-start md:items-center mb-2 border-b"
                                >
                                    <div className="md:ml-4">
                                        <h3 className="text-lg font-semibold mb-2">
                                            {item.name} ~ ${item.price}
                                        </h3>
                                        <p className="text-xs">{item.ingredients}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
