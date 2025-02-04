import React from "react";
import MenuSection from "../Components/menu";
import PopularDealsSection from "../Components/populardeals";
import BookTableSection from "../Components/booktable";
import AchievementsSection from "../Components/achievement";
import OurChefs from "../Components/ourchef";
import FoodGalleryInfinite from "../Components/infinitegallery";
import TestimonialsCarousel from "../Components/testimonial";
import NewsletterSection from "../Components/newsletter";
import Title from "../Components/title";

const Home = () =>
{
  const coffees = [
    {
      name: "MOCHA DELIGHT",
      price: 14.99,
      image: "/media/deals/Image-1.png", // Replace with your image path
    },
    {
      name: "JAVA BLISS",
      price: 14.99,
      image: "/media/deals/Image-2.png", // Replace with your image path
    },
    {
      name: "ESPRESSO EUPHORIA",
      price: 14.99,
      image: "/media/deals/Image-3.png", // Replace with your image path
    },
  ];

  return (
    <>
      {/* Caffeine Corner section code */ }
      <div
        className="relative bg-cover bg-center h-screen md:mx-0"
        style={ { backgroundImage: "url(../../media/banner/bg.png)" } }
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-end px-4 sm:px-6 lg:px-8 py-20 sm:py-2">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white uppercase mb-4">
            Caffeine Corner
          </h1>
          <div className="flex items-end">
            <div className="mx-10 w-full">
              <div className="sm:w-56 w-28 h-0.5 bg-[#e1c976] my-1"></div>
              <div className="sm:w-56 w-28 h-0.5 bg-[#e1c976] my-1"></div>
            </div>
            <div className="w-full">
              <div className="sm:w-56 w-28 h-0.5 bg-[#e1c976] my-1"></div>
              <div className="sm:w-56 w-28 h-0.5 bg-[#e1c976] my-1"></div>
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto mt-4">
            Welcome to Caffeine Corner, where every sip is a moment of pure
            bliss. Immerse yourself in the rich aromas & flavors of our
            handcrafted coffee.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto mt-4">
            From the smooth & velvety lattes to the bold & robust espressos, our
            expertly roasted beans are carefully sourced to deliver an
            unparalleled coffee experience.
          </p>

          <div className="flex items-center my-20 justify-center w-full">
            {/* Left Arrow */ }
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div className="flex-grow h-1 bg-[#e1c976] my-1"></div>

            {/* Menu Button */ }
            <div className="px-6 py-2 bg-[#2A2522] sm:text-lg text-sm  text-white font-semibold text-center rounded-full border border-[#e1c976] shadow-md">
              DISCOVER OUR MENU
            </div>
            <div className="flex-grow h-1 bg-[#e1c976] my-1"></div>

            {/* Right Arrow */ }
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Menu section */ }

      <div className="relative bg-[#2A2522] mt-20 flex items-center justify-center w-full">
        {/* Background */ }
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#2A2522] "></div>
        </div>

        {/* Content */ }
        <div className="relative bg-gray-900 border-2 border-[#e1c976] rounded-lg  shadow-lg max-w-4xl mx-3">
          {/* Badge */ }
          <div style={ { transformOrigin: "top" } } className="absolute -top-20 left-1/2 transform -translate-x-1/2 rounded-full shadow-lg flex items-center justify-center">

            <img src="/media/since.png" alt="Badge" className="scale-[70%]" />

          </div>

          {/* Image */ }
          <img
            src="/media/about/image-1.png"
            alt="Coffee Setup"
            className="rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* PREMIUM BREWS */ }

      <div className="bg-[#2A2522] py-8 md:py-16 ">
        <div className="max-w-6xl mx-auto">
          {/* Title Section with Decorative Images */ }
          <Title title={ "PREMIUM BREWS" } />

          {/* Coffee Cards Container */ }
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            { coffees.map( ( coffee, index ) => (
              <div key={ index } className="flex flex-col items-center">
                {/* Coffee Image */ }
                <div className="mb-4">
                  <img
                    src={ coffee.image }
                    alt={ coffee.name }
                    className="w-60 h-48 object-cover"
                  />
                </div>

                {/* Coffee Name */ }
                <h3 className="text-white text-xl font-bold mb-2">
                  { coffee.name }
                </h3>

                {/* Price */ }
                <p className="text-[#DEB887] text-2xl font-semibold mb-4">
                  ${ coffee.price }
                </p>

                {/* Book Now Button */ }
                <button className="bg-[#DEB887] text-[#2A2522] px-6 py-2 font-semibold hover:bg-[#C19A6B] transition-colors duration-300">
                  BOOK NOW
                </button>
              </div>
            ) ) }
          </div>
        </div>
      </div>

      <MenuSection />
      {/* <PopularDealsSection /> */ }
      {/* <BookTableSection /> */ }
      {/* <AchievementsSection /> */ }
      {/* <OurChefs /> */ }
      {/* <FoodGalleryInfinite /> */ }
      {/* <TestimonialsCarousel /> */ }
      {/* <NewsletterSection /> */ }
    </>
  );
};

export default Home;
