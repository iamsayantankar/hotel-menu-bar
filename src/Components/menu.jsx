import React, { useState } from "react";
import Title from "./title";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("COFFEE");
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const coffeeItems = [
    {
      id: "01",
      name: "Espresso",
      price: 9.99,
      description:
        "A bold and concentrated coffee experience, brewed to perfection with a rich and intense flavor profile.",
    },
    {
      id: "02",
      name: "Cappuccino",
      price: 8.99,
      description:
        "A classic combination of espresso, steamed milk, and velvety milk foam, creating a harmonious balance of flavors and textures.",
    },
    {
      id: "03",
      name: "Latte",
      price: 7.99,
      description:
        "Indulge in a creamy and comforting blend of espresso and steamed milk, topped with a delicate layer of foam for a smooth and satisfying sip.",
    },
    {
      id: "04",
      name: "Macchiato",
      price: 10.99,
      description:
        'Discover the art of contrast with a shot of espresso "stained" with a dollop of frothy milk, delivering a bold espresso taste with a hint of creamy sweetness.',
    },
    {
      id: "05",
      name: "Black Coffee",
      price: 8.99,
      description:
        "Pure and unadulterated, this traditional favorite showcases the full-bodied flavor and aroma of carefully brewed coffee beans, served without milk or sweeteners.",
    },
  ];

  const teaItems = [
    {
      id: "01",
      name: "Green Tea",
      price: 6.99,
      description: "A light and refreshing tea with subtle herbal notes.",
    },
    {
      id: "02",
      name: "Cappuccino",
      price: 8.99,
      description:
        "A classic combination of espresso, steamed milk, and velvety milk foam, creating a harmonious balance of flavors and textures.",
    },
    {
      id: "03",
      name: "Latte",
      price: 7.99,
      description:
        "Indulge in a creamy and comforting blend of espresso and steamed milk, topped with a delicate layer of foam for a smooth and satisfying sip.",
    },
    {
      id: "04",
      name: "Macchiato",
      price: 10.99,
      description:
        'Discover the art of contrast with a shot of espresso "stained" with a dollop of frothy milk, delivering a bold espresso taste with a hint of creamy sweetness.',
    },
    {
      id: "05",
      name: "Black Coffee",
      price: 8.99,
      description:
        "Pure and unadulterated, this traditional favorite showcases the full-bodied flavor and aroma of carefully brewed coffee beans, served without milk or sweeteners.",
    },
    // Add more tea items as needed
  ];

  const pastryItems = [
    {
      id: "01",
      name: "Croissant",
      price: 4.99,
      description: "Flaky, buttery layers of freshly baked perfection.",
    },
    {
      id: "02",
      name: "Cappuccino",
      price: 8.99,
      description:
        "A classic combination of espresso, steamed milk, and velvety milk foam, creating a harmonious balance of flavors and textures.",
    },
    {
      id: "03",
      name: "Latte",
      price: 7.99,
      description:
        "Indulge in a creamy and comforting blend of espresso and steamed milk, topped with a delicate layer of foam for a smooth and satisfying sip.",
    },
    {
      id: "04",
      name: "Macchiato",
      price: 10.99,
      description:
        'Discover the art of contrast with a shot of espresso "stained" with a dollop of frothy milk, delivering a bold espresso taste with a hint of creamy sweetness.',
    },
    {
      id: "05",
      name: "Black Coffee",
      price: 8.99,
      description:
        "Pure and unadulterated, this traditional favorite showcases the full-bodied flavor and aroma of carefully brewed coffee beans, served without milk or sweeteners.",
    },

    // Add more pastry items as needed
  ];

  const beverageItems = [
    {
      id: "01",
      name: "Fresh Orange Juice",
      price: 5.99,
      description: "Freshly squeezed oranges for a natural refreshing drink.",
    },
    {
      id: "02",
      name: "Cappuccino",
      price: 8.99,
      description:
        "A classic combination of espresso, steamed milk, and velvety milk foam, creating a harmonious balance of flavors and textures.",
    },
    {
      id: "03",
      name: "Latte",
      price: 7.99,
      description:
        "Indulge in a creamy and comforting blend of espresso and steamed milk, topped with a delicate layer of foam for a smooth and satisfying sip.",
    },
    {
      id: "04",
      name: "Macchiato",
      price: 10.99,
      description:
        'Discover the art of contrast with a shot of espresso "stained" with a dollop of frothy milk, delivering a bold espresso taste with a hint of creamy sweetness.',
    },
    {
      id: "05",
      name: "Black Coffee",
      price: 8.99,
      description:
        "Pure and unadulterated, this traditional favorite showcases the full-bodied flavor and aroma of carefully brewed coffee beans, served without milk or sweeteners.",
    },
    // Add more beverage items as needed
  ];

  const menuCategories = ["COFFEE", "TEA", "PASTRIES", "BEVERAGES"];

  const menuItems = {
    COFFEE: coffeeItems,
    TEA: teaItems,
    PASTRIES: pastryItems,
    BEVERAGES: beverageItems,
  };

  const handleCategoryClick = (category) => {
    if (category !== activeCategory) {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        setActiveCategory(category);
        setIsOpening(true);
        setTimeout(() => {
          setIsOpening(false);
        }, 500);
      }, 500);
    }
  };

  const MenuBox = ({ title, isExpanded = false, onClick = null }) => (
    <div
      onClick={onClick}
      className={`border-2 bg-[#FFF8DC] flex flex-col p-6 justify-center items-center relative cursor-pointer
        ${isExpanded ? "min-h-[500px]" : "min-h-[100px]"}
        ${isExpanded && isClosing && "animate-menu-out"}
        ${isExpanded && isOpening && "animate-menu-in"}
        `}
    >
      <img
        src="/media/shape/object-left.png"
        alt="decoration"
        className="absolute top-2 left-2 w-14 h-14"
      />
      <img
        src="/media/shape/object-right.png"
        alt="decoration"
        className="absolute bottom-2 right-2 w-14 h-14"
      />

      <h2 className="text-center text-2xl font-bold">{title}</h2>

      {isExpanded && (
        <div
          className={`space-y-6 transition-all duration-500 overflow-hidden mt-4
          `}
        >
          {menuItems[title]?.map((item,index) => (
            <div key={index} className="flex justify-between">
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-600">{item.id}.</span>
                  <span className="font-semibold">{item.name}</span>
                  <div className="flex-1 border-b border-dotted border-gray-400 mx-2"></div>
                  <span className="font-semibold">${item.price}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1 pl-6">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-[#2A2522] py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Title with decorations */}
        <Title title={"OUR MENU"} />

        {/* Menu layout */}
        <div className="flex sm:flex-row flex-col gap-6">
          {/* Left column - Category boxes */}
          <div className="flex-1">
            {menuCategories.map((category,index) => (
              <div key={index} className="border-2 border-[#DEB887] p-2 mb-4">
                <MenuBox
                  title={category}
                  onClick={() => handleCategoryClick(category)}
                  isActive={category === activeCategory}
                />
              </div>
            ))}
          </div>

          {/* Right column - Expanded menu */}
          <div className="flex-1 border-2 border-[#DEB887] p-4">
            <MenuBox title={activeCategory} isExpanded={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
