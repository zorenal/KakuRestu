"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Menu() {
  const [selectedMenu, setSelectedMenu] = useState("lunch"); // Default to lunch menu

  interface MenuItem {
    name: string;
    price: number;
    ingredients: string;
    image?: string; // Image is optional
  }

  interface MenuCategory {
    [subcategory: string]: MenuItem[];
  }

  // Define menu items with subcategories
  const menuItems: { [key: string]: MenuCategory } = {
    lunch: {
      Sushi: [
        {
          name: "Sushi Gyro Wrap",
          price: 12,
          ingredients:
            "Sushi rice, Gyro meat, Tzatziki sauce, Lettuce, Tomato, Onion",
        },
        {
          name: "Falafel Sushi Roll",
          price: 11,
          ingredients:
            "Sushi rice, Falafel, Hummus, Cucumber, Tomato, Tahini sauce",
        },
        {
          name: "Sushi Dolma Wrap",
          price: 12,
          ingredients:
            "Grape leaves, Sushi rice, Tzatziki sauce, Gyro meat, Tomato, Onion",
        },
        {
          name: "Gyro Sushi Burrito",
          price: 13,
          ingredients:
            "Sushi rice, Gyro meat, Tzatziki sauce, Lettuce, Tomato, Onion, Nori seaweed",
        },
      ],
      Salads: [
        {
          name: "Greek Ramen Salad",
          price: 10,
          ingredients:
            "Ramen noodles, Feta cheese, Kalamata olives, Cucumber, Red onion, Greek dressing",
        },
        {
          name: "Sushi Dolma Wrap",
          price: 12,
          ingredients:
            "Grape leaves, Sushi rice, Tzatziki sauce, Gyro meat, Tomato, Onion",
        },
        {
          name: "Gyro Sushi Burrito",
          price: 13,
          ingredients:
            "Sushi rice, Gyro meat, Tzatziki sauce, Lettuce, Tomato, Onion, Nori seaweed",
        },
      ],
      Mains: [
        {
          name: "Persian Souvlaki Bowl",
          price: 11,
          ingredients:
            "Grilled chicken, Basmati rice, Tzatziki sauce, Hummus, Tabouleh",
        },
        {
          name: "Tempura Spanakopita",
          price: 14,
          ingredients:
            "Spinach, Feta cheese, Tempura batter, Dill yogurt sauce",
        },
        {
          name: "Miso Tzatziki Flatbread",
          price: 13,
          ingredients:
            "Flatbread, Miso sauce, Tzatziki sauce, Cucumber, Red onion",
        },
        {
          name: "Greek Bento Box",
          price: 15,
          ingredients: "Dolma, Spanakopita, Greek salad, Tzatziki sauce",
        },
        {
          name: "Persian Gyro Plate",
          price: 16,
          ingredients:
            "Gyro meat, Basmati rice, Hummus, Grilled vegetables, Pita bread",
        },
        {
          name: "Sushi Dolma Wrap",
          price: 12,
          ingredients:
            "Grape leaves, Sushi rice, Tzatziki sauce, Gyro meat, Tomato, Onion",
        },
        {
          name: "Gyro Sushi Burrito",
          price: 13,
          ingredients:
            "Sushi rice, Gyro meat, Tzatziki sauce, Lettuce, Tomato, Onion, Nori seaweed",
        },
      ],
    },
    dinner: {
      Sushi: [
        {
          name: "Tzatziki Sushi Roll",
          price: 18,
          ingredients:
            "Sushi rice, Tzatziki sauce, Cucumber, Gyro meat, Nori seaweed",
        },
        {
          name: "Sushi Dolma Platter",
          price: 19,
          ingredients:
            "Grape leaves, Sushi rice, Tzatziki sauce, Gyro meat, Tomato, Onion",
        },
        {
          name: "Sushi Dolma Wrap",
          price: 12,
          ingredients:
            "Grape leaves, Sushi rice, Tzatziki sauce, Gyro meat, Tomato, Onion",
        },
        {
          name: "Gyro Sushi Burrito",
          price: 13,
          ingredients:
            "Sushi rice, Gyro meat, Tzatziki sauce, Lettuce, Tomato, Onion, Nori seaweed",
        },
      ],
      Mains: [
        {
          name: "Miso Moussaka",
          price: 22,
          ingredients:
            "Eggplant, Ground beef, Miso sauce, Bechamel sauce, Parmesan cheese",
        },
        {
          name: "Kabob Baklava Platter",
          price: 20,
          ingredients:
            "Beef kabob, Chicken kabob, Baklava, Basmati rice, Grilled vegetables",
        },
        {
          name: "Tempura Spanakopita Pizza",
          price: 25,
          ingredients:
            "Pizza dough, Spinach, Feta cheese, Tempura batter, Dill yogurt sauce",
        },
        {
          name: "Miso Souvlaki Skewers",
          price: 19,
          ingredients:
            "Grilled chicken, Miso sauce, Basmati rice, Tzatziki sauce",
        },
        {
          name: "Greek Katsu Curry",
          price: 21,
          ingredients: "Chicken katsu, Curry sauce, Basmati rice, Greek salad",
        },
        {
          name: "Persian Gyro Burger",
          price: 17,
          ingredients:
            "Gyro meat patty, Pita bun, Tzatziki sauce, Hummus, Lettuce, Tomato",
        },
        {
          name: "Gyro Tempura Udon",
          price: 20,
          ingredients:
            "Udon noodles, Gyro meat, Tempura batter, Dashi broth, Green onion",
        },
        {
          name: "Miso Moussaka Lasagna",
          price: 23,
          ingredients:
            "Lasagna noodles, Eggplant, Ground beef, Miso sauce, Bechamel sauce",
        },
      ],
    },
    drinks: {
      Cocktails: [
        {
          name: "Sake Mojito",
          price: 14,
          ingredients: "Sake, Mint leaves, Lime, Simple syrup, Soda water",
        },
        {
          name: "Ouzo Cosmopolitan",
          price: 13,
          ingredients: "Ouzo, Triple sec, Cranberry juice, Lime juice",
        },
        {
          name: "Pomegranate Saketini",
          price: 12,
          ingredients: "Sake, Pomegranate juice, Lime juice, Simple syrup",
        },
        {
          name: "Miso Bloody Mary",
          price: 11,
          ingredients:
            "Vodka, Miso paste, Tomato juice, Worcestershire sauce, Lemon juice",
        },
        {
          name: "Greek Mojito",
          price: 10,
          ingredients: "Ouzo, Mint leaves, Lime, Simple syrup, Soda water",
        },
      ],
      NonAlcoholic: [
        {
          name: "Persian Iced Tea",
          price: 9,
          ingredients: "Black tea, Cardamom, Rose water, Sugar, Lemon wedge",
        },
        {
          name: "Matcha Frappé",
          price: 10,
          ingredients: "Matcha powder, Milk, Ice, Whipped cream",
        },
        {
          name: "Ginger Saffron Lemonade",
          price: 8,
          ingredients: "Ginger, Saffron, Lemon, Sugar, Soda water",
        },
        {
          name: "Greek Yogurt Lassi",
          price: 7,
          ingredients: "Greek yogurt, Milk, Honey, Cardamom",
        },
        {
          name: "Wasabi Tsipouro Shot",
          price: 6,
          ingredients: "Tsipouro, Wasabi paste",
        },
      ],
    },
    desserts: {
      Cakes: [
        {
          name: "Matcha Baklava Cheesecake",
          price: 10,
          ingredients:
            "Matcha powder, Baklava, Cream cheese, Graham cracker crust",
        },
        {
          name: "Sushi Dolma Wrap",
          price: 12,
          ingredients:
            "Grape leaves, Sushi rice, Tzatziki sauce, Gyro meat, Tomato, Onion",
        },
        {
          name: "Gyro Sushi Burrito",
          price: 13,
          ingredients:
            "Sushi rice, Gyro meat, Tzatziki sauce, Lettuce, Tomato, Onion, Nori seaweed",
        },
      ],
      Pastries: [
        {
          name: "Baklava Mochi",
          price: 8,
          ingredients: "Glutinous rice flour, Baklava, Honey, Pistachios",
        },
        {
          name: "Saffron Loukoumades",
          price: 9,
          ingredients: "Yeast, Flour, Saffron syrup, Walnuts, Cinnamon",
        },
        {
          name: "Yuzu Galaktoboureko",
          price: 11,
          ingredients: "Yuzu, Phyllo dough, Custard, Syrup",
        },
        {
          name: "Mochi Bougatsa",
          price: 9,
          ingredients:
            "Glutinous rice flour, Custard, Phyllo dough, Powdered sugar",
        },
      ],
      Other: [
        {
          name: "Greek Yogurt Panna Cotta",
          price: 8,
          ingredients: "Greek yogurt, Gelatin, Honey, Berries",
        },
        {
          name: "Sushi Dolma Wrap",
          price: 12,
          ingredients:
            "Grape leaves, Sushi rice, Tzatziki sauce, Gyro meat, Tomato, Onion",
        },
        {
          name: "Gyro Sushi Burrito",
          price: 13,
          ingredients:
            "Sushi rice, Gyro meat, Tzatziki sauce, Lettuce, Tomato, Onion, Nori seaweed",
        },
      ],
    },
  };

  return (
    <div id="Menu" className="flex flex-col items-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-8">Menu</h1>

      <div className="max-w-6xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        {/* Menu Selection Buttons */}
        <div className="flex flex-wrap justify-evenly mb-4">
          {Object.keys(menuItems).map((category) => (
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
            {Object.keys(menuItems[selectedMenu]).map((subcategory) => (
              <div key={subcategory} className="mb-6">
                <h2 className="text-xl font-semibold mb-4 underline">
                  {subcategory}
                </h2>
                {menuItems[selectedMenu][subcategory].map(
                  (menuItem: MenuItem, index: number) => (
                    <div
                      key={index}
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
