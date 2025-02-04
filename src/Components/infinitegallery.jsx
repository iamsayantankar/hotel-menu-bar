import React, { useEffect, useState } from 'react';
import Title from './title';

const FoodGalleryInfinite = () => {
  const [position, setPosition] = useState(0);
  
  const images = [
    "/media/gallery/g-1.png",
    "/media/gallery/g-2.png",
    "/media/gallery/g-3.png",
    "/media/gallery/g-4.png",
    "/media/gallery/g-5.png",
    "/media/gallery/g-6.png",
    "/media/gallery/g-7.png",
    "/media/gallery/g-8.png",
    "/media/gallery/g-9.png",
  ];
  
  // Duplicate images for infinite effect
  const duplicatedImages = [...images, ...images];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev - 1;
        // Reset position when reaching end of original set
        if (Math.abs(newPosition) >= images.length * 100) {
          return 0;
        }
        return newPosition;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-[#2A2522] py-16 overflow-hidden">
      {/* Heading with decorative elements */}
      <Title title = {"FOOD GALLERY"}/>

      {/* Infinite carousel */}
      <div className="relative w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-0"
          style={{ 
            transform: `translateX(${position}px)`,
          }}
        >
          {duplicatedImages.map((img, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 px-2"
            >
              <img
                src={img}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodGalleryInfinite;