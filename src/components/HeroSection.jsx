import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">HELLO I AM</h1>
        <h2 className="text-4xl font-bold mb-4">John Doe</h2>
        <p className="text-xl mb-8">
          Crafting user-friendly websites and apps to impress.
        </p>
        <h3 className="text-xl font-bold mb-4">
          Fullstack Web- & App Developer
        </h3>
        <Link to="/contact">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            START CONSULTING
          </button>
        </Link>
        <p className="text-sm mt-4">
          {isOnline ? (
            <span className="bg-green-500 rounded-full w-4 h-4 inline-block mr-1"></span>
          ) : (
            <span className="bg-red-500 rounded-full w-4 h-4 inline-block mr-1"></span>
          )}
          {isOnline ? "online" : "offline"}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
