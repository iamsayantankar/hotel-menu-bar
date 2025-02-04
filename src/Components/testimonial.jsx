// import React, { useState } from "react";

// const TestimonialsCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       name: "Calamari Hex",
//       text: "Absolutely amazing dining experience at The Kitchen! The flavors were perfectly balanced, and every dish was a work of art. The service was exceptional, and the ambiance added to the overall enjoyment. Highly recommend!",
//     },
//     {
//       name: "James Smith",
//       text: "Outstanding service and incredible food. Every bite was a delightful experience. The attention to detail in presentation and taste is remarkable.",
//     },
//     {
//       name: "Emily Chen",
//       text: "A culinary journey that exceeded all expectations. The fusion of flavors and innovative dishes make this place truly special. Will definitely be coming back!",
//     },
//     {
//       name: "Michael Brown",
//       text: "Exceptional dining experience from start to finish. The atmosphere, service, and most importantly, the food, were all spectacular.",
//     },
//   ];

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section className="bg-[#2A2522] py-16 relative">
//       {/* Header with decorative elements */}
//       <div className="flex items-center justify-center mb-16">
//         <img src="/media/shape/set-left.png" alt="Left decoration" />
//         <h2 className="text-4xl font-bold text-white mx-4">
//           Our Customer’s Reviews
//         </h2>
//         <img src="/media/shape/set-right.png" alt="Right decoration" />
//       </div>

//       {/* Testimonial Card */}
//       <div className="max-w-3xl mx-auto px-4">
//         <div className="bg-white rounded-lg p-8 relative">
//           <div className="text-center">
//             <h3 className="text-2xl font-bold mb-4 text-neutral-900">
//               {testimonials[currentSlide].name}
//             </h3>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               {testimonials[currentSlide].text}
//             </p>
//           </div>
//           {/* Quote mark decoration */}
//           {/* Bottom right decoration - replace with your actual decoration */}
//           <div className="absolute bottom-0 right-0">
//             <img
//               src="/media/shape/quote.png"
//               alt="decoration"
//               className="w-8 h-8 object-contain"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Navigation Dots */}
//       <div className="flex justify-center gap-2 mt-8">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               currentSlide === index
//                 ? "bg-golden w-4"
//                 : "bg-gray-400 hover:bg-golden/70"
//             }`}
//             aria-label={`Go to testimonial ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TestimonialsCarousel;


import React, { useState, useEffect } from "react";
import Title from "./title";

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Calamari Hex",
      text: "Absolutely amazing dining experience at The Kitchen! The flavors were perfectly balanced, and every dish was a work of art. The service was exceptional, and the ambiance added to the overall enjoyment. Highly recommend!",
    },
    {
      name: "James Smith",
      text: "Outstanding service and incredible food. Every bite was a delightful experience. The attention to detail in presentation and taste is remarkable.",
    },
    {
      name: "Emily Chen",
      text: "A culinary journey that exceeded all expectations. The fusion of flavors and innovative dishes make this place truly special. Will definitely be coming back!",
    },
    {
      name: "Michael Brown",
      text: "Exceptional dining experience from start to finish. The atmosphere, service, and most importantly, the food, were all spectacular.",
    },
    {
      name: "Calamari Hex",
      text: "Absolutely amazing dining experience at The Kitchen! The flavors were perfectly balanced, and every dish was a work of art. The service was exceptional, and the ambiance added to the overall enjoyment. Highly recommend!",
    },
    {
      name: "James Smith",
      text: "Outstanding service and incredible food. Every bite was a delightful experience. The attention to detail in presentation and taste is remarkable.",
    },
    {
      name: "Emily Chen",
      text: "A culinary journey that exceeded all expectations. The fusion of flavors and innovative dishes make this place truly special. Will definitely be coming back!",
    },
    {
      name: "Michael Brown",
      text: "Exceptional dining experience from start to finish. The atmosphere, service, and most importantly, the food, were all spectacular.",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Temporarily pause auto-sliding when manually navigating
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section className="bg-[#2A2522] py-16 relative">
      {/* Header with decorative elements */}
      <Title title={"OUR CUSTOMER'S REVIEWS"}/>

      {/* Testimonial Card with smooth transition */}
      <div className="max-w-3xl mx-auto px-4">
        <div 
          className="bg-white rounded-lg p-8 relative min-h-[200px] transition-opacity duration-500"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-neutral-900">
              {testimonials[currentSlide].name}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {testimonials[currentSlide].text}
            </p>
          </div>
          {/* Quote mark decoration */}
          <div className="absolute -bottom-4 -right-4">
            <img
              src="/media/shape/quote.png"
              alt="decoration"
              className="relative w-12 h-12 object-contain bottom-5 right-6"
            />
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Dots */}
      <div className="flex justify-center gap-3 mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 focus:outline-none ${
              currentSlide === index 
                ? "w-8 h-2 bg-[#C29D59]" 
                : "w-2 h-2 bg-gray-400 hover:bg-[#C29D59]/70"
            } rounded-full`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsCarousel;