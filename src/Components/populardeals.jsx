import React from 'react';
import Title from './title';

const PopularDealsSection = () => {
  const deals = [
    {
      title: "Morning Delight",
      features: [
        "Coffee + Pastry Combo",
        "Perfect Start to Your Day",
        "Discounted Breakfast Pair"
      ],
      price: 5.99,
      image: "/media/deals/Image-4.png" // Replace with your breakfast image path
    },
    {
      title: "Happy Hour Special",
      features: [
        "BOGO Beverages",
        "Double the Refreshment",
        "Limited-Time Offer"
      ],
      price: 10.99,
      image: "/media//deals/Image-5.png" // Replace with your coffee special image path
    }
  ];

  const DealCard = ({ deal }) => (
    <div className="relative sm:ml-20 ml-2 mt-20">
      <img 
        src={deal.image} 
        alt={deal.title}
        className="flex-1 rounded-lg"
      />
      <div className="absolute md:-top-16 md:-left-16 -top-8 -left-3 bg-[#FFF8DC] md:p-6 p-3 rounded shadow-lg border-2 border-[#B8860B] md:min-w-[300px]">
        <h3 className="text-2xl font-bold text-[#DEB887] mb-4">
          {deal.title}
        </h3>
        <ul className="space-y-2 mb-4">
          {deal.features.map((feature, index) => (
            <li 
              key={index}
              className="text-gray-700"
            >
              • {feature}
            </li>
          ))}
        </ul>
        <p className="text-2xl font-bold text-[#8B4513]">
          ${deal.price}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-[#2A2522] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <Title title = {"Popular Deals"}/>

        {/* Deals Grid */}
        <div className="flex sm:flex-row flex-col justify-center">
          {deals.map((deal, index) => (
            <DealCard key={index} deal={deal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDealsSection;