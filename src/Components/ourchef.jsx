import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Title from './title';

const OurChefs = () => {
  const chefs = [
    {
      name: 'Chef Leo',
      role: 'Head Chef',
      image: '/media/chef/c-1.png'
    },
    {
      name: 'Chef Luca',
      role: 'Pastry Chef',
      image: '/media/chef/c-2.png'
    },
    {
      name: 'Chef Mia',
      role: 'Sous Chef',
      image: '/media/chef/c-3.png'
    },
    {
      name: 'Chef George',
      role: 'Barista Chef',
      image: '/media/chef/c-4.png'
    }
  ];

  return (
    <div className="bg-[#2A2522] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title Section with Decorative Images */}
        <Title title ={"OUR CHEF"}/>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef) => (
            <div key={chef.name} className="relative group">
              <div className="border border-[#E1BC8A] p-4">
                {/* Chef Image Container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={chef.image} 
                    alt={chef.name} 
                    className="w-full h-72 object-cover"
                  />
                  
                  {/* Social Media Overlay - Hidden by default, shown on hover */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="text-white hover:text-[#E1BC8A] transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-white hover:text-[#E1BC8A] transition-colors">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-white hover:text-[#E1BC8A] transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Chef Info */}
                <div className="text-center bg-white py-4">
                  <h3 className="text-xl font-semibold text-gray-800">{chef.name}</h3>
                  <p className="text-[#E1BC8A]">{chef.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurChefs;