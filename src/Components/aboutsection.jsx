import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#2A2A2A] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Since 1994 Title */}
            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="h-px bg-[#C29D59] flex-grow"></div>
                <h2 className="text-[#C29D59] md:text-4xl text-3xl font-light">
                  Since 1994
                </h2>
                <div className="h-px bg-[#C29D59] flex-grow"></div>
              </div>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="text-white md:text-5xl text-3xl font-bold leading-tight">
                WHERE CULINARY PASSION MEETS UNFORGETTABLE DINING
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg">
              At THE KITCHEN we believe that great food is not just about
              flavors; it's an experience that nourishes the soul. Established
              with a deep passion for the art of gastronomy, our restaurant is a
              testament to our unwavering commitment to delivering exceptional
              dining moments.
            </p>

            {/* Mission Section */}
            <div className="space-y-4">
              <h3 className="text-[#C29D59] md:text-3xl text-2xl font-semibold">
                OUR MISSION
              </h3>
              <p className="text-gray-400 text-lg">
                Our culinary journey began with a vision to create a haven for
                food enthusiasts, where innovation, quality, and heartfelt
                hospitality intertwine. Each dish on our menu is a labor of
                love, meticulously from local farms and purveyors who share our
                dedication to quality.
              </p>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            {/* Est Badge */}
            <div className="absolute -top-16 right-1 z-20 rounded-full p-4 text-center w-max flex flex-col justify-center items-center">
              <div className="flex items-center justify-center">
                <img src="/media/since.png" alt="Badge" className="md:w-32 md:h-32 w-20 h-20" />
              </div>
            </div>

            {/* Images Container */}
            <div className="relative border-4 border-[#C29D59] p-2">
              <div className="relative aspect-[5/4]">
                <img
                  src="/media/about/image-1.png"
                  alt="Coffee equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
