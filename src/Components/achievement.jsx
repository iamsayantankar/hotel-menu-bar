import React, { useState, useEffect } from "react";
import Title from "./title";

const AchievementsSection = () => {
  const achievements = [
    {
      number: 25,
      suffix: "+",
      title: "Years of Experience",
    },
    {
      number: 1000,
      suffix: "+",
      title: "Services Completed",
    },
    {
      number: 21,
      suffix: "",
      title: "Experienced Staff",
    },
    {
      number: 1220,
      suffix: "+",
      title: "Happy Customers",
    },
  ];

  const Counter = ({ number, suffix, title }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const duration = 2000; // 2 seconds
      const steps = 50;
      const increment = number / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [number]);

    return (
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-[#DEB887] mb-2">
          {count}
          {suffix}
        </div>
        <div className="text-gray-400 text-sm md:text-base">{title}</div>
      </div>
    );
  };

  return (
    <div className="bg-[#2A2522] pt-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <Title title={" OUR ACHIEVEMENTS"} />

        {/* Achievements Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Counter
              key={index}
              number={achievement.number}
              suffix={achievement.suffix}
              title={achievement.title}
            />
          ))}
        </div>

        {/* Video Section */}
        <div className="relative border-4 border-[#E1BC8A] overflow-hidden w-3/4 mx-auto p-6">
          <div className="relative pt-[56.25%]">
            {" "}
            {/* 16:9 Aspect Ratio */}
            {/* <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://youtu.be/J_YVRNVwhiU?si=-dpHsiNMWxNe7jDL"
              title="Coffee Shop Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
            {/* <iframe
            src="https://www.youtube.com/embed/dpHsiNMWxNe7jDL"
            title="Sea Pearl Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
            <iframe
              width="100%"
              height="100%"
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/J_YVRNVwhiU?si=oyhIupDQYWO4NjFe"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Play Button Overlay - Optional */}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-[#B8860B] border-b-8 border-b-transparent ml-1">
              </div>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
