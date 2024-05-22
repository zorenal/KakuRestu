'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export default function Menu() {
    const [selectedMenu, setSelectedMenu] = useState('lunch'); // Default to lunch menu

    interface MenuItem {
        name: string;
        price: number;
        ingredients: string;
        image?: string; // Image is optional
    }
    // Define menu items with ingredients
    const menuItems: { [key: string]: MenuItem[] } = {
        lunch: [
            { name: 'Sushi Gyro Wrap', price: 12, ingredients: 'Sushi rice, Gyro meat, Tzatziki sauce, Lettuce, Tomato, Onion', image: '/g1.jpg' },
            { name: 'Greek Ramen Salad', price: 10, ingredients: 'Ramen noodles, Feta cheese, Kalamata olives, Cucumber, Red onion, Greek dressing', image: '/g2.jpg' },
            { name: 'Persian Souvlaki Bowl', price: 11, ingredients: 'Grilled chicken, Basmati rice, Tzatziki sauce, Hummus, Tabouleh', image: '/g3.jpg' },
            { name: 'Tempura Spanakopita', price: 14, ingredients: 'Spinach, Feta cheese, Tempura batter, Dill yogurt sauce', image: '/g5.jpg' },
            { name: 'Miso Tzatziki Flatbread', price: 13, ingredients: 'Flatbread, Miso sauce, Tzatziki sauce, Cucumber, Red onion' },
            { name: 'Falafel Sushi Roll', price: 11, ingredients: 'Sushi rice, Falafel, Hummus, Cucumber, Tomato, Tahini sauce' },
            { name: 'Greek Bento Box', price: 15, ingredients: 'Dolma, Spanakopita, Greek salad, Tzatziki sauce' },
            { name: 'Sushi Dolma Wrap', price: 12, ingredients: 'Grape leaves, Sushi rice, Tzatziki sauce, Gyro meat, Tomato, Onion' },
            { name: 'Persian Gyro Plate', price: 16, ingredients: 'Gyro meat, Basmati rice, Hummus, Grilled vegetables, Pita bread' },
            { name: 'Gyro Sushi Burrito', price: 13, ingredients: 'Sushi rice, Gyro meat, Tzatziki sauce, Lettuce, Tomato, Onion, Nori seaweed' },
            // Add more lunch items as needed
        ],
        dinner: [
            { name: 'Miso Moussaka', price: 22, ingredients: 'Eggplant, Ground beef, Miso sauce, Bechamel sauce, Parmesan cheese' },
            { name: 'Tzatziki Sushi Roll', price: 18, ingredients: 'Sushi rice, Tzatziki sauce, Cucumber, Gyro meat, Nori seaweed' },
            { name: 'Kabob Baklava Platter', price: 20, ingredients: 'Beef kabob, Chicken kabob, Baklava, Basmati rice, Grilled vegetables' },
            { name: 'Tempura Spanakopita Pizza', price: 25, ingredients: 'Pizza dough, Spinach, Feta cheese, Tempura batter, Dill yogurt sauce' },
            { name: 'Miso Souvlaki Skewers', price: 19, ingredients: 'Grilled chicken, Miso sauce, Basmati rice, Tzatziki sauce' },
            { name: 'Greek Katsu Curry', price: 21, ingredients: 'Chicken katsu, Curry sauce, Basmati rice, Greek salad' },
            { name: 'Persian Gyro Burger', price: 17, ingredients: 'Gyro meat patty, Pita bun, Tzatziki sauce, Hummus, Lettuce, Tomato' },
            { name: 'Sushi Dolma Platter', price: 19, ingredients: 'Grape leaves, Sushi rice, Tzatziki sauce, Gyro meat, Tomato, Onion' },
            { name: 'Gyro Tempura Udon', price: 20, ingredients: 'Udon noodles, Gyro meat, Tempura batter, Dashi broth, Green onion' },
            { name: 'Miso Moussaka Lasagna', price: 23, ingredients: 'Lasagna noodles, Eggplant, Ground beef, Miso sauce, Bechamel sauce' },
            // Add more dinner items as needed
        ],
        drinks: [
            { name: 'Sake Mojito', price: 14, ingredients: 'Sake, Mint leaves, Lime, Simple syrup, Soda water' },
            { name: 'Ouzo Cosmopolitan', price: 13, ingredients: 'Ouzo, Triple sec, Cranberry juice, Lime juice' },
            { name: 'Persian Iced Tea', price: 9, ingredients: 'Black tea, Cardamom, Rose water, Sugar, Lemon wedge' },
            { name: 'Matcha Frappé', price: 10, ingredients: 'Matcha powder, Milk, Ice, Whipped cream' },
            { name: 'Ginger Saffron Lemonade', price: 8, ingredients: 'Ginger, Saffron, Lemon, Sugar, Soda water' },
            { name: 'Greek Yogurt Lassi', price: 7, ingredients: 'Greek yogurt, Milk, Honey, Cardamom' },
            { name: 'Wasabi Tsipouro Shot', price: 6, ingredients: 'Tsipouro, Wasabi paste' },
            { name: 'Pomegranate Saketini', price: 12, ingredients: 'Sake, Pomegranate juice, Lime juice, Simple syrup' },
            { name: 'Miso Bloody Mary', price: 11, ingredients: 'Vodka, Miso paste, Tomato juice, Worcestershire sauce, Lemon juice' },
            { name: 'Greek Mojito', price: 10, ingredients: 'Ouzo, Mint leaves, Lime, Simple syrup, Soda water' },
            // Add more drinks as needed
        ],
        desserts: [
            { name: 'Matcha Baklava Cheesecake', price: 10, ingredients: 'Matcha powder, Baklava, Cream cheese, Graham cracker crust' },
            { name: 'Baklava Mochi', price: 8, ingredients: 'Glutinous rice flour, Baklava, Honey, Pistachios' },
            { name: 'Saffron Loukoumades', price: 9, ingredients: 'Yeast, Flour, Saffron syrup, Walnuts, Cinnamon' },
            { name: 'Yuzu Galaktoboureko', price: 11, ingredients: 'Yuzu, Phyllo dough, Custard, Syrup' },
            { name: 'Greek Yogurt Panna Cotta', price: 8, ingredients: 'Greek yogurt, Gelatin, Honey, Berries' },
            { name: 'Mochi Bougatsa', price: 9, ingredients: 'Glutinous rice flour, Custard, Phyllo dough, Powdered sugar' },
            { name: 'Baklava Mochi', price: 8, ingredients: 'Glutinous rice flour, Baklava, Honey, Pistachios' },
            { name: 'Saffron Loukoumades', price: 9, ingredients: 'Yeast, Flour, Saffron syrup, Walnuts, Cinnamon' },
            // Add more desserts as needed
        ],
    };

    return (
        <div id="Menu" className="flex flex-col items-center min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Restaurant Menu</h1>
        
            <div className="max-w-6xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        
                {/* Menu Selection Buttons */}
                <div className="flex justify-around mb-4">
                    {Object.keys(menuItems).map((category) => (
                        <button key={category} onClick={() => setSelectedMenu(category)} className={`menu-btn ${selectedMenu === category && 'active'} px-4 py-2`}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>


                <div className="overflow-y-auto h-full">
                <div className="grid grid-cols-2 gap-4 p-4">
                    {menuItems[selectedMenu].map((menuItem: any, index: number) => (
                        <div key={index} className="bg-gray-200 p-4 rounded-lg flex items-center">
                            <div className="w-64 h-32 flex-shrink-0 relative">
                                <Image
                                    src={menuItem.image}
                                    alt={menuItem.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded"
                                />
                            </div>
                            <div className="ml-4">
                                <h2 className="text-lg font-semibold mb-2">{menuItem.name}, {menuItem.price}</h2>
                                <p className="text-xs">{menuItem.ingredients}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        
            </div>
        </div>
    );
    
}
