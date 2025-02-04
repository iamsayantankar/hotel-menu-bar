import React, { useState } from 'react';

const BookTableSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    time: '',
    deal: '',
    date: ''
  });

  const deals = [
    "Morning Delight - $5.99",
    "Happy Hour Special - $10.99",
    "Premium Coffee Bundle - $14.99",
    "Family Breakfast Pack - $24.99"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-[#2A2522] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Booking Form */}
          <div className="relative border-2 border-[#B8860B] bg-[#FFF8DC] p-8 rounded">
            {/* Title with decorations */}
            <div className="flex items-center justify-center mb-8">
              <img 
                src="/media/shape/set-left-small.png"
                alt="Left decoration"
              />
              <h2 className="text-3xl font-bold text-[#2A2522] mx-4">
                BOOK TABLE
              </h2>
              <img 
                src="/media/shape/set-right-small.png"   
                alt="Right decoration"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full p-3 border-b-2 border-[#504f4e] bg-transparent focus:outline-none focus:border-[#8B4513]"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full p-3 border-b-2 border-[#504f4e] bg-transparent focus:outline-none focus:border-[#8B4513]"
                  required
                />
              </div>

              <div>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full p-3 border-b-2 border-[#504f4e] bg-transparent focus:outline-none focus:border-[#8B4513]"
                  required
                />
              </div>

              <div>
                <select
                  name="deal"
                  value={formData.deal}
                  onChange={handleInputChange}
                  className="w-full p-3 border-b-2 border-[#504f4e] bg-transparent focus:outline-none focus:border-[#8B4513]"
                  required
                >
                  <option value="">Select Deal</option>
                  {deals.map((deal, index) => (
                    <option key={index} value={deal}>
                      {deal}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full p-3 border-b-2 border-[#504f4e] bg-transparent focus:outline-none focus:border-[#8B4513]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#cea36c] text-black py-3 px-6 hover:bg-[#ffffff] transition-colors duration-300 font-semibold"
              >
                RESERVE NOW
              </button>
            </form>
          </div>

          {/* Restaurant Image */}
          <div className="hidden md:block">
            <img
              src="/media/banner/bg-2.png" // Replace with your restaurant image
              alt="Restaurant Interior"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTableSection;