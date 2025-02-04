import React from 'react';
import MenuSection from '../Components/menu';
import NewsletterSection from '../Components/newsletter';
import FoodGalleryInfinite from '../Components/infinitegallery';
import PopularDealsSection from '../Components/populardeals';

const Menu = () => {
  const styles = {
    fall: {
      animation: 'fall linear infinite',
    },
    keyframes: `
      @keyframes fall {
        0% { transform: translateY(-100%) rotate(0deg); }
        100% { transform: translateY(100vh) rotate(360deg); }
      }
    `,
  };

  return (
    <>
      <style>{styles.keyframes}</style>

      <section className="relative flex items-center justify-center min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/media/banner/banner.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Menu Title with Decorative Elements */}
        <div className="relative z-10 flex items-center justify-center gap-6 md:gap-8 lg:gap-12">
          <img 
            src="/media/shape/set-left.png" 
            alt=""
            className="w-16 md:w-24 lg:w-32" 
          />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#C29D59]">
            MENU
          </h1>
          <img 
            src="/media/shape/set-right.png" 
            alt=""
            className="w-16 md:w-24 lg:w-32" 
          />
        </div>

        {/* Decorative Coffee Beans - With Animation */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, index) => (
            <div
              key={index}
              style={{
                ...styles.fall,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
                position: 'absolute'
              }}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-[#C29D59] rounded-full opacity-30" />
            </div>
          ))}
        </div>
      </section>
      <MenuSection/>
      <PopularDealsSection  />
      <FoodGalleryInfinite/>
      <NewsletterSection/>


    </>
  );
};

export default Menu;